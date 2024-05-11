import React from 'react';
import { Link } from 'react-router-dom';

const FooterLinks = () => (
  <div>
    <p><Link to="/profile" style={{ color: 'white' }}>Profile</Link></p>
    <p><Link to="/about" style={{ color: 'white' }}>About Us</Link></p>
  </div>
);

export default FooterLinks;
