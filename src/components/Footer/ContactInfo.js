import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const ContactInfo = ({ icon, name, className }) => {
   return (
      <>
         <li className={className}>
            <span className="icon">
               <FontAwesomeIcon icon={icon} />
            </span>
            {name}
         </li>
      </>
   );
};

export default ContactInfo;
