import axios from 'axios';
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

const OrderItem = ({
   _id,
   userName,
   userEmail,
   servicesName,
   bookingStatus,
}) => {
   const [updateValue, setUpdateValue] = useState(bookingStatus);

   const handleChange = (e) => {
      setUpdateValue(e.target.value);
   };

   axios
      .patch(
         `https://isp-server0.herokuapp.com/bookingUpdate/${_id}`,
         { updateValue }
      )
      .then((res) => console.log('Status Updated!'))
      .catch((err) => console.log(err));

   return (
      <tr>
         <td>{userName}</td>
         <td>{userEmail}</td>
         <td>{servicesName}</td>
         <td>
            <Form className="order-list-form">
               <Form.Group className="mb-0">
                  <Form.Control
                     as="select"
                     onChange={handleChange}
                     className={bookingStatus}
                  >
                     <option>{bookingStatus}</option>
                     <option>Pending</option>
                     <option>On Going</option>
                     <option>Done</option>
                  </Form.Control>
               </Form.Group>
            </Form>
         </td>
      </tr>
   );
};

export default OrderItem;
