import React, { Component } from 'react';
import background from '../../utils/images/turf.jpg'

const backgroundStyle = {
    background: `url(${background})`,
    backgroundSize: 'cover',
    width: '100%',
    display: 'flex',
    alignItems: 'center'
}

const headingStyle = {
    color: 'white',
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
}

class Home extends Component {

    render(){
        return(
            <div className="container" style={backgroundStyle}>
                <h1 style={headingStyle}>FantasyNooz</h1>
            </div>
        );
    }
}

export default Home;