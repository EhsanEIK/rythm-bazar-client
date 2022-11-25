import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const CheckoutForm = ({ order }) => {
    const [cardErrorMsg, setCardErrorMsg] = useState('');
    const [clientSecret, setClientSecret] = useState("");
    const [transactionId, setTransactionId] = useState("");
    const [processing, setProcessing] = useState(false);

    const stripe = useStripe();
    const elements = useElements();

    const { _id, price, buyerEmail, buyerName, sellerEmail } = order;

    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("http://localhost:5000/create-payment-intent", {
            method: "POST",
            headers: {
                "content-Type": "application/json",
                authorization: `bearer ${localStorage.getItem('rythmBazarToken')}`,
            },
            body: JSON.stringify({ price }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, [price]);

    // handle payment submit
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        })

        if (error) {
            setCardErrorMsg(error.message);
            setProcessing(false);
        }
        else {
            setCardErrorMsg('');
        }

        setProcessing(true);

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: buyerName,
                        email: buyerEmail,
                    },
                },
            },
        );

        if (confirmError) {
            setCardErrorMsg(confirmError.message);
            setProcessing(false);
            return;
        }
        if (paymentIntent.status === "succeeded") {
            const payment = {
                buyerName,
                buyerEmail,
                sellerEmail,
                price,
                transactionId: paymentIntent.id,
                orderId: _id,
            }

            fetch('http://localhost:5000/payments', {
                method: "POST",
                headers: {
                    'content-type': 'application/json',
                    authorization: `bearer ${localStorage.getItem('rythmBazarToken')}`,
                },
                body: JSON.stringify(payment)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.acknowledged) {
                        toast.success("Congratz! Your payment is successful.");
                        setTransactionId(paymentIntent.id);
                    }
                })
        }
        setProcessing(false);
    }

    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button className='btn btn-sm btn-primary mt-5' type="submit" disabled={!stripe || !elements || processing}>
                Pay
            </button>
            <p className='text-red-600 my-3'>{cardErrorMsg}</p>
        </form>

    );
};

export default CheckoutForm;