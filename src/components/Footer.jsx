import React from 'react';

const Footer = () => {
  return (
    <footer className="footer px-margin">
      <div className="container footer-inner">
        <div className="footer-left">
          <span className="font-headline-sm footer-brand">Portfolio</span>
          <p className="font-body-md footer-copyright">© 2024 Handcrafted Digital. All rights reserved.</p>
        </div>
        <div className="footer-links">
          <a href="#" className="font-label-sm footer-link">GitHub</a>
          <a href="#" className="font-label-sm footer-link">LinkedIn</a>
          <a href="#" className="font-label-sm footer-link">Twitter</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
