import React from 'react';
import ADPTable from './pages/ADPTable/ADPTable.js';
import Articles from './pages/Articles/Articles.js';
import Stats from './pages/Stats/Stats.js';
import Home from './pages/Home/Home.js';
import OLines from './pages/OLines/OLines.js';
import FOStatsHome from './pages/FOStats/FOStatsHome.js';
import Footer from './components/Footer.js'
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import './style.css';

function App() {
  return (
    <div className="mainContainer">
      <Router>
            <ul className="navbar">
              <li>
                <Link className='link' to="/olines/">O-Line Rankings</Link>
              </li>
              <li>
                <Link className='link' to="/adptable/">ADP Table</Link>
              </li>
              <li>
                <Link className='link' to="/articles/">Articles</Link>
              </li>
              <li>
                <Link className='link' to="/stats/">Stats</Link>
              </li>
              <li>
                <Link className='link' to="/fostats/">FO Team Stats</Link>
              </li>
              <li>
                <Link className='link' to="/">Home</Link>
              </li>
            </ul>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/adptable/" component={ADPTable} />
            <Route path="/articles/" component={Articles} />
            <Route path="/stats/" component={Stats} />
            <Route path="/olines/" component={OLines} />
            <Route pth="/fostats/" component={FOStatsHome} />
          </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
