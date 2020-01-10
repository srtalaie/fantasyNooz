import React, { Component } from 'react';
import API from '../../utils/API.js';
import '../FOStats/style.css';
import FOTeamEffCard from '../../components/FOTeamEffCard.js';
import FOTeamOffCard from '../../components/FOTeamOffCard.js';
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
        });
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

    render(){
        let content = '';
        switch(this.state.tabValue){
            case 'teameff':
                content = '';
                content = 
                    <div>
                        <div>
                            TODO KEY
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
                            TODO KEY
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
            default:
                content = ''
                content = <div>Please choose which year and which Football Outsiders table you would like to view.</div>
        }
        return(
            <div>
                <div>
                    TODO
                </div>
                <div className="yearWeekContainer">
                    <select onChange={this.handleChange} name='year'>
                        <option value={this.state.year}>{this.state.year}</option>
                        <option value={this.state.years[0]}>{this.state.years[0]}</option>
                        <option value={this.state.years[1]}>{this.state.years[1]}</option>
                        <option value={this.state.years[2]}>{this.state.years[2]}</option>
                        <option value={this.state.years[3]}>{this.state.years[3]}</option>
                        <option value={this.state.years[4]}>{this.state.years[4]}</option>
                        <option value={this.state.years[5]}>{this.state.years[5]}</option>
                    </select>
                </div>
                <div>
                    <div className="statsNavBar">
                        <button className="tabButtons" value="teameff" onClick={this.handleClick} name="tabValue">Team Efficiency</button>
                        <button className="tabButtons" value="teamoff" onClick={this.handleClick} name="tabValue">Team Offense</button>
                    </div>
                </div>
                    <Button onClick={this.submitYear}>Submit Year</Button>
                <div>
                    {content}
                </div>
            </div>
        )
    }
}

export default FOStatsHome;