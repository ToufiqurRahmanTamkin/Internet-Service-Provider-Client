import axios from 'axios';
import React, { useContext, useState } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../App';
import AlertMessage from '../Common/AlertMessage';
import Sidebar from './Sidebar';

const Review = () => {
   const [alertShow, setAlertShow] = useState(false);
   const [alertErrShow, setAlertErrShow] = useState(false);
   const [loggend, setLoggend] = useContext(UserContext);
   const { displayName, email, photoURL } = loggend;

   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm();

   const onSubmit = (data) => {
      const { title, description } = data;

      const userInfo = {
         name: displayName,
         image: photoURL,
         email,
         title,
         description,
      };

      axios
         .post(
            'https://isp-server0.herokuapp.com/addReviews',
            userInfo
         )
         .then(() => {
            setAlertShow(true);
         })
         .catch(() => setAlertErrShow(true));
   };

   return (
      <Container className="dashboard">
         <Row>
            <Col md={3}>
               <Sidebar />
            </Col>
            <Col md={9}>
               <Form className="w-100 pt-9" onSubmit={handleSubmit(onSubmit)}>
                  {alertShow && (
                     <AlertMessage
                        variant="success"
                        closeBtn={() => setAlertShow(false)}
                        text="Services added successfully!"
                     />
                  )}
                  {alertErrShow && (
                     <AlertMessage
                        variant="danger"
                        closeBtn={() => setAlertShow(false)}
                        text="Failed to add service!"
                     />
                  )}
                  <Form.Group>
                     <Form.Control
                        type="text"
                        defaultValue={displayName}
                        {...register('name', { required: true })}
                        placeholder="Your Name*"
                        readOnly
                     />
                     {errors.name && (
                        <Form.Text className="text-danger">
                           Name is required!
                        </Form.Text>
                     )}
                  </Form.Group>
                  <Form.Group>
                     <Form.Control
                        type="text"
                        {...register('title', { required: true })}
                        placeholder="Your Title*"
                     />
                     {errors.title && (
                        <Form.Text className="text-danger">
                           Title is required!
                        </Form.Text>
                     )}
                  </Form.Group>
                  <Form.Group>
                     <Form.Control
                        as="textarea"
                        rows={3}
                        {...register('description', { required: true })}
                        placeholder="Description*"
                     />
                     {errors.description && (
                        <Form.Text className="text-danger">
                           Description is required!
                        </Form.Text>
                     )}
                  </Form.Group>
                  <div>
                     <button className="btn custom-btn book-btn" type="submit">
                        Add Review
                     </button>
                  </div>
               </Form>
            </Col>
         </Row>
      </Container>
   );
};

export default Review;
