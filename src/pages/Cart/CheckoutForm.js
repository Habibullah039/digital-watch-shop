import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useEffect, useState } from 'react';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';




const CheckoutForm = ({ price }) => {

    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [user] = useAuthState(auth);


    useEffect(() => {

        fetch('https://digital-watch-shopping-server.vercel.app/create-payment-intent', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json' ,
                authorization: `Bearer ${localStorage.getItem('token')}`
                
            },

            body: JSON.stringify(price)
        })

        .then(res => res.json())  

        .then(data => {

            console.log(data.clientSecret);
            

            if(data?.clientSecret) {
                setClientSecret(data.clientSecret);
            }
        })

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

            console.log('PaymentMethod', paymentMethod);

            setCardError(' ');

        }

        const {paymentIntent  , error : confirmError} = await stripe.confirmCardPayment(clientSecret, {

                payment_method: {
                    card: card ,
                    billing_details: {

                        email : user?.email || 'unknown' 
                        
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
        }

        console.log(paymentIntent);
        

    }


    return (
        <>

            <form className='w-1/3 h-[500px] mt-5 ml-8' onSubmit={handleSubmit}>
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

                <button className='btn btn-primary btn-sm mt-5' type="submit" disabled={!stripe || !clientSecret}>
                    Pay
                </button>


            </form>

            {cardError && <p className='text-red-600 ml-8' >{cardError}</p>}

        </>
    );
};

export default CheckoutForm;