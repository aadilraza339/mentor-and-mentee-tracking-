import React from 'react';
import axios from 'axios';
// import { Link } from 'react-router-dom';

const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errors: {
        email: '',
        password: '',
      }
    };
  }

  handleChange = (event) => {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
    let errors = this.state.errors;
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const getData = axios.post("http://localhost:8000/mentor_mentee/login", {
      email: this.state.email,
      password: this.state.password,
    })
      .then(res => {
        console.log(res);

        const n = axios.get('http://localhost:8000/mentor_mentee/verify',)
          .then(respo => {
            console.log(respo)
            if (respo.data.length !== 0) {
              window.location.href = "/Homepage";
            } else {
              window.location.href = "/";
            }
          });
        this.setState({
          loading: true
        });
        console.log(n)
      })
      .catch(err => {
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
              <input type='email' name='email' value={this.state.email} onChange={this.handleChange} />
              {errors.email.length > 0 &&
                <span className='error'>{errors.email}</span>}
            </div>
            <div className='password'>
              <label htmlFor="password">Password</label>
              <input type='password' name='password' value={this.state.password} onChange={this.handleChange} />
              {errors.password.length > 0 &&
                <span className='error'>{errors.password}</span>}
            </div>
            <button >Login</button>
          </form>
        </div>
      </div>
    );
  }
}