import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import Muuvies from './routes/Muuvies.js';

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={Muuvies}/>
      </Router>
    );
  }
}

export default App;
