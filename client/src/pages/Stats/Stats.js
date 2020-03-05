import React, { Component } from 'react';
import API from '../../utils/API.js';
import '../Stats/style.css';
import { Button } from '@material-ui/core';
import QbRbWrTECard from '../../components/QbRbWrTeCard.js';
import DSTCard from '../../components/DSTCard.js';
import KCard from '../../components/KCard.js';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';
import Container from '@material-ui/core/Container';
import TableCell from '@material-ui/core/TableCell';
import Grid from '@material-ui/core/Grid';

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
        years: [],
        week: ''
    }

    componentDidMount(){
        this.populateYears();
        this.setState({ year: this.state.years[1] });
        this.runPromises();
        this.setState({ week: 'all' });
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
        e.preventDefault();
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    loadQBData = () => {
        API.getQBStats(this.state.year, this.state.week)
        .then(
            res => this.setState({ qbStats: res.data })
        )
        .catch(err => console.log(err))
    }

    loadRBData = () => {
        API.getRBStats(this.state.year, this.state.week)
        .then(
            res => this.setState({ rbStats: res.data })
        )
        .catch(err => console.log(err))
    }

    loadWRData = () => {
        API.getWRStats(this.state.year, this.state.week)
        .then(
            res => this.setState({ wrStats: res.data })
        )
        .catch(err => console.log(err))
    }

    loadTEData = () => {
        API.getTEStats(this.state.year, this.state.week)
        .then(
            res => this.setState({ teStats: res.data })
        )
        .catch(err => console.log(err))
    }

    loadDSTData = () => {
        API.getDSTStats(this.state.year, this.state.week)
        .then(
            res => this.setState({ dstStats: res.data })
        )
        .catch(err => console.log(err))
    }

    loadKData = () => {
        API.getKStats(this.state.year, this.state.week)
        .then(
            res => this.setState({ kStats: res.data })
        )
        .catch(err => console.log(err))
    }

    loadFlexData = () => {
        API.getFlexStats(this.state.year, this.state.week)
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
                    <Table size="small">
                        <TableHead>
                            <TableRow>
                                <TableCell>Player Name</TableCell>
                                <TableCell>Total Fan Pts.</TableCell>
                                <TableCell>Pass Att.</TableCell>
                                <TableCell>Cmp.</TableCell>
                                <TableCell>Pass YDs</TableCell>
                                <TableCell>Pass TDs</TableCell>
                                <TableCell>Int.</TableCell>
                                <TableCell>Pass 2 Pt.</TableCell>
                                <TableCell>Rush Att.</TableCell>
                                <TableCell>Rush YDs</TableCell>
                                <TableCell>Rush TDs</TableCell>
                                <TableCell>Rush 2 Pt.</TableCell>
                                <TableCell>Rec.</TableCell>
                                <TableCell>Rec. YDs</TableCell>
                                <TableCell>Rec. TDs</TableCell>
                                <TableCell>Rec 2 Pt.</TableCell>
                                <TableCell>Fum.</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
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
                        </TableBody>
                    </Table>
                break;
            case 'rb':
                content = ''
                content = 
                    <Table size="small">
                        <TableHead>
                            <TableRow>
                                <TableCell>Player Name</TableCell>
                                <TableCell>Total Fan Pts.</TableCell>
                                <TableCell>Pass Att.</TableCell>
                                <TableCell>Cmp.</TableCell>
                                <TableCell>Pass YDs</TableCell>
                                <TableCell>Pass TDs</TableCell>
                                <TableCell>Int.</TableCell>
                                <TableCell>Pass 2 Pt.</TableCell>
                                <TableCell>Rush Att.</TableCell>
                                <TableCell>Rush YDs</TableCell>
                                <TableCell>Rush TDs</TableCell>
                                <TableCell>Rush 2 Pt.</TableCell>
                                <TableCell>Rec.</TableCell>
                                <TableCell>Rec. YDs</TableCell>
                                <TableCell>Rec. TDs</TableCell>
                                <TableCell>Rec 2 Pt.</TableCell>
                                <TableCell>Fum.</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
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
                        </TableBody>
                    </Table>
                break;
            case 'wr':
                content = ''
                content = 
                    <Table size="small">
                        <TableHead>
                            <TableRow>
                                <TableCell>Player Name</TableCell>
                                <TableCell>Total Fan Pts.</TableCell>
                                <TableCell>Pass Att.</TableCell>
                                <TableCell>Cmp.</TableCell>
                                <TableCell>Pass YDs</TableCell>
                                <TableCell>Pass TDs</TableCell>
                                <TableCell>Int.</TableCell>
                                <TableCell>Pass 2 Pt.</TableCell>
                                <TableCell>Rush Att.</TableCell>
                                <TableCell>Rush YDs</TableCell>
                                <TableCell>Rush TDs</TableCell>
                                <TableCell>Rush 2 Pt.</TableCell>
                                <TableCell>Rec.</TableCell>
                                <TableCell>Rec. YDs</TableCell>
                                <TableCell>Rec. TDs</TableCell>
                                <TableCell>Rec 2 Pt.</TableCell>
                                <TableCell>Fum.</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
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
                        </TableBody>
                    </Table>
                break;
            case 'te':
                content = ''
                content = 
                    <Table size="small">
                        <TableHead>
                            <TableRow>
                                <TableCell>Player Name</TableCell>
                                <TableCell>Total Fan Pts.</TableCell>
                                <TableCell>Pass Att.</TableCell>
                                <TableCell>Cmp.</TableCell>
                                <TableCell>Pass YDs</TableCell>
                                <TableCell>Pass TDs</TableCell>
                                <TableCell>Int.</TableCell>
                                <TableCell>Pass 2 Pt.</TableCell>
                                <TableCell>Rush Att.</TableCell>
                                <TableCell>Rush YDs</TableCell>
                                <TableCell>Rush TDs</TableCell>
                                <TableCell>Rush 2 Pt.</TableCell>
                                <TableCell>Rec.</TableCell>
                                <TableCell>Rec. YDs</TableCell>
                                <TableCell>Rec. TDs</TableCell>
                                <TableCell>Rec 2 Pt.</TableCell>
                                <TableCell>Fum.</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
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
                        </TableBody>
                    </Table>
                break;
            case 'flex':
                content = ''
                content = 
                    <Table size="small">
                        <TableHead>
                            <TableRow>
                                <TableCell>Player Name</TableCell>
                                <TableCell>Total Fan Pts.</TableCell>
                                <TableCell>Pass Att.</TableCell>
                                <TableCell>Cmp.</TableCell>
                                <TableCell>Pass YDs</TableCell>
                                <TableCell>Pass TDs</TableCell>
                                <TableCell>Int.</TableCell>
                                <TableCell>Pass 2 Pt.</TableCell>
                                <TableCell>Rush Att.</TableCell>
                                <TableCell>Rush YDs</TableCell>
                                <TableCell>Rush TDs</TableCell>
                                <TableCell>Rush 2 Pt.</TableCell>
                                <TableCell>Rec.</TableCell>
                                <TableCell>Rec. YDs</TableCell>
                                <TableCell>Rec. TDs</TableCell>
                                <TableCell>Rec 2 Pt.</TableCell>
                                <TableCell>Fum.</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
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
                        </TableBody>
                    </Table>
                break;
            case 'dst':
                content = ''
                content = 
                    <Table size="small">
                        <TableHead>
                            <TableRow>
                                <TableCell>Team Name</TableCell>
                                <TableCell>Total Fan Pts.</TableCell>
                                <TableCell>Sack</TableCell>
                                <TableCell>Int.</TableCell>
                                <TableCell>Safety</TableCell>
                                <TableCell>FR.</TableCell>
                                <TableCell>Blk.</TableCell>
                                <TableCell>TD.</TableCell>
                                <TableCell>Pts Allowed</TableCell>
                                <TableCell>Pass Y/G</TableCell>
                                <TableCell>Rush Y/G</TableCell>
                                <TableCell>Total Y/G</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
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
                        </TableBody>
                    </Table>
                break;
            case 'k':
                content = ''
                content = 
                    <Table size="small">
                        <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell>Total Fan Pts.</TableCell>
                                <TableCell>XPA</TableCell>
                                <TableCell>XPM</TableCell>
                                <TableCell>FGA</TableCell>
                                <TableCell>FGM.</TableCell>
                                <TableCell>50+ FGs</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
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
                        </TableBody>
                    </Table>
                break;
            default:
                content = ''
                content = <div>Please choose which year and which position you would like to view the stats for. The year will default on the previous year.</div>
        }
        
        return(
            <Container maxWidth="sm">
                <div className="playerStatsContainer">
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
                        <select onChange={this.handleChange} name='week'>
                            <option value='all'>ALL</option>
                            <option value='1'>1</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                            <option value='4'>4</option>
                            <option value='5'>5</option>
                            <option value='6'>6</option>
                            <option value='7'>7</option>
                            <option value='8'>8</option>
                            <option value='9'>9</option>
                            <option value='10'>10</option>
                            <option value='11'>11</option>
                            <option value='12'>12</option>
                            <option value='13'>13</option>
                            <option value='14'>14</option>
                            <option value='15'>15</option>
                            <option value='16'>16</option>
                            <option value='17'>17</option>
                        </select>
                        <Button onClick={this.submitYear}>Submit Year & Week</Button>
                        <p className="description">Start by selecting the year and week you want to see (select ALL if you want stats from all of the season). Hit submit, then select which position tab you wish to see the stats from.
                        </p>
                    </div>
                    <div>
                        <div className="statsNavBar">
                            <button className="tabButtons" value="qb" onClick={this.handleClick} name="tabValue">Quarter Backs</button>
                            <button className="tabButtons" value="rb" onClick={this.handleClick} name="tabValue">Running Backs</button>
                            <button className="tabButtons" value="wr" onClick={this.handleClick} name="tabValue">Wide Recievers</button>
                            <button className="tabButtons" value="te" onClick={this.handleClick} name="tabValue">Tight Ends</button>
                            <button className="tabButtons" value="flex" onClick={this.handleClick} name="tabValue">Flex</button>
                            <button className="tabButtons" value="k" onClick={this.handleClick} name="tabValue">Kickers</button>
                            <button className="tabButtons" value="dst" onClick={this.handleClick} name="tabValue">D/ST</button>
                        </div>
                    </div>
                    <Grid item xs={12} className="statsTable">
                        {content}
                    </Grid>
                </div>
            </Container>
        );
    }
}

export default Stats;