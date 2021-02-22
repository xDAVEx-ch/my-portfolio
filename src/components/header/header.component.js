import React from 'react';
import { Link } from "gatsby";

import Logo from '../../assests/svg/logo.svg';

import './header.styles.scss';

const Header = () =>(
  <header className='header header--fix-top'>
    <nav className='navbar is-primary' role='navigation' aria-label='main navigation'>
      <div className='navbar-brand is-align-items-center'>

        <div id='logo'>
          <Link to='/'>
            <Logo />
          </Link>
          <span className='is-family-secondary is-size-3'>Dave</span>
        </div>

        <span role='button' className='navbar-burger' aria-label='menu' aria-expanded='false'>
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
        </span>
      </div>

      <div id='navbarBasic' className='navbar-menu'>

        <div className='navbar-end'>

          <div className='menu'>
            <Link to='/home' className='menu-item is--underline has-text-white'>Home</Link>
            <Link to='/about' className='menu-item is--underline has-text-white'>About me</Link>
            <Link to='/impossibleList' className='menu-item is--underline has-text-white'>Impossible list</Link>
            <Link to='/projects' className='menu-item is--underline has-text-white'>Projects</Link>
          </div>
          
        </div>

      </div>
    </nav>
  </header>
);

export default Header