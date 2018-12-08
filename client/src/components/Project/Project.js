import React, { Component } from 'react';
import Searchbar from '../Searchbar/Searchbar';
import { Link } from 'react-router-dom';
import '../Login/login';

class Project extends Component {
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
        <Link to="/product" style={{ textDecoration: 'none', color: 'black' }}>
          {' '}
          <Searchbar onTermSubmit={this.onTermSubmit} />
        </Link>

        <div />
      </div>
    );
  }
}

export default Project;
