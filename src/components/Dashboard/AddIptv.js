import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useState } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import AlertMessage from '../Common/AlertMessage';
import Sidebar from './Sidebar';

const AddIptv = () => {
   const [imageURL, setImageURL] = useState('');
   const [alertShow, setAlertShow] = useState(false);
   const [alertErrShow, setAlertErrShow] = useState(false);

   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm();

   const onSubmit = (data) => {
      const { name,  description } = data;

      const ipServicesData = {
         name,
         description,
         imageURL,
      };

      axios
         .post(
            'https://internet-service-provider-server.vercel.app/addIptv',
            ipServicesData
         )
         .then(() => {
            setAlertShow(true);
            setAlertErrShow(false);
            setImageURL('');
         })
         .catch(() => {
            setAlertErrShow(true);
            setAlertShow(false);
         });
   };

   const handleImageUpload = (event) => {
      const imageData = new FormData();
      imageData.set('key', 'ceb58f5897e5b82a5c60b14f0015f7a6');
      imageData.append('image', event.target.files[0]);

      axios
         .post('https://api.imgbb.com/1/upload', imageData)
         .then((res) => {
            setImageURL(res.data.data.display_url);
         })
         .catch((err) => {
            console.log(err);
         });
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
                        text="IP Services added successfully!"
                     />
                  )}
                  {alertErrShow && (
                     <AlertMessage
                        variant="danger"
                        closeBtn={() => setAlertErrShow(false)}
                        text="Failed to add service!"
                     />
                  )}
                  <Row>
                     <Col md={12}>
                        <Form.Group>
                           <Form.Control
                              type="text"
                              {...register('name', {
                                 required: true,
                              })}
                              placeholder="IP Service Name*"
                           />
                           {errors.name && (
                              <Form.Text className="text-danger">
                                 Service Name is required!
                              </Form.Text>
                           )}
                        </Form.Group>
                     </Col>
                     
                     <Col md={6}>
                        <Form.Group>
                           <Form.File
                              id="upload-file"
                              className="d-none"
                              name="upload"
                              onChange={handleImageUpload}
                           />
                           <label
                              className="upload-image"
                              htmlFor="upload-file"
                           >
                              <FontAwesomeIcon icon={faCloudUploadAlt} />
                              <span>Upload image</span>
                           </label>
                           {!imageURL && (
                              <Form.Text className="text-danger">
                                 Image is required!
                              </Form.Text>
                           )}
                        </Form.Group>
                     </Col>
                     <Col md={12}>
                        <Form.Group>
                           <Form.Control
                              as="textarea"
                              rows={3}
                              {...register('description', {
                                 required: true,
                              })}
                              placeholder="IP Service Description*"
                           />
                           {errors.description && (
                              <Form.Text className="text-danger">
                                 Description is required!
                              </Form.Text>
                           )}
                        </Form.Group>
                     </Col>
                  </Row>
                  <div>
                     <button
                        className="btn custom-btn book-btn"
                        type="submit"
                        disabled={!imageURL && true}>

                        Submit
                     </button>
                  </div>
               </Form>
            </Col>
         </Row>
      </Container>
   );
};






export default AddIptv;