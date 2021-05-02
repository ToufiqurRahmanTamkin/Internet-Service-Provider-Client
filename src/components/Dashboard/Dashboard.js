import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Dashboard.css';
import Sidebar from './Sidebar';

const Dashboard = () => {
   return (
      <Container className="dashboard">
         <Row>
            <Col md={3}>
               <Sidebar />
            </Col>
            <Col md={9}>
               <h2 className="text-center pt-9">𝐖𝐞𝐥𝐜𝐨𝐦𝐞 𝐭𝐨 𝐲𝐨𝐮𝐫 𝐃𝐚𝐬𝐡𝐛𝐨𝐚𝐫𝐝.</h2>
            </Col>
         </Row>
      </Container>
   );
};

export default Dashboard;
