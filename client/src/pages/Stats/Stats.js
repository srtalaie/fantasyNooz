import React, { Component } from 'react';
import API from '../../utils/API.js';
import '../ADPTable/style.css';
import { Button } from '@material-ui/core';
import QbRbWrTECard from '../../components/QbRbWrTeCard.js';
import DSTCard from '../../components/DSTCard.js';
import KCard from '../../components/KCard.js';

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
        e.preventDefault();
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    handleClick = (e) => {
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
        API.getWRStats(this.state.year)
        .then(
            res => this.setState({ wrStats: res.data })
        )
        .catch(err => console.log(err))
    }

    loadTEData = () => {
        API.getTEStats(this.state.year)
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
        let content = ''
        switch(this.state.tabValue){
            case 'qb':
                content = ''
                content = 
                    <table>
                        <thead>
                            <tr>
                                <th>Player Name</th>
                                <th>Total Fan Pts.</th>
                                <th>Pass Att.</th>
                                <th>Cmp.</th>
                                <th>Pass YDs</th>
                                <th>Pass TDs</th>
                                <th>Int.</th>
                                <th>Pass 2 Pt.</th>
                                <th>Rush Att.</th>
                                <th>Rush YDs</th>
                                <th>Rush TDs</th>
                                <th>Rush 2 Pt.</th>
                                <th>Rec.</th>
                                <th>Rec. YDs</th>
                                <th>Rec. TDs</th>
                                <th>Rec 2 Pt.</th>
                                <th>Fum.</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.qbStats.map(qb => {
                                return (<QbRbWrTECard 
                                    name = {qb.name}
                                    link = {qb.link}
                                    totalPts = {qb.totalpts}
                                    passAtt = {qb.passingStats.att}
                                    cmp = {qb.passingStats.cmp}
                                    passYds = {qb.passingStats.yds}
                                    passTds = {qb.passingStats.td}
                                    int = {qb.passingStats.int}
                                    passTwoPt = {qb.passingStats.twoPt}
                                    rushAtt = {qb.rushingStats.att}
                                    rushYds = {qb.rushingStats.yds}
                                    rushTds = {qb.rushingStats.td}
                                    rushTwoPt = {qb.rushingStats.twoPt}
                                    rec = {qb.receivingStats.rec}
                                    recYds = {qb.passingStats.yds}
                                    recTds = {qb.passingStats.td}
                                    recTwoPt = {qb.passingStats.twoPt}
                                    fum = {qb.fl}
                                />)
                            })}
                        </tbody>
                    </table>
                break;
            case 'rb':
                content = ''
                content = 
                    <table>
                        <thead>
                            <tr>
                                <th>Player Name</th>
                                <th>Total Fan Pts.</th>
                                <th>Pass Att.</th>
                                <th>Cmp.</th>
                                <th>Pass YDs</th>
                                <th>Pass TDs</th>
                                <th>Int.</th>
                                <th>Pass 2 Pt.</th>
                                <th>Rush Att.</th>
                                <th>Rush YDs</th>
                                <th>Rush TDs</th>
                                <th>Rush 2 Pt.</th>
                                <th>Rec.</th>
                                <th>Rec. YDs</th>
                                <th>Rec. TDs</th>
                                <th>Rec 2 Pt.</th>
                                <th>Fum.</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.rbStats.map(rb => {
                                return (<QbRbWrTECard 
                                    name = {rb.name}
                                    link = {rb.link}
                                    totalPts = {rb.totalpts}
                                    passAtt = {rb.passingStats.att}
                                    cmp = {rb.passingStats.cmp}
                                    passYds = {rb.passingStats.yds}
                                    passTds = {rb.passingStats.td}
                                    int = {rb.passingStats.int}
                                    passTwoPt = {rb.passingStats.twoPt}
                                    rushAtt = {rb.rushingStats.att}
                                    rushYds = {rb.rushingStats.yds}
                                    rushTds = {rb.rushingStats.td}
                                    rushTwoPt = {rb.rushingStats.twoPt}
                                    rec = {rb.receivingStats.rec}
                                    recYds = {rb.passingStats.yds}
                                    recTds = {rb.passingStats.td}
                                    recTwoPt = {rb.passingStats.twoPt}
                                    fum = {rb.fl}
                                />)
                            })}
                        </tbody>
                    </table>
                break;
            case 'wr':
                content = ''
                content = 
                    <table>
                        <thead>
                            <tr>
                                <th>Player Name</th>
                                <th>Total Fan Pts.</th>
                                <th>Pass Att.</th>
                                <th>Cmp.</th>
                                <th>Pass YDs</th>
                                <th>Pass TDs</th>
                                <th>Int.</th>
                                <th>Pass 2 Pt.</th>
                                <th>Rush Att.</th>
                                <th>Rush YDs</th>
                                <th>Rush TDs</th>
                                <th>Rush 2 Pt.</th>
                                <th>Rec.</th>
                                <th>Rec. YDs</th>
                                <th>Rec. TDs</th>
                                <th>Rec 2 Pt.</th>
                                <th>Fum.</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.wrStats.map(wr => {
                                return (<QbRbWrTECard 
                                    name = {wr.name}
                                    link = {wr.link}
                                    totalPts = {wr.totalpts}
                                    passAtt = {wr.passingStats.att}
                                    cmp = {wr.passingStats.cmp}
                                    passYds = {wr.passingStats.yds}
                                    passTds = {wr.passingStats.td}
                                    int = {wr.passingStats.int}
                                    passTwoPt = {wr.passingStats.twoPt}
                                    rushAtt = {wr.rushingStats.att}
                                    rushYds = {wr.rushingStats.yds}
                                    rushTds = {wr.rushingStats.td}
                                    rushTwoPt = {wr.rushingStats.twoPt}
                                    rec = {wr.receivingStats.rec}
                                    recYds = {wr.passingStats.yds}
                                    recTds = {wr.passingStats.td}
                                    recTwoPt = {wr.passingStats.twoPt}
                                    fum = {wr.fl}
                                />)
                            })}
                        </tbody>
                    </table>
                break;
            case 'te':
                content = ''
                content = 
                    <table>
                        <thead>
                            <tr>
                                <th>Player Name</th>
                                <th>Total Fan Pts.</th>
                                <th>Pass Att.</th>
                                <th>Cmp.</th>
                                <th>Pass YDs</th>
                                <th>Pass TDs</th>
                                <th>Int.</th>
                                <th>Pass 2 Pt.</th>
                                <th>Rush Att.</th>
                                <th>Rush YDs</th>
                                <th>Rush TDs</th>
                                <th>Rush 2 Pt.</th>
                                <th>Rec.</th>
                                <th>Rec. YDs</th>
                                <th>Rec. TDs</th>
                                <th>Rec 2 Pt.</th>
                                <th>Fum.</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.teStats.map(te => {
                                return (<QbRbWrTECard 
                                    name = {te.name}
                                    link = {te.link}
                                    totalPts = {te.totalpts}
                                    passAtt = {te.passingStats.att}
                                    cmp = {te.passingStats.cmp}
                                    passYds = {te.passingStats.yds}
                                    passTds = {te.passingStats.td}
                                    int = {te.passingStats.int}
                                    passTwoPt = {te.passingStats.twoPt}
                                    rushAtt = {te.rushingStats.att}
                                    rushYds = {te.rushingStats.yds}
                                    rushTds = {te.rushingStats.td}
                                    rushTwoPt = {te.rushingStats.twoPt}
                                    rec = {te.receivingStats.rec}
                                    recYds = {te.passingStats.yds}
                                    recTds = {te.passingStats.td}
                                    recTwoPt = {te.passingStats.twoPt}
                                    fum = {te.fl}
                                />)
                            })}
                        </tbody>
                    </table>
                break;
            case 'flex':
                content = ''
                content = 
                    <table>
                        <thead>
                            <tr>
                                <th>Player Name</th>
                                <th>Total Fan Pts.</th>
                                <th>Pass Att.</th>
                                <th>Cmp.</th>
                                <th>Pass YDs</th>
                                <th>Pass TDs</th>
                                <th>Int.</th>
                                <th>Pass 2 Pt.</th>
                                <th>Rush Att.</th>
                                <th>Rush YDs</th>
                                <th>Rush TDs</th>
                                <th>Rush 2 Pt.</th>
                                <th>Rec.</th>
                                <th>Rec. YDs</th>
                                <th>Rec. TDs</th>
                                <th>Rec 2 Pt.</th>
                                <th>Fum.</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.flexStats.map(flex => {
                                return (<QbRbWrTECard 
                                    name = {flex.name}
                                    link = {flex.link}
                                    totalPts = {flex.totalpts}
                                    passAtt = {flex.passingStats.att}
                                    cmp = {flex.passingStats.cmp}
                                    passYds = {flex.passingStats.yds}
                                    passTds = {flex.passingStats.td}
                                    int = {flex.passingStats.int}
                                    passTwoPt = {flex.passingStats.twoPt}
                                    rushAtt = {flex.rushingStats.att}
                                    rushYds = {flex.rushingStats.yds}
                                    rushTds = {flex.rushingStats.td}
                                    rushTwoPt = {flex.rushingStats.twoPt}
                                    rec = {flex.receivingStats.rec}
                                    recYds = {flex.passingStats.yds}
                                    recTds = {flex.passingStats.td}
                                    recTwoPt = {flex.passingStats.twoPt}
                                    fum = {flex.fl}
                                />)
                            })}
                        </tbody>
                    </table>
                break;
            case 'dst':
                content = ''
                content = 
                    <table>
                        <thead>
                            <tr>
                                <th>Team Name</th>
                                <th>Total Fan Pts.</th>
                                <th>Sack</th>
                                <th>Int.</th>
                                <th>Safety</th>
                                <th>FR.</th>
                                <th>Blk.</th>
                                <th>TD.</th>
                                <th>Pts Allowed</th>
                                <th>Pass Y/G</th>
                                <th>Rush Y/G</th>
                                <th>Total Y/G</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.dstStats.map(dst => {
                                return (<DSTCard 
                                    name = {dst.name}
                                    link = {dst.link}
                                    totalPts = {dst.totalpts}
                                    sack = {dst.sack}
                                    saf = {dst.saf}
                                    fr = {dst.fr}
                                    blk = {dst.blk}
                                    td = {dst.td}
                                    pa = {dst.pa}
                                    passYG = {dst.passYG}
                                    rushYG = {dst.rushYG}
                                    totalYG = {dst.totalYG }
                                />)
                            })}
                        </tbody>
                    </table>
                break;
            case 'k':
                content = ''
                content = 
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Total Fan Pts.</th>
                                <th>XPA</th>
                                <th>XPM</th>
                                <th>FGA</th>
                                <th>FGM.</th>
                                <th>50+ FGs</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.kStats.map(k => {
                                return (<KCard 
                                    name = {k.name}
                                    link = {k.link}
                                    totalPts = {k.totalpts}
                                    xpa = {k.xpa}
                                    xpm = {k.xpm}
                                    fga = {k.fga}
                                    fgm = {k.fgm}
                                    fiftyPlus = {k.fiftyPlus}
                                />)
                            })}
                        </tbody>
                    </table>
                break;
            default:
                content = ''
                content = <div>Please choose which year and which position you would like to view the stats for.</div>
        }
        
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
                <div className="statsNavBar">
                    <div className="navbar">
                        <Button value="qb" onClick={this.handleClick} name="tabValue">Quarter Backs</Button>
                        <Button value="rb" onClick={this.handleClick} name="tabValue">Running Backs</Button>
                        <Button value="wr" onClick={this.handleClick} name="tabValue">Wide Recievers</Button>
                        <Button value="te" onClick={this.handleClick} name="tabValue">Tight Ends</Button>
                        <Button value="flex" onClick={this.handleClick} name="tabValue">Flex</Button>
                        <Button value="k" onClick={this.handleClick} name="tabValue">Kickers</Button>
                        <Button value="dst" onClick={this.handleClick} name="tabValue">D/ST</Button>
                    </div>
                </div>
                <div className="statsContainer">
                    {content}
                </div>
            </div>
        );
    }
}

export default Stats;