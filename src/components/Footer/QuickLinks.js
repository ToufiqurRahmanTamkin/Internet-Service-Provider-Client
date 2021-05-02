import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const QuickLinks = ({ name, icon, className, link }) => {
   return (
      <li>
         <Link className={className} to={link}>
            <span className="icon">
               <FontAwesomeIcon icon={icon} />
            </span>
            {name}
         </Link>
      </li>
   );
};

export default QuickLinks;
