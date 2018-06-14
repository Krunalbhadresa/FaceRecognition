import React from 'react';
import Tilt from 'react-tilt';
import face from './face.png';
import './Logo.css';

const Logo = () => {
	return (
		<div className="ma3 mt0">
			<Tilt className="Tilt pa3 shadow-4" options={{ max : 45 }} style={{ height: 100, width: 100 }} >
				<div className="Tilt-inner"><img src={face} alt="face"/></div>
			</Tilt>
		</div>
	);
}

export default Logo;