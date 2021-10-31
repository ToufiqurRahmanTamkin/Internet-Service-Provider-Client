import React, { useContext, useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { UserContext } from '../../App';
import axios from 'axios';
import AlertMessage from '../Common/AlertMessage';

const PaymentForm = ({ id }) => {
    const [services, setServices] = useState([]);
    const [alertShow, setAlertShow] = useState(false);
    const [alertErrShow, setAlertErrShow] = useState(false);
    const [paymentError, setPaymentError] = useState('');
    const [loggend, setLoggend] = useContext(UserContext);

    const { displayName, email } = loggend;

    useEffect(() => {
        axios
            .get('https://isp-server0.herokuapp.com/services')
            .then((res) => {
                setServices(res.data);
            })
            .catch((err) => console.log(err));
    }, []);

    const bookingService = services.find((service) => service._id === id);

    const stripe = useStripe();
    const elements = useElements();

    const { register, handleSubmit } = useForm();

    const onSubmit = async () => {
        if (!stripe || !elements) {
            return;
        }
        const cardElement = elements.getElement(CardElement);
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
        });

        if (error) {
            setPaymentError(error.message);
            setAlertErrShow(true);
            setAlertShow(false);
        } else {
            const serviceBooking = {
                userName: displayName,
                userEmail: email,
                servicesName: bookingService?.name,
                price: bookingService?.price,
                description: bookingService?.description,
                image: bookingService?.imageURL,
                paymentId: paymentMethod.id,
                paymentInfo: paymentMethod.card,
                bookingDate: new Date().toLocaleString(),
                bookingStatus: 'Panding',
            };

            axios
                .post(
                    'https://isp-server0.herokuapp.com/addBooking',
                    serviceBooking
                )
                .then(() => {
                    setAlertShow(true);
                    setAlertErrShow(false);
                })
                .catch(() => {
                    setAlertErrShow(true);
                    setAlertShow(false);
                });
        }
    };

    return (
        <Form className="w-100 pt-9" onSubmit={handleSubmit(onSubmit)}>
            {alertShow && (
                <AlertMessage
                    variant="success"
                    closeBtn={() => setAlertShow(false)}
                    text="Booking added successfully!"
                />
            )}
            {alertErrShow && (
                <AlertMessage
                    variant="danger"
                    closeBtn={() => setAlertErrShow(false)}
                    text={paymentError || 'Failed to add Booking!'}
                />
            )}
            <Form.Group>
                <Form.Control
                    type="text"
                    defaultValue={displayName}
                    {...register('name')}
                    placeholder="Your Name*"
                    readOnly
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="email"
                    defaultValue={email}
                    {...register('email')}
                    placeholder="Your Email*"
                    readOnly
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="text"
                    defaultValue={bookingService?.name}
                    {...register('serviceName')}
                    placeholder="Service Name*"
                    readOnly
                />
            </Form.Group>
            <Form.Group>
                <CardElement />
            </Form.Group>
            <div className="d-flex justify-content-between align-items-center">
                <p className="mb-0">
                    Your service changed will be ${bookingService?.price}
                </p>
                <button
                    className="btn custom-btn book-btn"
                    type="submit"
                    disabled={!stripe}
                >
                    Pay
                </button>
            </div>
        </Form>
    );
};

export default PaymentForm;
