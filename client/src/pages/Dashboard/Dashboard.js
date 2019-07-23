import React, { Component } from 'react';
import API from '../../utils/API.js';

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
            <div>
                {this.state.posts.length ? (
                    this.state.posts.map(posts => {
                        return (
                            <h1>{posts.title}</h1>
                        );
                    })

                ) : (
                <h3>No Results to Display</h3>
                )}
            </div>
        );
    }
}

export default Dashboard;