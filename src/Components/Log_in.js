import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Card from '@material-ui/core/Card';

class Login_page extends Component {
  constructor(props) {
    super(props);
    this.state = {
        email: '',
        password: '',
        submitted: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}

handleChange(e) {
  const { email, value } = e.target;
  this.setState({ [email]: value });
}

handleSubmit(e) {
  e.preventDefault();

  this.setState({ submitted: true });
  const { email, password } = this.state;
  if (email && password) {
      this.props.login(email, password);
  }
}

  render() {
    return (
      <div>
        <MuiThemeProvider>
          <div>
            <AppBar title="Login Page" />
            <Card style={{ width: '30%', height: '50%', marginLeft: '40%', marginTop: '5%', border: '1px solid black' }}>
              <TextField hintText="Enter your Email" type="email" floatingLabelText="Email" />
              <br />
              <TextField type="password" hintText="Enter your Password" floatingLabelText="Password" />
              <br />
              <RaisedButton label="Login" primary={true} style={style} />
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
export default Login_page;