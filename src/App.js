import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import Home from './views/Home';
import Results from './views/Results';
import Nav from './components/Nav';

class App extends Component {
  render() {
    return (
      <div className="main-container">
        <Nav />
        <Router>
          <Switch>
            <Route exact component={Home} path="/" />
            <Route component={Results} path="/results" />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
