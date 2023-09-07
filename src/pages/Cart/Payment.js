import React from 'react';
import useOrders from '../../hooks/useOrders';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';



const stripePromise = loadStripe(process.env.REACT_APP_PAYMENT_GATEWAY_PK);

const Payment = () => {

    const [orders] = useOrders();
    const price =orders.reduce((sum, item) => sum + item.price * item.quantity + (item.price * 0.1) * item.quantity, 0);
    return (
        <div>

            <h2>{price}</h2>

            <Elements  stripe={stripePromise}>

                <CheckoutForm price={price}></CheckoutForm>

            </Elements>
            
        </div>
    );
};

export default Payment;