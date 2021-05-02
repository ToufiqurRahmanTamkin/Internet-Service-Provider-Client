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
            𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 &copy; <Link to="/">ɪɴᴛᴇʀɴᴇᴛ ꜱᴇʀᴠɪᴄᴇ</Link>{' '}
               {new Date().getFullYear()}. 𝐀𝐥𝐥 𝐫𝐢𝐠𝐡𝐭𝐬 𝐫𝐞𝐬𝐞𝐫𝐯𝐞𝐝.
            </p>
         </div>
      </footer>
   );
};

export default Footer;
