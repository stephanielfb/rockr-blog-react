import React from 'react';

const Header = ({ setPage }) => {
  return (
    <header>
      <nav>
        <ul>
          <li><a href="#" onClick={() => setPage('home')}>Rockr Blog</a></li>
          <li><a href="#" onClick={() => setPage('single-post')}>Posts</a></li>
          <li><a href="#" onClick={() => setPage('contact')}>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
