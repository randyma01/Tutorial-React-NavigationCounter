import React, { Component } from 'react';

//Stateless Functional Component
const NavBar = ({ totalCounters }) => {
  return (
    <nav className='navbar navbar-light bg-light'>
      <a className='navbar-brand'>
        Amount of counter with numbers:
        <span className='bagde badge-pill bade-secondary'>{totalCounters}</span>
      </a>
    </nav>
  );
};

export default NavBar;
