import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { UserContext } from '../../App';
import Booking from './Booking';
import Sidebar from './Sidebar';

const BookingList = () => {
   const [loggend, setLoggend] = useContext(UserContext);
   const [bookings, setBookings] = useState([]);

   useEffect(() => {
      axios
         .get(
            `https://isp-server0.herokuapp.com/bookings?email=${loggend.email}`
         )
         .then((res) => {
            setBookings(res.data);
         })
         .catch((err) => console.log(err));
   }, [loggend.email]);

   return (
      <Container className="dashboard">
         <Row>
            <Col md={3}>
               <Sidebar />
            </Col>
            <Col className="pt-9" md={9}>
               <Row>
                  {bookings.map((booking) => (
                     <Col md={6} key={booking._id}>
                        <Booking {...booking} />
                     </Col>
                  ))}
               </Row>
            </Col>
         </Row>
      </Container>
   );
};

export default BookingList;
