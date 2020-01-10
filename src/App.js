import React from 'react';
import Root from "./Root";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/"component={Root}/>
        <Route path="/home" component={Root}/>
      </Switch>
    </Router>
  );
}

export default App;