import React, { Component } from 'react';
import Login from './Login/login';
import Signup from './Signup/Signup';
import Project from './Project/Project';
import Product from './Product/Product';
import { BrowserRouter as Router, Route } from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/project" component={Project} />
          <Route exact path="/product" component={Product} />
        </div>
      </Router>
    );
  }
}

export default App;
