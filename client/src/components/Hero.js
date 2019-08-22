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

const remember = {
    marginLeft: '15vw',
    marginRight: '15vw',
    marginTop: '15vw'
}

const Hero = () => (
    <div>
        <div>
            <img src={background} alt="hero-img" style={heroStyle}/>
            <span style={spanStyle}><h1 style={headingStyle}>FantasyNooz</h1></span>
        </div>
        <Typography align='center' variant='h5' style={aboutPara}>FantasyNooz is your dashboard for all things fantasy football. Look at the latest ADPs, articles, and look up stats to help you win your league.</Typography>
        <Typography align='center' variant='h5' style={aboutPara}>For more help check out this site. This <a href='https://footballabsurdity.com/beersheet-request-form/'>sheet</a> has helped millions reach the summit of glory that is winning their fantasy football league.</Typography>
        <Typography align='center' variant='h5' style={aboutPara}>Each page will give you a tool to add to your fantasy football rearch arsenal.</Typography>
        <Typography align='center' variant='h5' style={aboutPara}>Look up recent ADPs to see which players are trending. Utilize reddit's r/fantasyfootball posts to stay up to date on news. Use hard data from stats to draw your own conclusions.</Typography>
        <Typography align='center' variant='h5' style={remember}>Remeber fantasy football isn't a game, it's a lifestyle.</Typography>
    </div>
);

export default Hero;