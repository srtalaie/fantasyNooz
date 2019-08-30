import React, { Component } from 'react';
import '../OLines/style.css';

class OLines extends Component {

    render(){
        return(
            <div>
                <div className="textBox">
                    <p>An aggregrate of rankings of teams O-Lines to give yourself that extra level of data and see how a player's performance changes based on the effectiveness of their teams offensive line.
                    </p>
                </div>
                
                <div className="container">
                    <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTqDZpluOiGkhzBpt3v4Py2oE1TUL4sdYZ7YJGgJjrJ0Hd9BPICdhPW4h_sLShEc--3u2dZM9sTevxp/pubhtml" title="O-Lines Ranking Sheet"></iframe>
                </div>
            </div>
        );
    }
}

export default OLines;