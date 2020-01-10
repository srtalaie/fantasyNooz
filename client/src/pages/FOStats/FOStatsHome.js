import React, { Component } from 'react';
import API from '../../utils/API.js';
import '../FOStats/style.css';
import FOTeamEffCard from '../../components/FOTeamEffCard.js';
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
        return(
            <div>
                <div>
                    <p>DVOA is a method of evaluating teams, units, or players. It takes every single play during the NFL season and compares each one to a league-average baseline based on situation. DVOA measures not just yardage, but yardage towards a first down: Five yards on third-and-4 are worth more than five yards on first-and-10 and much more than five yards on third-and-12. Red zone plays are worth more than other plays. Performance is also adjusted for the quality of the opponent. DVOA is a percentage, so a team with a DVOA of 10.0% is 10 percent better than the average team, and a quarterback with a DVOA of -20.0% is 20 percent worse than the average quarterback. Because DVOA measures scoring, defenses are better when they are negative. For more detail, read below.</p>
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
                <Button onClick={this.submitYear}>Submit Year</Button>
                <div>
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
            </div>
        )
    }
}

export default FOStatsHome;