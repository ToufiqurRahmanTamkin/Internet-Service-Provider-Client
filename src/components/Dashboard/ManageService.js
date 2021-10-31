import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';
import AlertMessage from '../Common/AlertMessage';
import ManageItem from './ManageItem';
import Sidebar from './Sidebar';

const ManageService = () => {
   const [services, setServices] = useState([]);
   const [alertShow, setAlertShow] = useState(false);
   const [alertErrShow, setAlertErrShow] = useState(false);

   useEffect(() => {
      axios
         .get('https://isp-server0.herokuapp.com/services')
         .then((res) => {
            setServices(res.data);
         })
         .catch((err) => console.log(err));
   }, []);

   return (
      <Container className="dashboard">
         <Row>
            <Col md={3}>
               <Sidebar />
            </Col>
            <Col md={9} className="pt-9">
               {alertShow && (
                  <AlertMessage
                     variant="success"
                     closeBtn={() => setAlertShow(false)}
                     text="Services Deleted successfully!"
                  />
               )}
               {alertErrShow && (
                  <AlertMessage
                     variant="danger"
                     closeBtn={() => setAlertErrShow(false)}
                     text="Failed to delete service!"
                  />
               )}
               <Table striped bordered hover size="sm">
                  <thead>
                     <tr>
                        <th className="text-center">Service Names</th>
                        <th className="text-center">Service Price</th>
                        <th className="text-center">Action</th>
                     </tr>
                  </thead>
                  <tbody>
                     {services.map((service) => (
                        <ManageItem
                           {...service}
                           setAlertShow={setAlertShow}
                           setAlertErrShow={setAlertErrShow}
                           key={service._id}
                        />
                     ))}
                  </tbody>
               </Table>
            </Col>
         </Row>
      </Container>
   );
};

export default ManageService;
