import React from "react";
import background from '../utils/images/turf.jpg';
import { Typography } from '@material-ui/core';

const heroStyle = {
    width: '100%',
    maxHeight: '500px',
    position: 'relative'
}

const spanStyle = {
    position: 'absolute',
    top: '15%',
    left: '30%'
}

const headingStyle = {
    color: 'white',
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontSize: '10vw'
}

const aboutPara = {
    marginLeft: '15vw',
    marginRight: '15vw',
    marginTop: '1vw'
}

const Hero = () => (
    <div>
        <div>
            <img src={background} alt="hero-img" style={heroStyle}/>
            <span style={spanStyle}><h1 style={headingStyle}>FantasyNooz</h1></span>
        </div>
        <Typography align='center' variant='h5' style={aboutPara}>FantasyNooz is your dashboard for all things fantasy football. Look at the latest ADPs, articles, and look up stats to help you win your league.</Typography>
    </div>
);

export default Hero;