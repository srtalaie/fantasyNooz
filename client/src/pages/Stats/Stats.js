import React, { Component } from 'react';
import API from '../../utils/API.js';
import '../ADPTable/style.css';
import { Button } from '@material-ui/core';


const date = new Date();

class Stats extends Component {

    state = {
        tabValue: '',
        year: '',
        qbStats: [],
        wrStats: [],
        rbStats: [],
        teStats: [],
        kStats: [],
        dstStats: [],
        flexStats: [],
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
            return that.loadQBData();
        }).then(function(){
            return that.loadRBData();
        }).then(function(){
            return that.loadWRData();
        }).then(function(){
            return that.loadTEData();
        }).then(function(){
            return that.loadFlexData();
        }).then(function(){
            return that.loadKData();
        }).then(function(){
            return that.loadDSTData();
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
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    loadQBData = () => {
        API.getQBStats(this.state.year)
        .then(
            res => this.setState({ qbStats: res.data })
        )
        .catch(err => console.log(err))
    }

    loadRBData = () => {
        API.getRBStats(this.state.year)
        .then(
            res => this.setState({ rbStats: res.data })
        )
        .catch(err => console.log(err))
    }

    loadWRData = () => {
        API.getQBStats(this.state.year)
        .then(
            res => this.setState({ wrStats: res.data })
        )
        .catch(err => console.log(err))
    }

    loadTEData = () => {
        API.getQBStats(this.state.year)
        .then(
            res => this.setState({ teStats: res.data })
        )
        .catch(err => console.log(err))
    }

    loadDSTData = () => {
        API.getDSTStats(this.state.year)
        .then(
            res => this.setState({ dstStats: res.data })
        )
        .catch(err => console.log(err))
    }

    loadKData = () => {
        API.getKStats(this.state.year)
        .then(
            res => this.setState({ kStats: res.data })
        )
        .catch(err => console.log(err))
    }

    loadFlexData = () => {
        API.getFlexStats(this.state.year)
        .then(
            res => this.setState({ flexStats: res.data })
        )
        .catch(err => console.log(err))
    }

    render(){
        return(
            <div className="container">
                <div className="yearContainer">
                    <select onChange={this.handleChange} name='year'>
                        <option value={this.state.year}>{this.state.year}</option>
                        <option value={this.state.years[0]}>{this.state.years[0]}</option>
                        <option value={this.state.years[1]}>{this.state.years[1]}</option>
                        <option value={this.state.years[2]}>{this.state.years[2]}</option>
                        <option value={this.state.years[3]}>{this.state.years[3]}</option>
                        <option value={this.state.years[4]}>{this.state.years[4]}</option>
                        <option value={this.state.years[5]}>{this.state.years[5]}</option>
                    </select>
                    <Button onClick={this.submitYear}>Submit Year</Button>
                </div>
                <div className="statsContainer">
                    <div className="navbar">
                        <Button value="qb" onClick={this.handleChange} name="tabValue">Quarter Backs</Button>
                        <Button value="rb" onClick={this.handleChange} name="tabValue">Running Backs</Button>
                        <Button value="wr" onClick={this.handleChange} name="tabValue">Wide Recievers</Button>
                        <Button value="te" onClick={this.handleChange} name="tabValue">Tight Ends</Button>
                        <Button value="flex" onClick={this.handleChange} name="tabValue">Flex</Button>
                        <Button value="k" onClick={this.handleChange} name="tabValue">Kickers</Button>
                        <Button value="dst" onClick={this.handleChange} name="tabValue">Defense/Special Teams</Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Stats;