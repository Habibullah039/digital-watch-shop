import axios from 'axios';
import { signOut } from 'firebase/auth';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Orders from './Orders';
import { TrashIcon } from '@heroicons/react/24/solid';


const CheckOut = () => {

    const [user] = useAuthState(auth);
    const [orders, setOrders] = useState([]);
    const navigate = useNavigate();

    
   



    useEffect(() => {

        const getOrders = async () => {

            const email = user.email;

            try {
                const { data } = await axios.get(`http://localhost:5000/order?email=${email}`, {

                    headers: {
                        authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                });
                setOrders(data);
            }

            catch (error) {

                if (error.response.status === 401 || error.response.status === 403) {
                    signOut(auth);
                    localStorage.removeItem('token');
                    navigate('/login');

                }
            }

        }

        getOrders();


    }, [ ])





    const handleDelete = id => {
        const proceed = window.confirm('are you sure you want to delete');

        if (proceed) {
            fetch(`http://localhost:5000/order/${id}`, {
                method: 'DELETE'
            })

                .then(res => res.json())
                .then(data => {
                    const remaining = orders.filter(order => order._id !== id);

                    setOrders(remaining);
                })
        }
    }

    return (
        <div className='bg-[#993300]'>


            <h1 className='font-serif font-bold text-3xl text-white text-center pt-[40px]  mb-[10px]'>Your Order</h1>
            <div className="divider h-[3px] block mx-auto w-[300px] mt-[-15px] bg-[#FFA07A]"></div>
            <div className="flex justify-between px-[150px] py-[50px]">

                <div className='font-serif font-bold  text-md'>

                    <h1 className='font-serif font-bold text-3xl text-[orange] text-center mb-[30px]'>Your Product</h1>
                    
                    {

                        orders.map(order => <div className='flex justify-between items-center text-white  mb-[30px]'>


                            <div>
                                <img src={order.productImage} className="h-[60px] w-[40px]" alt={order.product} />
                            </div>
                            <div className='mx-3'>{order.product}</div>
                            <div className='mx-3'>{order.price} tk </div>
                            <div className='mx-3'>{order.quantity} Item</div>
                            <div className='mx-3'>{order.size} - Size</div>
                            <div>
                                <button onClick={() => handleDelete(order._id)}>
                                    <TrashIcon className="h-6 w-6 ml-[20px]" />  
                                </button>
                            </div>




                        </div>)
                    }
                </div>

                <div>
                    <Orders orders={orders}></Orders>
                </div>



            </div>



        </div>
    );
};

export default CheckOut;