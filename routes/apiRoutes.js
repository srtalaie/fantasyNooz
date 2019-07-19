module.exports = function(app){
    //Pull Data from 4for4's ADP chart
    app.get('/getADPs', function(req, res){
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
    app.get('/getFFP', function(req, res){
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

}