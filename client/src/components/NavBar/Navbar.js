import React from 'react';
import { Link } from 'react-router-dom';

const divStyle = {
  textDecoration: 'none',
  float: 'right',
  color: '#756e76cf',
  fontFamily: 'Arial Rounded MT Bold'
};

class Navbar extends React.Component {
  state = { show: false };
  handleClick = () => {
    this.setState({ show: !this.state.show });
  };

  render() {
    const link = this.state.show ? '/' : '/Signup';
    const signupBack = !this.state.show ? 'Sign up' : 'Back';
    return (
      <Link onClick={this.handleClick} to={link} style={divStyle}>
        {signupBack}
      </Link>
    );
  }
}

export default Navbar;
