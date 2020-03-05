import React, { Component } from 'react';
import API from '../../utils/API.js';
import FantasyProsCard from '../../components/FantasyProsCard.js';
import '../ADPTable/style.css';
import { Button, TableCell } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

class Dashboard extends Component {

    state = {
        posts: [],
        adp: [],
        showHideRanks: false
    }

    componentDidMount(){
        this.loadArticleData();
        this.loadADPData();
    }

    loadArticleData = () => {
        API.getRedditPosts()
        .then(
            res => this.setState({ posts: res.data })
        )
        .catch(err => console.log(err))
    }

    loadADPData = () => {
        API.getFantasyProsADPs()
        .then(
            res => this.setState({ adp: res.data })
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
            <Container maxWidth="sm">
                <div className="container">
                    <h1>Fantasy Pros Draft Ranks</h1>
                    <div>
                        <p>Data is scraped from <a href="https://www.fantasypros.com/nfl/rankings/consensus-cheatsheets.php">Fantasy Pros</a> which uses consensus rankings of ~80 experts. You can visit their site to create your own custom sheet based on which experts you trust. All rankings based on standard scoring.</p>
                    </div>
                    <div className="tableKey">
                        <p className="keyItem"><b>Rank</b>: FP's Rank</p>
                        <p className="keyItem"><b>Name</b>: Player's Name</p>
                        <p className="keyItem"><b>Team</b>: Player's Team</p>
                        <p className="keyItem"><b>Pos.</b>: Player's Position and Positional Ranking</p>
                        <p className="keyItem"><b>BYE</b>: Player's Bye</p>
                        <p className="keyItem"><b>Best</b>: Player's Best Rank</p>
                        <p className="keyItem"><b>Worst</b>: Player's Lowest Rank</p>
                        <p className="keyItem"><b>Avg.</b>: Player's Average Rank</p>
                        <p className="keyItem"><b>Standar Dev.</b>: Standard Deviation</p>
                        <p className="keyItem"><b>ADP</b>: Player's Average Draf Position</p>
                        <p className="keyItem"><b>VS. ADP</b>: Player's Versus ADP</p>
                    </div>
                    <Button onClick={this.toggleADPTable} color="primary">Toggle Table</Button>
                    {this.state.showHideRanks ? (
                        <div className="rankTable">
                        {this.state.adp.length ? (
                            <Grid item xs={12}>
                                <Table size="small">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Rank</TableCell>
                                            <TableCell>Name</TableCell>
                                            <TableCell>Team</TableCell>
                                            <TableCell>Pos.</TableCell>
                                            <TableCell>BYE</TableCell>
                                            <TableCell>Best</TableCell>
                                            <TableCell>Worst</TableCell>
                                            <TableCell>Avg.</TableCell>
                                            <TableCell>Standard Dev.</TableCell>
                                            <TableCell>ADP</TableCell>
                                            <TableCell>VS. ADP</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                    {this.state.adp.map(player => {
                                        return (
                                            <FantasyProsCard 
                                                rank = {player.rank}
                                                name = {player.name}
                                                playerLink = {player.playerLink}
                                                team = {player.team}
                                                position = {player.position}
                                                byeWeek = {player.byeWeek}
                                                bestRank = {player.bestRank}
                                                worstRank = {player.worstRank}
                                                average = {player.average}
                                                stdDev = {player.stdDev}
                                                adp = {player.adp}
                                                vsADP = {player.vsADP}
                                            />
                                        );
                                    })}
                                </TableBody>
                            </Table>
                            </Grid>
                        ) : (
                        <h3>Table is loading.</h3>
                        )}
                    </div>
                    ): (
                        <div></div>
                    )}
                    
                </div>
            </Container>
        );
    }
}

export default Dashboard;