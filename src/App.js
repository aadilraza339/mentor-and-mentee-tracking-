import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Login from './Components/Log_in';
import Signup from './Components/Sign_up';
import Homepage from './Components/Homepage';
import Mentee from './Components/Mentee';
import Mentor from './Components/Mentor';
import MainMentorPage from './Components/MainMentorPage';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
            <Route path='/Login' component={Login} />
            <Route path="/Mentee" component={Mentee} />
            <Route path="/Homepage" component={Homepage} />
            <Route path="/Mentor" component={Mentor} />
            <Route path="/MainMentorPage" component={MainMentorPage} />
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