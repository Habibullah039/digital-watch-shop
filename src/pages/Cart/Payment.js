import React from 'react';
import useOrders from '../../hooks/useOrders';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';




const stripePromise = loadStripe(process.env.REACT_APP_PAYMENT_GATEWAY_PK);

const Payment = () => {

    const [orders] = useOrders();
    const price = orders.reduce((sum, item) => sum + item.price * item.quantity + (item.price * 0.1) * item.quantity, 0);
    return (
        <div>

            <h2 className='md:text-3xl text-xl text-center mt-[40px] font-bold font-serif'>Please Pay Your Payment</h2>
            <div className="divider block mx-auto h-1 md:w-[450px] w-72 mt-[-8px] bg-[#FFA07A]"></div>
            <h4 className='text-center md:text-xl text-lg font-bold my-[40px]'>Your Total Payment : {price}TK</h4>

            <div className="md:flex justify-center ml-5">

                

                <Elements stripe={stripePromise}>

                    <CheckoutForm orders={orders} price={price}></CheckoutForm>

                </Elements>

            </div>


        </div>
    );
};

export default Payment;