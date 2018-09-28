import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import Muuvies from './routes/Muuvies.js';
import Results from './routes/Results.js';
import Movie from './routes/Movie.js';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Muuvies} />
          <Route path="/search" component={Results} />
          <Route path="/movie/:id" component={Movie} />
        </Switch>
      </Router>
    );
  }
}

export default App;
