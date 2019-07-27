import React, { Component } from 'react';
import API from '../../utils/API.js';
import ArticlesCard from '../../components/ArticlesCard.js';
import FantasyProsCard from '../../components/FantasyProsCard.js';
import '../Dashboard/style.css';

class Dashboard extends Component {

    state = {
        posts: [],
        adp: []
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

    render(){
        return(
            <div className="container">
                {this.state.adp.length ? (
                    <table>
                        <thead>
                            <tr>
                                <th>Rank</th>
                                <th>Name</th>
                                <th>Team</th>
                                <th>Pos.</th>
                                <th>BYE</th>
                                <th>Best</th>
                                <th>Worst</th>
                                <th>Avg.</th>
                                <th>Standard Dev.</th>
                                <th>ADP</th>
                                <th>VS. ADP</th>
                            </tr>
                        </thead>
                        <tbody>
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
                    </tbody>
                </table>
                ) : (
                <h3>Please wait While Table Loads</h3>
                )}
                <ul>
                    {this.state.posts.length ? (
                        this.state.posts.map(post => {
                            return (
                                <li>
                                    <ArticlesCard
                                        title = {post.title}
                                        commentsLink = {post.commentsLink}
                                        link = {post.link}
                                    />
                                </li>
                            );
                        })

                    ) : (
                    <h3>Please Wait for Articles to Load</h3>
                    )}
                </ul>
            </div>
        );
    }
}

export default Dashboard;