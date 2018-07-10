import React from 'react';

const Navigation = ({ onRouteChange }) => {
      return (
        <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
          <p onClick={() => onRouteChange('signin')} className='f5 link hover-white black pa3 pointer ma0'>Sign Out</p>
        </nav>
      );
}

export default Navigation;