import React, { useEffect, useState } from 'react';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';

const ManageItem = ({ _id, name, price, setAlertShow, setAlertErrShow }) => {
   const [id, setId] = useState('');

   useEffect(() => {
      id &&
         axios
            .delete(
               `http://localhost:8000/services/delete/${id}`
            )
            .then(() => {
               setAlertShow(true);
               setAlertErrShow(false);
            })
            .catch(() => {
               setAlertErrShow(true);
               setAlertShow(false);
            });
   }, [id, setAlertShow, setAlertErrShow]);

   return (
      <tr>
         <td>{name}</td>
         <td>${price}</td>
         <td>
            <button
               className="delete-btn text-danger"
               onClick={() => setId(_id)}
            >
               <FontAwesomeIcon icon={faTrash} />
            </button>
         </td>
      </tr>
   );
};

export default ManageItem;
