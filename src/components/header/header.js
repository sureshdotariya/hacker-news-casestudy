import React from 'react';
import './header.scss';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className='header-container'>
      <h2>
        <Link to='/home'> Welcome to Hacker News</Link>
      </h2>
      <div className='menu-list'>
        <div className='menu-item'>
          <Link to='/home'>Home</Link>
        </div>
        <div className='menu-item'>
          <Link to='/chart'>View Chart</Link>
        </div>
      </div>
    </div>
  );
}
