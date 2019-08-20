import React from 'react';
import ADPTable from './pages/ADPTable/ADPTable.js';
import Articles from './pages/Articles/Articles.js';
import Stats from './pages/Stats/Stats.js'
import Home from './pages/Home/Home.js'
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import './style.css';

function App() {
  return (
    <Router>
      <div>
        <div>
          <ul className="navbar">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li className="navStyle">
              <Link to="/adptable/">ADP Table</Link>
            </li>
            <li className="navStyle">
              <Link to="/articles/">Articles</Link>
            </li>
            <li className="navStyle">
              <Link to="/stats/">Stats</Link>
            </li>
          </ul>
        </div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/adptable/" component={ADPTable} />
          <Route path="/articles/" component={Articles} />
          <Route path="/stats/" component={Stats} />
        </Switch> 
      </div>
    </Router>   
  );
}

export default App;
