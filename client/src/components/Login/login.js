import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import './Login.css';

import Navbar from '../NavBar/Navbar';

class Login extends Component {
  state = {
    email: '',
    password: '',
    errors: {}
  };

  onSubmit = e => {
    e.preventDefault();
    const user = {
      email: this.state.email,
      password: this.state.password
    };
    console.log(user);

    axios
      .post('/api/users/login', user)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  };

  onInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div>
        <Navbar />
        <h1 id="title">
          j<span className="char2">o</span>
          <span className="animated infinite bounce char3 ">o</span>le
        </h1>
        <div className="circle animated fadeInRight delay-1s " />
        <div className="circle1 animated fadeInLeft delay-2s" />
        <h2>Building Product Selection Platform</h2>
        <div>
          <form onSubmit={this.onSubmit}>
            <input
              type="text"
              id="fname"
              name="email"
              value={this.state.email}
              placeholder="Username or Email"
              onChange={this.onInputChange}
            />
            <i className="fas fa-user-alt" />
            <i className="fas fa-lock" />

            <input
              type="password"
              id="lname"
              name="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.onInputChange}
            />
            <Link to="/project">
              {' '}
              <input type="submit" value="Log in" />
            </Link>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
