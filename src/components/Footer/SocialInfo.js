import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const SocialInfo = ({ icon, link, className }) => {
   return (
      <li className="d-inline-block">
         <a className={className} href={link}>
            <FontAwesomeIcon icon={icon} />
         </a>
      </li>
   );
};

export default SocialInfo;
