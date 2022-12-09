import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      <h1 className="title">BooKstore CMS</h1>
      <nav>
        <Link to="/">BOOKS</Link>
        <Link to="categories">CATEGORIES</Link>
      </nav>
    </div>
  );
}

export default Header;
