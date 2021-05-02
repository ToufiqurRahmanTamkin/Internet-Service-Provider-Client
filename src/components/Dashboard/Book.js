import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import ProcessPayment from '../ProcessPayment/ProcessPayment';
import Sidebar from './Sidebar';

const Book = () => {
   const { id } = useParams();
   return (
      <Container className="dashboard">
         <Row>
            <Col md={3}>
               <Sidebar />
            </Col>
            <Col md={9}>
               <ProcessPayment id={id} />
            </Col>
         </Row>
      </Container>
   );
};

export default Book;
