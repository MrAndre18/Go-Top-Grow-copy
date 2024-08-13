import React from 'react';
import './NavbarLink.scss';
import { Link, NavLink } from 'react-router-dom';
// import { Link as Anchor, animateScroll as scroll } from "react-scroll";

const NavbarLink = ({
  link,
  isCanBeActive = false,
  isButton = false,
  onClick

}) => {
  return (
    isCanBeActive ?
      <NavLink
        to={link.path}
        className='f-body-1 navigation-link'
        onClick={onClick}
      >
        {link.name}
      </NavLink>
      :
      <Link
        to={link.path}
        className='f-body-1 navigation-link'
        onClick={onClick}
      >
        {link.name}
      </Link>
  )
}

export default NavbarLink