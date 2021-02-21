import React from 'react';

import MyIcon from '../../assests/svg/logo.svg';

const Header = () =>(
  <header>
    <nav className='navbar is-primary' role='navigation' aria-label='main navigation'>
      <div className='navbar-brand'>

        <a className='navbar-item' href='ttps://bulma.io'>
          <div style={{ width: '128px'}}><MyIcon /></div>
          <span className='is-family-secondary is-size-3'>Dave</span>
        </a>

        <span role='button' className='navbar-burger' aria-label='menu' aria-expanded='false'>
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
        </span>
      </div>

      <div id='navbarBasicExample' class='navbar-menu'>

        <div class="navbar-end">
          <a href='#home' class='navbar-item'>Home</a>
          <a href='#about' class='navbar-item'>About me</a>
          <a href='#impossibleList' class='navbar-item'>Impossible list</a>
          <a href='#projects' class='navbar-item'>Projects</a>
        </div>

      </div>
    </nav>
  </header>
);

export default Header