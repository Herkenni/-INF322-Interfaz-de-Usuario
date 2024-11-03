import React from 'react'
import { NavLink } from 'react-router-dom'
import UserIcon from '../assets/user-icon.jpg'

export const NavBar = () => {
  const navLinkClass = ({ isActive }) => {
    const classes = ['nav-bar__link']
    if (isActive) classes.push('nav-bar__link--active')
    return classes.join(' ')
  }
  return (
    <nav className='nav-bar'>
      <NavLink
        className={navLinkClass}
        to='/'
        style={{position:'relative', left:350}}
      >
        <img src={UserIcon} style={{width:50, height: 50}}/>
      </NavLink>
    </nav>
  )
}
 
export default NavBar
