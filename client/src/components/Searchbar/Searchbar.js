import React, { Component } from 'react';
import './Search.css';

class Searchbar extends Component {
  state = { term: '' };

  onInputChange = e => {
    this.setState({ term: e.target.value });
  };
  onFormSubmit = e => {
    e.preventDefault();
  };
  componentDidMount() {
    fetch('https://swapi.co/api/people/1')
      .then(response => response.json())
      .then(data => console.log(data));
  }

  render() {
    return (
      <div className="Searchbar animated fadeInRightBig ">
        <i className="fa fa-search searchIcon" />
        <form className="form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label className="searchButton">Mechanical</label>

            <input
              type="text1"
              className="text1 "
              placeholder="Search...."
              value={this.state.term}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default Searchbar;
