import React, { Component } from 'react';
import Searchbar from '../Searchbar/Searchbar';
import '../Login/login';

class Project extends Component {
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
  };

  onInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onTermSubmit = term => {
    console.log(term);
  };

  render() {
    return (
      <div>
        <h1 id="title">
          j<span className="char2">o</span>
          <span className="animated infinite bounce char3 ">o</span>le
        </h1>

        <div className="circle animated fadeInRight delay-1s " />
        <div className="circle1 animated fadeInLeft delay-2s" />
        <h2>Building Product Selection Platform</h2>
        <Searchbar onTermSubmit={this.onTermSubmit} />
        <div />
      </div>
    );
  }
}

export default Project;
