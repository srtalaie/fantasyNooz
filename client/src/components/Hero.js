import React from "react";
import background from '../utils/images/turf.jpg';

const heroStyle = {
    width: '100%',
    maxHeight: '50%',
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

const Hero = () => (
    <div>
        <img src={background} alt="hero-img" style={heroStyle}/>
        <span style={spanStyle}><h1 style={headingStyle}>FantasyNooz</h1></span>
    </div>
    
);

export default Hero;