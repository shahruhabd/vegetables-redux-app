import React from 'react';
import FooterInfo from './FooterInfo';
import FooterLinks from './FooterLinks';
import FooterCopyright from './FooterCopyright';

const Footer = () => {
  return (
    <footer style={{ background: 'green', color: 'white', padding: '10px 20px', textAlign: 'center' }}>
      <FooterInfo />
      <FooterLinks />
      <FooterCopyright />
    </footer>
  );
}

export default Footer;
