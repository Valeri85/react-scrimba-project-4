import React from 'react';
import logo from '../../icons/globe.svg';

function Nav() {
	return (
		<nav className="nav">
			<img className="nav__logo" src={logo} width={24} height={24} alt="Logo" />
			<h1 className="nav__title">my travel journal.</h1>
		</nav>
	);
}

export default Nav;
