import React from 'react';
import { Alert } from 'react-bootstrap';

const AlertMessage = ({ variant, text, closeBtn }) => {
   return (
      <Alert variant={variant} onClose={closeBtn} dismissible>
         <p className="mb-0">{text}</p>
      </Alert>
   );
};

export default AlertMessage;
