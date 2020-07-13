import React from 'react';
import axios from 'axios';

const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);
const validateForm = errors => {
  let valid = true;
  Object.values(errors).forEach(val => val.length > 0 && (valid = false));
  return valid;
};

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      UserName: null,
      email: null,
      password: null,
      errors: {
        UserName: '',
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
      case 'UserName':
        errors.UserName =
          value.length < 8
            ? 'Full Name must be at least 5 characters long!'
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

  handleSubmit = (event) => {
    event.preventDefault();
    const getData = axios.get("http://localhost:8000/login", {
      params: {
        UserName: this.state.UserName,
        email: this.state.email,
        password: this.state.password,
      }
    }, { headers: { "Content-Type": "" } })
      .then(res => {
        console.log(res);

        const n = axios.get('http://localhost:8000/verify',)
          .then(respo => {
            if (respo.data === true) {
              window.location.href = "/home";
            } else {
              window.location.href = "/";
            }
          });
        this.setState({
          loading: false
        });
        console.log(n)
      })
    .catch (err => {
      console.log(err);
    });
  }

  render() {
    const { errors } = this.state;
    return (
      <div className='wrapper'>
        <div className='form-wrapper'>
          <form onSubmit={this.handleSubmit} noValidate>

            <div className='email'>
              <label htmlFor="email">Email</label>
              <input type='email' name='email' onChange={this.handleChange} noValidate />
              {errors.email.length > 0 &&
                <span className='error'>{errors.email}</span>}
            </div>
            <div className='password'>
              <label htmlFor="password">Password</label>
              <input type='password' name='password' onChange={this.handleChange} noValidate />
              {errors.password.length > 0 &&
                <span className='error'>{errors.password}</span>}
            </div>
            <div className='submit'>
              <button>Login</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}