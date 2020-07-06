import React from 'react';
import './App.css';
import Signup from './Components/Sign_up';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './Components/Log_in';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
            <Route path='/Login' component={Login} />
            <Route path="/">
            <Signup/>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;