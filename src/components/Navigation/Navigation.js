import React from 'react';
import './Navigation.css';

const Navigation = ({ onRouteChange }) => {
    return (
        <nav>
            <p className='f5 link hover-white black pa3 pointer ma0' onClick={() => onRouteChange('signin')}> Sign out </p>
        </nav>
    );
}

export default Navigation;