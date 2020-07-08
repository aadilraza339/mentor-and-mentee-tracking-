import React from 'react';
import './App.css';
import Signup from './Components/Sign_up';
import Homepage from './Components/Homepage';
import Mentee from './Components/Mentee';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './Components/Log_in';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
            <Route path='/Login' component={Login} />
            <Route path="/Signup" component={Signup}/>
            <Route path="/Mentee" component={Mentee}/>
            <Route path="/">
            <Homepage/>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;