import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Card from '@material-ui/core/Card';

class Signup_Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: '',
      last_name: '',
      UserName:'',
      email: '',
      password: ''
    }
    
  }
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <div>
            <AppBar title="SignUp Page" />
            <h1>Create Account</h1>
            <Card style={{ width: '30%', height: '50%', marginLeft: '40%', marginTop: '5%', border: '1px solid black' }}>
              <TextField hintText="Enter your First Name" floatingLabelText="First Name" />
              <br />
              <TextField hintText="Enter your Last Name" floatingLabelText="Last Name" />
              <br />
              <TextField hintText="Enter your UserName" floatingLabelText="UserName" />
              <br />
              <TextField hintText="Enter your Email" type="email" floatingLabelText="Email" />
              <br />
              <TextField type="password" hintText="Enter your Password" floatingLabelText="Password" />
              <br />
              <RaisedButton label="Signup" primary={true} style={style} />
            </Card>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}
const style = {
  margin: 15,
};
export default Signup_Page;