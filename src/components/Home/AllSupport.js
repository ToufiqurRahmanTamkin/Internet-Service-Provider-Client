import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Button from "@material-ui/core/Button";

const AllSupport = () => {
   return (
      <section className="all-support mt-5 py-5">
         <Container>
            <Row className="all-support-info align-items-center">
               <Col md={10}>
                  <div className="title">
                     <h3 style={{color: 'DeepSkyBlue'}}>𝐂𝐨𝐦𝐦𝐞𝐫𝐜𝐢𝐚𝐥 𝐈𝐧𝐭𝐞𝐫𝐧𝐞𝐭</h3>
                  </div>
                  <h4 style={{color: 'white'}} ><strong style={{color: 'BlueViolet'}}>𝐂𝐨𝐦𝐦𝐞𝐫𝐜𝐢𝐚𝐥 𝐈𝐧𝐭𝐞𝐫𝐧𝐞𝐭 𝐬𝐞𝐫𝐯𝐢𝐜𝐞</strong>  𝐢𝐬 𝐚𝐯𝐚𝐢𝐥𝐚𝐛𝐥𝐞 𝐚𝐬 𝐨𝐮𝐫 𝐩𝐫𝐞𝐦𝐢𝐮𝐦 𝐬𝐞𝐫𝐯𝐢𝐜𝐞.</h4>
                  {/* <button className="btn custom-btn mt-3">Read more</button> */}
                  <Button className="mt-3" variant="contained" color="primary">Read More</Button>
                  
               </Col>
            </Row>
         </Container>
      </section>
   );
};

export default AllSupport;
