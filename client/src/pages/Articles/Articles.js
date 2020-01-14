import React, { Component } from 'react';
import API from '../../utils/API.js';
import ArticlesCard from '../../components/ArticlesCard.js';
import '../Articles/style.css';
import { Button } from '@material-ui/core';

class Articles extends Component {

    state = {
        posts: []
    }

    componentDidMount(){
        this.loadArticleData();
    }

    loadArticleData = () => {
        API.getRedditPosts()
        .then(
            res => this.setState({ posts: res.data })
        )
        .catch(err => console.log(err))
    }

    refreshArticles = () => {
        this.setState({ posts: [] });
        this.loadArticleData();
    }

    render(){
        return(
            <div>
                <div className="container">
                    <h1>Posts From r/fantasyfootball</h1>
                    <div className="articlesDescription">
                        <p>Data is scraped from <a href="https://old.reddit.com/r/fantasyfootball">r/fantasyfootball</a> which is a great aggregrate of the most current fantasy football news. Will load 25 articles from the subreddit pulling from the current top posts. You can click on the links if there is an article or you can go to the reddit comments which provide some added insights...sometimes.</p>
                    </div>
                    <Button onClick={this.refreshArticles} color="primary">Refresh Articles</Button>
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
            </div>
        );
    }
}

export default Articles;