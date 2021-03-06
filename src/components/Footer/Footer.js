import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import FooterMain from './FooterMain';

const Footer = () => {
   return (
      <footer>
         <FooterMain />
         <div className="text-center copy-right-footer">
            <p className="container py-3 mb-0">
            ๐๐จ๐ฉ๐ฒ๐ซ๐ข๐ ๐ก๐ญ &copy; <Link to="/">ษชษดแดแดสษดแดแด ๊ฑแดสแด ษชแดแด</Link>{' '}
               {new Date().getFullYear()}. ๐๐ฅ๐ฅ ๐ซ๐ข๐ ๐ก๐ญ๐ฌ ๐ซ๐๐ฌ๐๐ซ๐ฏ๐๐.
            </p>
         </div>
      </footer>
   );
};

export default Footer;
