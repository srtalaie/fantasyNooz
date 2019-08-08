const request = require("request");
const cheerio = require("cheerio");

module.exports = function(app){
    //Pull Data from 4for4's ADP chart
    app.get('/api/get4ADPs', function(req, res){
        request("https://www.4for4.com/fantasy-football/adp", function(error, response, html){
            let $ = cheerio.load(html);

            //Declare variables
            let formattedPlayers = [];
            playersArr = [];
            //USe regex to filter info that is scraped
            let regEx = /([0-9]+)([a-zA-Z0-9&_\.-\s]+[^A-Z])([A-Z][A-Z]+)([A-Z][A-Z]-\d+)(-[0-9&_\.-]+\s)/

            $('table').find('tr').each(function(i = 0, td){
                playersArr.push($(td).text());
                return playersArr;
            });
            formattedPlayers = playersArr.map(playerInfo => {
                //Format players info into readable format
                return playerInfo.replace(regEx, '$1 $2 $3 $4');
            });
            //Send info to server
            res.send(formattedPlayers);
        });
    });

    //Scrape data from FFP consensus ranking sheet
    app.get('/api/getFFPADPs', function(req, res){
        request("https://www.fantasypros.com/nfl/rankings/consensus-cheatsheets.php", function(error, response, html){
            let $ = cheerio.load(html);

            //Create an array to hold all of the player objects
            let players = [];

            //Target table and loop through each row
            $('table').find('.player-row').each((i = 0, data)=>{
                let player = {
                    rank: $(`tr.mpb-player-${$(data).attr('data-id')}.player-row`).find('td:nth-child(1)').text(),
                    name: $(data).find('.player-label').find('.full-name').text(),
                    playerLink: `https://www.fantasypros.com${$(data).find('a').attr('href')}`,
                    team: $(data).find('.grey').text(),
                    position: $(`tr.mpb-player-${$(data).attr('data-id')}.player-row`).find('td:nth-child(4)').text(),
                    byeWeek: $(`tr.mpb-player-${$(data).attr('data-id')}.player-row`).find('td:nth-child(5)').text(),
                    bestRank: $(`tr.mpb-player-${$(data).attr('data-id')}.player-row`).find('td:nth-child(6)').text(),
                    worstRank: $(`tr.mpb-player-${$(data).attr('data-id')}.player-row`).find('td:nth-child(7)').text(),
                    average: $(`tr.mpb-player-${$(data).attr('data-id')}.player-row`).find('td:nth-child(8)').text(),
                    stdDev: $(`tr.mpb-player-${$(data).attr('data-id')}.player-row`).find('td:nth-child(9)').text(),
                    adp: $(`tr.mpb-player-${$(data).attr('data-id')}.player-row`).find('td:nth-child(10)').text(),
                    vsADP: $(`tr.mpb-player-${$(data).attr('data-id')}.player-row`).find('td:nth-child(11)').text(),
                };
                //Push each player to the players array
                players.push(player);
            });
            //Send the scraped data to server
            res.send(players); 
        });
    });

    //Scrape article's titles and links from r/fantasyfootball
    app.get("/api/getRticles", function(req, res){
        request("https://old.reddit.com/r/fantasyfootball/", function(error, response, html){
            let $ = cheerio.load(html);
            let articles = []
            $("div.thing").each((i = 0, element)=>{
                //Grab 20 articles
                if (i < 26){
                    let link;
                    let commentsLink;

                    //Split the url to use for the test to see if its a self post or article
                    let testLink = $(element).attr('data-url').split('');

                    //If the link is a reddit self post append the 'https://old.reddit.com' so it goes to the correct
                    //link, if not then use the normal link to the tweet or article and set comments link to the reddit //post, also don't post any commentsLink for the self post because it is redundant
                    if(testLink[0] === '/'){
                        link = `https://old.reddit.com${$(element).attr('data-url')}`;
                        commentsLink = ''
                    } else{
                        link = $(element).attr('data-url');
                        commentsLink = $(element).find('li.first').find('a').attr('href')
                    }

                    let title = $(element).find('p.title').text();
                    
                    //Create articles object to store article info
                    let article = {
                        title: title,
                        commentsLink: `${commentsLink}`,
                        link: `${link}`
                    }

                    //Push article to articles array
                    articles.push(article);
                    i++;
                }
            });

            //Send articles array to server
            res.send(articles);
        });
    });

    //Get RB Stats
    app.get('/rbStats/:id', function(req, res){
        request(`https://www.footballdb.com/fantasy-football/index.html?pos=RB&yr=${req.params.id}&wk=all&rules=1`, function(error, response, html){
            let runningBacks = [];
            let $ = cheerio.load(html);
            $('tbody:nth-child(2)').find('tr').each(function(i = 0, tr){
                let player = {
                    name: $(tr).find('.hidden-xs').find('a').text(),
                    link: `https://www.footballdb.com/${$(tr).find('.hidden-xs').find('a').attr('href')}`,
                    totalpts: $(tr).find('.hilite').text(),
                    passingStats: {
                        att: $(tr).find('td:nth-child(4)').text(),
                        cmp: $(tr).find('td:nth-child(5)').text(), 
                        yds: $(tr).find('td:nth-child(6)').text(),
                        td: $(tr).find('td:nth-child(7)').text(),
                        int: $(tr).find('td:nth-child(8)').text(),
                        twoPt: $(tr).find('td:nth-child(9)').text()
                    },
                    rushingStats: {
                        att: $(tr).find('td:nth-child(10)').text(),
                        yds: $(tr).find('td:nth-child(11)').text(),
                        td: $(tr).find('td:nth-child(12)').text(),
                        twoPt: $(tr).find('td:nth-child(13)').text()                
                    },
                    receivingStats : {
                        rec: $(tr).find('td:nth-child(14)').text(),
                        yds: $(tr).find('td:nth-child(15)').text(),
                        td: $(tr).find('td:nth-child(16)').text(),
                        twoPt: $(tr).find('td:nth-child(17)').text()
                    },
                    fl: $(tr).find('td:nth-child(18)').text()
                }
                runningBacks.push(player);
                return runningBacks;
            })
            res.send(runningBacks)
        })
    });

    //Get WR Stats
    app.get('/rbStats/:id', function(req, res){
        request(`https://www.footballdb.com/fantasy-football/index.html?pos=WR&yr=${req.params.id}&wk=all&rules=1`, function(error, response, html){
            let wideReceivers = [];
            let $ = cheerio.load(html);
            $('tbody:nth-child(2)').find('tr').each(function(i = 0, tr){
                let player = {
                    name: $(tr).find('.hidden-xs').find('a').text(),
                    link: `https://www.footballdb.com/${$(tr).find('.hidden-xs').find('a').attr('href')}`,
                    totalpts: $(tr).find('.hilite').text(),
                    passingStats: {
                        att: $(tr).find('td:nth-child(4)').text(),
                        cmp: $(tr).find('td:nth-child(5)').text(), 
                        yds: $(tr).find('td:nth-child(6)').text(),
                        td: $(tr).find('td:nth-child(7)').text(),
                        int: $(tr).find('td:nth-child(8)').text(),
                        twoPt: $(tr).find('td:nth-child(9)').text()
                    },
                    rushingStats: {
                        att: $(tr).find('td:nth-child(10)').text(),
                        yds: $(tr).find('td:nth-child(11)').text(),
                        td: $(tr).find('td:nth-child(12)').text(),
                        twoPt: $(tr).find('td:nth-child(13)').text()                
                    },
                    receivingStats : {
                        rec: $(tr).find('td:nth-child(14)').text(),
                        yds: $(tr).find('td:nth-child(15)').text(),
                        td: $(tr).find('td:nth-child(16)').text(),
                        twoPt: $(tr).find('td:nth-child(17)').text()
                    },
                    fl: $(tr).find('td:nth-child(18)').text()
                }
                wideReceivers.push(player);
                return wideReceivers;
            })
            res.send(wideReceivers)
        })
    });

    //Get TE Stats
    app.get('/rbStats/:id', function(req, res){
        request(`https://www.footballdb.com/fantasy-football/index.html?pos=TE&yr=${req.params.id}&wk=all&rules=1`, function(error, response, html){
            let tightEnds = [];
            let $ = cheerio.load(html);
            $('tbody:nth-child(2)').find('tr').each(function(i = 0, tr){
                let player = {
                    name: $(tr).find('.hidden-xs').find('a').text(),
                    link: `https://www.footballdb.com/${$(tr).find('.hidden-xs').find('a').attr('href')}`,
                    totalpts: $(tr).find('.hilite').text(),
                    passingStats: {
                        att: $(tr).find('td:nth-child(4)').text(),
                        cmp: $(tr).find('td:nth-child(5)').text(), 
                        yds: $(tr).find('td:nth-child(6)').text(),
                        td: $(tr).find('td:nth-child(7)').text(),
                        int: $(tr).find('td:nth-child(8)').text(),
                        twoPt: $(tr).find('td:nth-child(9)').text()
                    },
                    rushingStats: {
                        att: $(tr).find('td:nth-child(10)').text(),
                        yds: $(tr).find('td:nth-child(11)').text(),
                        td: $(tr).find('td:nth-child(12)').text(),
                        twoPt: $(tr).find('td:nth-child(13)').text()                
                    },
                    receivingStats : {
                        rec: $(tr).find('td:nth-child(14)').text(),
                        yds: $(tr).find('td:nth-child(15)').text(),
                        td: $(tr).find('td:nth-child(16)').text(),
                        twoPt: $(tr).find('td:nth-child(17)').text()
                    },
                    fl: $(tr).find('td:nth-child(18)').text()
                }
                tightEnds.push(player);
                return tightEnds;
            })
            res.send(tightEnds)
        })
    });

    //Get QB Stats
    app.get('/rbStats/:id', function(req, res){
        request(`https://www.footballdb.com/fantasy-football/index.html?pos=QB&yr=${req.params.id}&wk=all&rules=1`, function(error, response, html){
            let runningBacks = [];
            let $ = cheerio.load(html);
            $('tbody:nth-child(2)').find('tr').each(function(i = 0, tr){
                let player = {
                    name: $(tr).find('.hidden-xs').find('a').text(),
                    link: `https://www.footballdb.com/${$(tr).find('.hidden-xs').find('a').attr('href')}`,
                    totalpts: $(tr).find('.hilite').text(),
                    passingStats: {
                        att: $(tr).find('td:nth-child(4)').text(),
                        cmp: $(tr).find('td:nth-child(5)').text(), 
                        yds: $(tr).find('td:nth-child(6)').text(),
                        td: $(tr).find('td:nth-child(7)').text(),
                        int: $(tr).find('td:nth-child(8)').text(),
                        twoPt: $(tr).find('td:nth-child(9)').text()
                    },
                    rushingStats: {
                        att: $(tr).find('td:nth-child(10)').text(),
                        yds: $(tr).find('td:nth-child(11)').text(),
                        td: $(tr).find('td:nth-child(12)').text(),
                        twoPt: $(tr).find('td:nth-child(13)').text()                
                    },
                    receivingStats : {
                        rec: $(tr).find('td:nth-child(14)').text(),
                        yds: $(tr).find('td:nth-child(15)').text(),
                        td: $(tr).find('td:nth-child(16)').text(),
                        twoPt: $(tr).find('td:nth-child(17)').text()
                    },
                    fl: $(tr).find('td:nth-child(18)').text()
                }
                runningBacks.push(player);
                return runningBacks;
            })
            res.send(runningBacks)
        })
    });

    //Get K Stats
    app.get('/kStats/:id', function(req, res){
        request(`https://www.footballdb.com/fantasy-football/index.html?pos=K&yr=${req.params.id}&wk=all&rules=1`, function(error, response, html){
            let kickers = [];
            let $ = cheerio.load(html);
            $('tbody:nth-child(2)').find('tr').each(function(i = 0, tr){
                let player = {
                    name: $(tr).find('.hidden-xs').find('a').text(),
                    link: `https://www.footballdb.com/${$(tr).find('.hidden-xs').find('a').attr('href')}`,
                    totalpts: $(tr).find('.hilite').text(),
                    xpa: $(tr).find('td:nth-child(4)').text(),
                    xpm: $(tr).find('td:nth-child(5)').text(),
                    fga: $(tr).find('td:nth-child(6)').text(),
                    fgm: $(tr).find('td:nth-child(7)').text(),
                    fiftyPlus: $(tr).find('td:nth-child(8)').text()
                }
                kickers.push(player);
                return kickers;
            })
            res.send(kickers)
        })
    });

    //Get DST Stats
    app.get('/dstStats/:id', function(req, res){
        request(`https://www.footballdb.com/fantasy-football/index.html?pos=DST&yr=${req.params.id}&wk=all&rules=1`, function(error, response, html){
            let dst = [];
            let $ = cheerio.load(html);
            $('tbody:nth-child(2)').find('tr').each(function(i = 0, tr){
                let player = {
                    name: $(tr).find('.hidden-xs').find('a').text(),
                    link: `https://www.footballdb.com/${$(tr).find('.hidden-xs').find('a').attr('href')}`,
                    totalpts: $(tr).find('.hilite').text(),
                    sack: $(tr).find('td:nth-child(4)').text(),
                    int: $(tr).find('td:nth-child(5)').text(),
                    saf: $(tr).find('td:nth-child(6)').text(),
                    fr: $(tr).find('td:nth-child(7)').text(),
                    blk: $(tr).find('td:nth-child(8)').text(),
                    td: $(tr).find('td:nth-child(9)').text(),
                    pa: $(tr).find('td:nth-child(10)').text(),
                    passYG: $(tr).find('td:nth-child(11)').text(),
                    ryshYG: $(tr).find('td:nth-child(12)').text(),
                    totalYG: $(tr).find('td:nth-child(13)').text()
    
                }
                dst.push(player);
                return dst;
            })
            res.send(dst)
        })
    });
}