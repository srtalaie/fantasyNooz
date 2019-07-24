import React, { Component } from 'react';
import API from '../../utils/API.js';
import ArticlesCard from '../../components/ArticlesCard.js';

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
                    this.state.posts.map(post => {
                        return (
                            <ArticlesCard 
                                 title = {post.title}
                                 commentsLink = {post.commentsLink}
                                 link = {post.link}
                            />
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