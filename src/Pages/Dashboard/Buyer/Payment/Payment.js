import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Payment = () => {
    const order = useLoaderData();
    const { productName, price, buyerEmail, sellerEmail } = order;

    return (
        <div>
            <h1 className='text-2xl font-semibold mb-5'>Payment Here!</h1>
            <p>Your payment is <b>${price}</b> for purchasing <b>{productName}.</b></p>
        </div>
    );
};

export default Payment;