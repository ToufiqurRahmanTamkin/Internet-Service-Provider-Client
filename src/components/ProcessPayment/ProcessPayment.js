import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentForm from './PaymentForm';

const stripePromise = loadStripe(
   'pk_test_51Ie7tmLRpmAZQyNw2gWFqNUAPCQzTm7DxPO0yRVy2pLzGqZooS0EK0FRwEs8cyDvWq7NiTW0YOk3OeNfhX4rqIli00uc51XnIk'
);

const ProcessPayment = ({ id }) => {
   return (
      <Elements stripe={stripePromise}>
         <PaymentForm id={id} />
      </Elements>
   );
};

export default ProcessPayment;
