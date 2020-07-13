import React from 'react';
import './App.css';
import Login from './Components/Log_in';
import Signup from './Components/Sign_up';
import Homepage from './Components/Homepage';
import Mentee from './Components/Mentee';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
            <Route path='/Login' component={Login} />
            <Route path="/Mentee" component={Mentee} />
            <Route path="/Homepage" component={Homepage}/>
            <Route path="/">
            <Signup />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;