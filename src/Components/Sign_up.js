import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);

const validateForm = errors => {
  let valid = true;
  Object.values(errors).forEach(val => val.length > 0 && (valid = false));
  return valid;
};

export default class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      FirstName: "",
      LastName: "",
      email: "",
      password: "",
    };
  }
  handleChange = (e) => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  }
  Submit = (event) => {
    event.preventDefault();
    const newUser = {
      FistName: this.state.FirstName,
      LastName: this.state.LastName,
      email: this.state.email,
      password: this.state.password,
    };

    axios.post(
      "http://localhost:8000/mentor_mentee/signup", newUser, {
      params: {
        fistName: this.state.FirstName,
        LastName: this.state.LastName,
        email: this.state.email,
        password: this.state.password,
      }
    })
      .then((res) => {
        console.log(res.data)

      }).catch((error) => {
        console.log(error)

      });
  }

  render() {
    const { FirstName, LastName, email, password } = this.state
    console.log(this.state)
    return (
      <div className='wrapper'>   
        <div className='form-wrapper'>
          <h2>Create Account</h2>
          <form onSubmit={this.handleSubmit} noValidate>
            <div className='firstName'>
              <label htmlFor="FirstName"> First Name</label>
              <input type='text' name='FirstName' value={this.state.FirstName} onChange={this.handleChange} noValidate />
            </div>
            <div className='lastName'>
              <label htmlFor="LastName"> Last Name</label>
              <input type='text' name='LastName' value={this.state.LastName} onChange={this.handleChange} noValidate />
            </div>
            <div className='email'>
              <label htmlFor="email">Email</label>
              <input type='email' name='email' value={this.state.email} onChange={this.handleChange} noValidate />
            </div>
            <div className='password'>
              <label htmlFor="password">Password</label>
              <input type='password' name='password' value={this.state.password} onChange={this.handleChange} noValidate />
            </div>

            <Button variant="contained" color="primary" onClick={this.Submit} > Signup </Button>
          </form>
        </div>
      </div>
    );
  }
}


