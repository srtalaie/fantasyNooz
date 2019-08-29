import React, { Component } from 'react';
import '../OLines/style.css';

class OLines extends Component {

    render(){
        return(
            <div>
                <div className="container">
                    <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTqDZpluOiGkhzBpt3v4Py2oE1TUL4sdYZ7YJGgJjrJ0Hd9BPICdhPW4h_sLShEc--3u2dZM9sTevxp/pubhtml" title="O-Lines Ranking Sheet"></iframe>
                </div>
            </div>
        );
    }
}

export default OLines;