import React from 'react';
import Tilt from 'react-tilt';
import logo from './logo.png';
import './Logo.css';

const Logo = () => {
  return (
    <div className='ma3 mt0'>
      <Tilt className="Tilt pa3 shadow-4" options={{ max : 55 }} >
        <div className="Tilt-inner">
          <img alt='logo' src={logo}/>
        </div>
      </Tilt>
    </div>
  );
}

export default Logo;