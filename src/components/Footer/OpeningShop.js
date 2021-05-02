import React from 'react';

const OpeningShop = ({ name, time, className }) => {
   return (
      <li className={className}>
         <span>{name}</span>
         <span>{time}</span>
      </li>
   );
};

export default OpeningShop;
