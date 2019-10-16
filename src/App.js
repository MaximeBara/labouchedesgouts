import React, { Fragment } from 'react';
import './App.css';

import StackNav from './components/StackNav';
import Entrees from './components/Entrees';
import Plats from './components/Plats';
import Desserts from './components/Desserts';
import Menus from './components/Menus';
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <StackNav />
      <Router>
        <Fragment>
          <Route path="/" exact component={Menus} />
          <Route path="/entrees" exact component={Entrees} />
          <Route path="/plats" exact component={Plats} />
          <Route path="/desserts" exact component={Desserts} />
        </Fragment>
      </Router>
    </div>
  );
}

export default App;
