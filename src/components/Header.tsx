import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header style={{ backgroundColor: '#333', padding: '16px 0', marginBottom: '40px' }}>
      <div className="container text-center">
        <Link to="/" style={{ textDecoration: 'none', color: 'white', fontSize: '24px', fontWeight: 'bold' }}>
          Vegetable Store
        </Link>
      </div>
    </header>
  );
};

export default Header;
