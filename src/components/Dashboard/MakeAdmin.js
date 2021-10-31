import axios from "axios";
import React, { useState } from "react";
import { Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import AlertMessage from "../Common/AlertMessage";
import Sidebar from "./Sidebar";
import Button from "@material-ui/core/Button";

const MakeAdmin = () => {
  const [alertShow, setAlertShow] = useState(false);
  const [alertErrShow, setAlertErrShow] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const adminEmail = {
      email: data.email,
    };

    axios
      .post("https://isp-server0.herokuapp.com/addAdmin", adminEmail)
      .then(() => {
        setAlertShow(true);
        setAlertErrShow(false);
      })
      .catch(() => {
        setAlertErrShow(true);
        setAlertShow(false);
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
                text="Admin added successfully!"
              />
            )}
            {alertErrShow && (
              <AlertMessage
                variant="danger"
                closeBtn={() => setAlertErrShow(false)}
                text="Failed to add Admin!"
              />
            )}
            <Form.Group controlId="email">
              <Form.Label>Email:</Form.Label>
              <InputGroup>
                <Form.Control
                  type="email"
                  {...register("email", { required: true })}
                  placeholder="enter a valid email address"
                />
                <InputGroup.Prepend>
                  {/* <button className="btn custom-btn admin-btn" type="submit">
                    Submit
                  </button> */}
                  <Button className="ml-2" type="submit" variant="contained" color="primary">
                    Add as admin
                  </Button>
                </InputGroup.Prepend>
                {errors.email && (
                  <Form.Text className="text-danger">
                    Email is required!
                  </Form.Text>
                )}
              </InputGroup>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default MakeAdmin;
