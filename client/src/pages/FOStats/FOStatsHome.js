import React, { Component } from 'react';
import API from '../../utils/API.js';
import '../FOStats/style.css';
import FOTeamEffCard from '../../components/FOTeamEffCard.js';
import FOTeamOffCard from '../../components/FOTeamOffCard.js';
import FOTeamDefCard from '../../components/FOTeamDefCard.js';
import FOTeamSTCard from '../../components/FOTeamSTCard.js';
import FOOLineCard from '../../components/FOOLineCard.js';
import { Button } from '@material-ui/core';

const date = new Date();

class FOStatsHome extends Component {

    state = {
        tabValue: '',
        year: '',
        teameffStats: [],
        teamoffStats: [],
        teamdefStats: [],
        teamstStats: [],
        olineStats: [],
        years: []
    }

    componentDidMount(){
        this.populateYears();
        this.setState({ year: this.state.years[1] });
        this.runPromises();
    }

    submitYear = () =>{
        this.runPromises();
    }

    runPromises = () => {
        let that = this;
        Promise.resolve().then(function(){
            return that.loadTeamEffData();
        }).then(function(){
            return that.loadTeamOffData();
        }).then(function(){
            return that.loadTeamDefData();
        }).then(function(){
            return that.loadTeamStData();
        }).then(function(){
            return that.loadOlineData();
        })
    }

    populateYears = () => {
        let currDate = parseInt(date.getFullYear());
        let startDate = currDate - 6;
        let yearsArr = [];
        while(currDate > startDate){
            yearsArr.push(currDate.toString());
            currDate--;
        }
        this.setState({ years: yearsArr })
    }

    handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    handleClick = (e) => {
        e.preventDefault();
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    loadTeamEffData = () => {
        API.getFOTeamEff(this.state.year)
        .then(
            res => this.setState({ teameffStats: res.data })
        )
        .catch(err => console.log(err))
    }

    loadTeamOffData = () => {
        API.getFOTeamOff(this.state.year)
        .then(
            res => this.setState({ teamoffStats: res.data })
        )
        .catch(err => console.log(err))
    }

    loadTeamDefData = () => {
        API.getFOTeamDef(this.state.year)
        .then(
            res => this.setState({ teamdefStats: res.data })
        )
        .catch(err => console.log(err))
    }

    loadTeamStData = () => {
        API.getFOTeamST(this.state.year)
        .then(
            res => this.setState({ teamstStats: res.data })
        )
        .catch(err => console.log(err))
    }

    loadOlineData = () => {
        API.getFOOline(this.state.year)
        .then(
            res => this.setState({ olineStats: res.data })
        )
        .catch(err => console.log(err))
    }

    render(){
        let content = '';
        switch(this.state.tabValue){
            case 'teameff':
                content = '';
                content = 
                    <div>
                        <div>
                            <p>This shows the basic DVOA rankings for Offense, Deffense, Special Teams. To see further details on each unit select the specific unit you want to view.</p>
                            <p>DVOA is adjusted based on strength of opponents, fumbles lost and recovered are equal and for special teams weather, stadium and location.Football Outsider's Non-Adjusted Total Value does not include the previouos adjustments</p>
                        </div>
                        <table>
                            <thead>
                                <tr>
                                    <th>Rank</th>
                                    <th>Team</th>
                                    <th>Total DVOA</th>
                                    <th>Last Year Rank</th>
                                    <th>Non Adj Total VOA</th>
                                    <th>Wins-Losses</th>
                                    <th>Off. DVOA</th>
                                    <th>Off. Rank</th>
                                    <th>Def. DVOA</th>
                                    <th>Def. Rank</th>
                                    <th>ST. DVOA</th>
                                    <th>ST. Rank</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.teameffStats.map(team => {
                                    return(
                                        <FOTeamEffCard 
                                            rank = {team.rank}
                                            name = {team.name}
                                            totalDVOA = {team.totalDVOA}
                                            lastYear = {team.lastYear}
                                            nonAdjTotVOA = {team.nonAdjTotVOA}
                                            winsLoss = {team.winsLoss}
                                            offDVOA = {team.offDVOA}
                                            offRank = {team.offRank}
                                            defDVOA = {team.defDVOA}
                                            defRank = {team.defRank}
                                            stDVOA = {team.stDVOA}
                                            stRank = {team.stRank}
                                        />
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
            break;
            case 'teamoff':
                content = '';
                content = 
                    <div>
                        <div>
                            <p>The weighted offense reflects Fofotball Outsider's metric of prioritizing wins later in the season and wins in the beginning of the season being less important. This shows how well the team is playing towards the end of the season.</p>
                            <p>Offensive DVOA also takes into account negative yards that are not due to a rushing/passing play (i.e. penalties).</p>
                        </div>
                        <table>
                            <thead>
                                <tr>
                                    <th>Rank</th>
                                    <th>Team</th>
                                    <th>Off. DVOA</th>
                                    <th>Last Year Rank</th>
                                    <th>Weighted Off.</th>
                                    <th>Off. Rank</th>
                                    <th>Pass Off.</th>
                                    <th>Pass Rank</th>
                                    <th>Rush Off.</th>
                                    <th>Rush Rank</th>
                                    <th>Non Adj. Total</th>
                                    <th>Non Adj. Tot. Pass</th>
                                    <th>Non Adj. Tot. Rush</th>
                                    <th>Var.</th>
                                    <th>Var. Rank</th>
                                    <th>Sched.</th>
                                    <th>Sched. Rank</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.teamoffStats.map(team => {
                                    return(
                                        <FOTeamOffCard 
                                            rank = {team.rank}
                                            name = {team.name}
                                            offDVOA = {team.offDVOA}
                                            lastYear = {team.lastYear}
                                            weiOff = {team.weiOff}
                                            offRank = {team.offRank}
                                            passOff = {team.passOff}
                                            passRank = {team.passRank}
                                            rushOff = {team.rushOff}
                                            rushRank = {team.rushRank}
                                            nonAdjTot = {team.nonAdjTot}
                                            nonAdjTotPass= {team.nonAdjTotPass}
                                            nonAdjTotRush= {team.nonAdjTotRush}
                                            variance= {team.variance}
                                            varRank= {team.varRank}
                                            sched= {team.sched}
                                            schedRank= {team.schedRank}
                                        />
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
            break;
            case 'teamdef':
                content = '';
                content = 
                    <div>
                        <div>
                            <p>The weighted offense reflects Fofotball Outsider's metric of prioritizing wins later in the season and wins in the beginning of the season being less important. This shows how well the team is playing towards the end of the season.</p>
                            <p>Remember when considering defenses negative DVOA is better.</p>
                        </div>
                        <table>
                            <thead>
                                <tr>
                                    <th>Rank</th>
                                    <th>Team</th>
                                    <th>Def. DVOA</th>
                                    <th>Last Year Rank</th>
                                    <th>Weighted Def.</th>
                                    <th>Def. Rank</th>
                                    <th>Pass Def.</th>
                                    <th>Pass Rank</th>
                                    <th>Rush Def.</th>
                                    <th>Rush Rank</th>
                                    <th>Non Adj. Total</th>
                                    <th>Non Adj. Tot. Pass</th>
                                    <th>Non Adj. Tot. Rush</th>
                                    <th>Var.</th>
                                    <th>Var. Rank</th>
                                    <th>Sched.</th>
                                    <th>Sched. Rank</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.teamdefStats.map(team => {
                                    return(
                                        <FOTeamDefCard 
                                            rank = {team.rank}
                                            name = {team.name}
                                            defDVOA = {team.defDVOA}
                                            lastYear = {team.lastYear}
                                            weiDef = {team.weiDef}
                                            defRank = {team.defRank}
                                            passDef = {team.passDef}
                                            passRank = {team.passRank}
                                            rushDef = {team.rushDef}
                                            rushRank = {team.rushRank}
                                            nonAdjTot = {team.nonAdjTot}
                                            nonAdjTotPass= {team.nonAdjTotPass}
                                            nonAdjTotRush= {team.nonAdjTotRush}
                                            variance= {team.variance}
                                            varRank= {team.varRank}
                                            sched= {team.sched}
                                            schedRank= {team.schedRank}
                                        />
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
            break;
            case 'teamst':
                content = '';
                content = 
                    <div>
                        <div>
                            <p>DVOA for special teams is caluclated by taking into account the points the special teams receives from field goals/extra points, kickoffs, kick returns, punts, punt returns.</p>
                            <p>Points are calculated by:
                                <ul>
                                    <li>Field Goals compares each field goal to league average of field goals from the same distance.</li>
                                    <li>Yards For kicking and punting and kick returning and punt returning are based on field position as a result of the punt and kick and the average likliehood an offense will score from that position. They are adjusted for weather, stadium and location.
                                        <ul>
                                            <li>Kicking and punting are based on net yardage.</li>
                                            <li>Kick returning and punt returning are based on return yardage.</li>
                                            <li>2-pt conversions and onside kicks are omitted.</li>
                                        </ul>
                                    </li>
                                </ul>
                            </p>
                            <p>According to Football Outsider's: 
                                <ul>
                                    <li>
                                        Hiddent points represents the advantage teams have received from elements of special teams generally out of their control: opposing field goals, kickoff distance, and punt distance. It is listed as points worth of estimated field position, and is ranked from the team with the biggest advantage to the team with the biggest disadvantage
                                    </li>
                                    <li>
                                        Weather represents the estimated effect of weather, altitude, and domes on each team's special teams performance. It is listed as points worth of estimated field position, and is ranked from the team with the biggest advantage to the team with the biggest disadvantage.
                                    </li>
                                    <li>
                                        Non-Adjusted DVOA represents the DVOA with the above weather adjustments removed.
                                    </li>
                                </ul>
                            </p>
                        </div>
                        <table>
                            <thead>
                                <tr>
                                    <th>Rank</th>
                                    <th>Team</th>
                                    <th>ST. DVOA</th>
                                    <th>Last Year Rank</th>
                                    <th>Weighted ST.</th>
                                    <th>ST. Rank</th>
                                    <th>FG/XP.</th>
                                    <th>Kick</th>
                                    <th>Kick Ret.</th>
                                    <th>Punt</th>
                                    <th>Punt Ret.</th>
                                    <th>Hidden Pts.</th>
                                    <th>Hidden Pts. Rank</th>
                                    <th>Weather Pts.</th>
                                    <th>Weather Pts. Rank</th>
                                    <th>Non Adj. VOA</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.teamstStats.map(team => {
                                    return(
                                        <FOTeamSTCard 
                                            rank = {team.rank}
                                            name = {team.name}
                                            stDVOA = {team.stDVOA}
                                            lastYear = {team.lastYear}
                                            weiST = {team.weiST}
                                            stRank = {team.stRank}
                                            fgXp = {team.fgXp}
                                            kick = {team.kick}
                                            kickRet = {team.kickRet}
                                            punt = {team.punt}
                                            puntRet = {team.puntRet}
                                            hiddenPts= {team.hiddenPts}
                                            hiddenPtsRk= {team.hiddenPtsRk}
                                            weatherPts={team.weatherPts}
                                            weatherPtsRk= {team.weatherPtsRk}
                                            nonAdjVOA= {team.nonAdjVOA}
                                        />
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
            break;
            case 'oline':
                content = '';
                content = 
                    <div>
                        <div>
                            <p>Football Outsiders ranks their adjusted line yards based on all RB carries and how much of those yards are the responsibility of the line: </p>
                                <ul>
                                    <li>Losses = 120% Value</li>
                                    <li>0 - 4 = 100% Value</li>
                                    <li>5 - 10 = 50% Value</li>
                                    <li>11+ = 0% Value</li>
                                </ul>
                            <p>The numbers are then adjusted based on the down, opponent, situation, etc.</p>
                            <p>RB Yards refers to YPC for the team's RBs as a whole</p>
                            <p>Power Success refers to runs on 3rd or 4th down with 2 yards or less that achieved a first down or touchdown. This includes QBs as well.</p>
                            <p>Stuffed refers to % of runs where the RB is tackled on or behind the line of scrimmage. #1 is less often while #32 is often.</p>
                            <p>Second Level Yards are the yards an RB gains that are 5-10 yards past the line of scrimmage divided by the total carries</p>
                            <p>Open field yards are 10+ yards past the line of scrimmage divided by the total carries.</p>
                            <p>The stats at the bottom represent the NFL average.</p>
                            <p>According to Football Outsiders a team with a high ranking in Adjusted Line Yards but low Open Field Yards relies heavily on its o-line. While the inverse means the team relies heavily on its RBs.</p>
                            <p>For Pass Blocking the Adjusted Sack Rate is the amount of sacks and intentional groundings divided by attempt and adjusted for distance, opponent and down<./p>
                        </div>
                         <table>
                            <thead>
                                <tr>
                                    <th colspan="12">Run Blocking</th>
                                    <th colspan="4">Pass Blocking</th>
                                </tr>
                                <tr>
                                    <th>Rank</th>
                                    <th>Team</th>
                                    <th>Adj. Line Yards</th>
                                    <th>RB Yards</th>
                                    <th>Power Success</th>
                                    <th>Power Rank</th>
                                    <th>Stuffed</th>
                                    <th>Stuffed Rank</th>
                                    <th>2nd Lvl. Yards</th>
                                    <th>2nd Lvl. Rank</th>
                                    <th>Open Field Yards</th>
                                    <th>Open Field Rank</th>
                                    <th>Team</th>
                                    <th>Rank</th>
                                    <th>Sacks</th>
                                    <th>Adj. Sack Rate</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.olineStats.map(team => {
                                    return(
                                        <FOOLineCard 
                                            rank = {team.rank}
                                            name = {team.name}
                                            adjLineYds = {team.adjLineYds}
                                            rbYds = {team.rbYds}
                                            pwrSucc = {team.pwrSucc}
                                            pwrRk = {team.pwrRk}
                                            stufd = {team.stufd}
                                            stufdRk = {team.stufdRk}
                                            scndLvlYds = {team.scndLvlYds}
                                            scndLvlRk = {team.scndLvlRk}
                                            openFldYds = {team.openFldYds}
                                            openFldRk= {team.openFldRk}
                                            passTeamName= {team.passTeamName}
                                            passPrtctRk={team.passPrtctRk}
                                            sacks= {team.sacks}
                                            adjSackRt= {team.adjSackRt}
                                        />
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                break;
            default:
                content = ''
                content = <div>Please choose which year and which Football Outsiders table you would like to view.</div>
        }
        return(
            <div>
                <div className="container">
                    <div>
                        <p>ALL OF THE STATISTICS ARE FROM <a href="https://www.footballoutsiders.com/">FOOBALL OUTSIDERS</a></p>
                        <p>DVOA(Defense-adjusted Value Over Average) is a metric used by <a href="https://www.footballoutsiders.com/info/methods">Football Outsiders</a> that rates a every single play for a team against the league average based on the situation. By doing so each situation is not treated the same. Redzone plays are worth more than plays in your own territory. Gaining 5 yards to get a 1st down on 3rd is worth more than gaining that same amount of yards on a 1st down. They also adjust these metrics against how difficult the opponent is. DVOA is measured in % above or below league avaerage.</p>
                        <p>For offense a higher percentage is good. For defence the inverse is true. And for Special Teams the yardage and how likely a team can score from field position.</p>
                    </div>
                    <div className="yearWeekContainer">

                        <p>Year: <select onChange={this.handleChange} name='year'>
                            <option value={this.state.year}>{this.state.year}</option>
                            <option value={this.state.years[0]}>{this.state.years[0]}</option>
                            <option value={this.state.years[1]}>{this.state.years[1]}</option>
                            <option value={this.state.years[2]}>{this.state.years[2]}</option>
                            <option value={this.state.years[3]}>{this.state.years[3]}</option>
                            <option value={this.state.years[4]}>{this.state.years[4]}</option>
                            <option value={this.state.years[5]}>{this.state.years[5]}</option>
                        </select>
                        </p>
                    </div>
                    <div>
                        <div className="statsNavBar">
                            <button className="tabButtons" value="teameff" onClick={this.handleClick} name="tabValue">Team Efficiency</button>
                            <button className="tabButtons" value="teamoff" onClick={this.handleClick} name="tabValue">Team Offense</button>
                            <button className="tabButtons" value="teamdef" onClick={this.handleClick} name="tabValue">Team Deffense</button>
                            <button className="tabButtons" value="teamst" onClick={this.handleClick} name="tabValue">Team Special Teams</button>
                            <button className="tabButtons" value="oline" onClick={this.handleClick} name="tabValue">O-Lines</button>
                        </div>
                    </div>
                        <Button onClick={this.submitYear}>Submit</Button>
                    <div>
                        {content}
                    </div>
                </div>

            </div>
        )
    }
}

export default FOStatsHome;