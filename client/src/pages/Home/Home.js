import React, { Component } from 'react';
import Hero from '../../components/Hero.js';
import Footer from '../../components/Footer.js';

class Home extends Component {

    render(){
        return(
            <div>
                <Hero />
                <Footer />
            </div>
        );
    }
}

export default Home;