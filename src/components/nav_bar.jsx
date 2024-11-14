import React from 'react';
import { NavLink } from 'react-router-dom';
import Usuario from './usuario.jsx';
import Setting from './settings.jsx'
import '../stylesheets/nav-bar/index.scss';

export const NavBar = () => {
  const navLinkClass = ({ isActive }) => {
    const classes = ['nav-bar__link'];
    if (isActive) classes.push('nav-bar__link--active');
    return classes.join(' ');
  };

  return (
    <nav className="nav-bar" style={{ alignContent: 'end' }}>
      <Usuario />
      <Setting />
    </nav>
  );
};

export default NavBar;