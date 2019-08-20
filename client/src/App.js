import React from 'react';
import ADPTable from './pages/ADPTable/ADPTable.js';
import Articles from './pages/Articles/Articles.js';
import Stats from './pages/Stats/Stats.js'
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <header>
      <Stats />
      </header>
    </div>
  );
}

export default App;
