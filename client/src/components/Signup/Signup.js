import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../NavBar/Navbar';
import './Signup.css';

class Signup extends Component {
  state = {
    animate: true,
    name: '',
    email: '',
    password: '',
    password2: '',
    errors: {}
  };

  onInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2,
      errors: {}
    };
    console.log(newUser);
  };
  onNavBarClick = () => {
    this.setState({ animate: true });
  };

  render() {
    const { errors } = this.state;
    return (
      <div>
        <Navbar onClick={this.onNavBarClick} />
        <h1 id="title">
          j<span className="char2">o</span>
          <span className="animated infinite bounce char3 ">o</span>le
        </h1>

        <div className="circle animated fadeInRight delay-1s " />
        <div className="circle1 animated fadeInLeft delay-2s" />
        <h2>Registration</h2>

        <div>
          <form onSubmit={this.onSubmit} className="animated flipInY ">
            <input
              type="text"
              id="email"
              name="email"
              value={this.state.email}
              placeholder="Email"
              onChange={this.onInputChange}
              error={errors.email}
            />
            <input
              type="text"
              id="fname"
              name="name"
              placeholder="name"
              value={this.state.name}
              onChange={this.onInputChange}
            />

            <input
              type="Password"
              id="password"
              name="password"
              value={this.state.password}
              placeholder="Password"
              onChange={this.onInputChange}
            />

            <input
              type="password"
              id="password2"
              name="password2"
              placeholder="Confirm Password"
              value={this.state.password2}
              onChange={this.onInputChange}
            />

            <Link to="/">
              <input type="submit" value="Sign up" />
            </Link>
          </form>
        </div>
      </div>
    );
  }
}

export default Signup;
