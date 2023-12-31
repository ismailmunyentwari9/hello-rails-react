import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Greeting from './Greetings';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Greeting} />
    </Switch>
  </Router>
);

export default App;
