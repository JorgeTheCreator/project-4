import React from 'react';
import Logo from '../../img/JLogo.png';
import Photo from '../../img/female.png';
import Searchbar from '../Searchbar/Searchbar';
import './Product.css';

const Product = () => {
  return (
    <div>
      <ul className="ul">
        <li id="logo" className="li">
          <img src={Logo} alt="" style={{ width: '18%' }} />
        </li>

        <li className="li" />

        <li className="li">
          {' '}
          <span id="a">Projects</span>{' '}
        </li>
        <li>
          <img src={Photo} alt="" className="female" />
        </li>
      </ul>
    </div>
  );
};

export default Product;
