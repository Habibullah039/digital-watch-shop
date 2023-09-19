import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useEffect, useState } from 'react';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';




const CheckoutForm = ({ price, orders }) => {

    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [user] = useAuthState(auth);
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');


    useEffect(() => {

        if (price > 0) {

            fetch('https://digital-watch-shopping-server-iota.vercel.app/create-payment-intent', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': `Bearer ${localStorage.getItem('token')}`

                },

                body: JSON.stringify({ price })
            })

                .then(res => res.json())

                .then(data => {

                    console.log(data.clientSecret);


                    if (data?.clientSecret) {
                        setClientSecret(data.clientSecret);
                    }
                })

        }

    }, [price])

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
        });

        if (error) {

            console.log('error', error);

            setCardError(error.message);

        }

        else {

            console.log('paymentMethod', paymentMethod);

            setCardError(' ');

        }

        setProcessing(true)

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {

            payment_method: {
                card: card,
                billing_details: {

                    email: user?.email || 'unknown',
                    name: user?.displayName || 'unknown'

                },
            },
        }
        )

        if (confirmError) {

            console.log(confirmError);
            setCardError(confirmError.message)


        }

        else {
            setCardError('')
            console.log(paymentIntent);
        }

        setProcessing(false)

        if (paymentIntent.status === 'succeeded') {


            setTransactionId(paymentIntent.id);

            const payment = {
                email: user?.email,
                transactionId: paymentIntent.id,
                price,
                quantity: orders.length,
                items: orders.map(item => item._id),
                ordersId: orders.map(item => item.productId),
                itemsName: orders.map(item => item.product),
                itemSize: orders.map(item => item.size),
                date: new Date()

            }



            fetch('https://digital-watch-shopping-server-iota.vercel.app/payments', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': `Bearer ${localStorage.getItem('token')}`

                },

                body: JSON.stringify(payment)
            })

                .then(res => res.json())

                .then(data => {



                    if (data.insertResult.insertedId) {

                        console.log(data.insertResult.insertedId);

                    }

                })

            elements.getElement(CardElement).clear();



        }








    }


    return (
        <>

            <form className='h-[200px] md:w-1/3 mt-[10px] ' onSubmit={handleSubmit}>
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

                <button className='btn btn-primary btn-sm mt-[40px]' type="submit" disabled={!stripe || !clientSecret || processing}>
                    Pay
                </button>


            </form>

            {cardError && <p className='text-red-600 ml-8' >{cardError}</p>}
            {transactionId && <p className='text-green-600 font-bold md:text-md md:w-1/3 font-serif md:mb-[10px] mb-[90px] ml-8' >Congratulation!! Your Payment is Successful Please Store Your TransactionId : {transactionId}</p>}



            



        </>
    );
};

export default CheckoutForm;