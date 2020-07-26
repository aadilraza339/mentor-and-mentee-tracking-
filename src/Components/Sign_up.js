import React from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';

const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      FirstName: "",
      LastName: "",
      email: "",
      password: "",
      errors: {
        FirstName: '',
        LastName: '',
        email: '',
        password: '',
      }
    };
  }

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;

    switch (name) {
      case 'firstName':
        errors.firstName =
          value.length < 5
            ? 'First Name must be at least 5 characters long!'
            : '';
        break;
      case 'lastName':
        errors.lastName =
          value.length < 5
            ? 'Last Name must be at least 5 characters long!'
            : '';
        break;
      case 'email':
        errors.email =
          validEmailRegex.test(value)
            ? ''
            : 'Email is not valid!';
        break;
      case 'password':
        errors.password =
          value.length < 8
            ? 'Password must be at least 8 characters long!'
            : '';
        break;
      default:
        break;
    }
    this.setState({ errors, [name]: value });
  }
  Submit = (event) => {
    event.preventDefault();
    const newUser = {
      firstname: this.state.FirstName,
      lastname: this.state.LastName,
      email: this.state.email,
      password: this.state.password,
    };

    axios.post(
      "http://localhost:8000/mentor_mentee/signUp", newUser)
      .then((res) => {
        if (res.data.length !== 0) {
          window.location.href = "/login";
        } else {
          window.location.href = "/";
        }
      }).catch((error) => {
        console.log(error)

      });
  }

  render() {
    const { errors } = this.state;
    console.log(this.state)
    return (
      <div className='wrapper'>
        <div className='form-wrapper'>
          <h2>Create Account</h2>
          <form onSubmit={this.handleSubmit} noValidate>
            <div className='firstName'>
              <label htmlFor="FirstName"> First Name</label>
              <input type='text' name='FirstName' value={this.state.FirstName} onChange={this.handleChange} noValidate />
              {errors.FirstName.length > 0 &&
                <span className='error'>{errors.FirstName}</span>}
            </div>
            <div className='lastName'>
              <label htmlFor="LastName"> Last Name</label>
              <input type='text' name='LastName' value={this.state.LastName} onChange={this.handleChange} noValidate />
              {errors.LastName.length > 0 &&
                <span className='error'>{errors.LastName}</span>}
            </div>
            <div className='email'>
              <label htmlFor="email">Email</label>
              <input type='email' name='email' value={this.state.email} onChange={this.handleChange} noValidate />
              {errors.email.length > 0 &&
                <span className='error'>{errors.email}</span>}
            </div>
            <div className='password'>
              <label htmlFor="password">Password</label>
              <input type='password' name='password' value={this.state.password} onChange={this.handleChange} noValidate />
              {errors.password.length > 0 &&
                <span className='error'>{errors.password}</span>}
            </div>
            <Button variant="contained" color="primary" onClick={this.Submit} > Signup </Button>
          </form>
        </div>
      </div>
    );
  }
}
export default Signup;