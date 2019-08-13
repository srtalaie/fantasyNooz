import React, { Component } from 'react';
import API from '../../utils/API.js';
import FantasyProsCard from '../../components/FantasyProsCard.js';
import '../ADPTable/style.css';
import { Button } from '@material-ui/core';

const date = new Date();

class Dashboard extends Component {

    state = {
        year: '',
        qbStats: [],
        wrStats: [],
        rbStats: [],
        teStats: [],
        kStats: [],
        dstStats: [],
        years: []
    }

    componentDidMount(){
        this.populateYears();
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

    handleGetYear = (e) => {
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

    toggleADPTable = () => {
        if(this.state.showHideRanks){
            this.setState({ showHideRanks: false })
        }else{
            this.setState({ showHideRanks: true })
        }
    }

    render(){
        return(
            <div className="container">
                <div>
                    <select>
                        <option value={this.state.years[0]}>{this.state.years[0]}</option>
                        <option value={this.state.years[1]}>{this.state.years[1]}</option>
                        <option value={this.state.years[2]}>{this.state.years[2]}</option>
                        <option value={this.state.years[3]}>{this.state.years[3]}</option>
                        <option value={this.state.years[4]}>{this.state.years[4]}</option>
                        <option value={this.state.years[5]}>{this.state.years[5]}</option>
                    </select>
                </div>
            </div>
        );
    }
}

export default Dashboard;