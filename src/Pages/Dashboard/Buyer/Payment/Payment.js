import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(process.env.REACT_APP_StripePK);

const Payment = () => {
    const order = useLoaderData();
    const { productName, price, buyerEmail, sellerEmail } = order;

    return (
        <div>
            <h1 className='text-2xl font-semibold mb-5'>Payment Here!</h1>
            <p>Your payment is <b>${price}</b> for purchasing <b>{productName}.</b></p>
            <div className='w-96 my-5'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm order={order} />
                </Elements>
            </div>

        </div>
    );
};

export default Payment;