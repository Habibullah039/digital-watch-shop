import React from 'react';
import {Link} from 'react-router-dom';
import Orders from './Orders';
import { TrashIcon } from '@heroicons/react/24/solid';
import useOrders from '../../hooks/useOrders';

const Cart = () => {
    const  [orders ,setOrders] = useOrders() ;

    const handleDelete = id => {
        const proceed = window.confirm('are you sure you want to delete');

        if (proceed) {
            fetch(`https://digital-watch-shopping-server-taanjilahmedtan039-gmailcom.vercel.app/order/${id}`, {
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


            <h1 className='font-serif font-bold md:text-3xl text-lg text-white text-center pt-[40px]  mb-[10px]'>Your Order</h1>
            <div className="divider h-[3px] block mx-auto md:w-[300px] w-[200px] mt-[-15px] bg-[#FFA07A]"></div>
            <div className="md:flex justify-between md:px-[150px] py-[50px]">

                <div className='font-serif font-bold text-md'>

                    <h1 className='font-serif font-bold md:text-3xl text-lg text-[orange] text-center mb-[30px]'>Your Product</h1>

                    {

                        orders.map(order => <div className='md:flex justify-between items-center text-white ml-[80px] mb-[30px]'>


                            <div>
                                <img src={order.productImage} className="md:h-[60px] h-[40px] md:w-[40px] w-[15px] " alt={order.product} />
                            </div>
                            <div className='md:mx-3'>{order.product}</div>
                            <div className='md:mx-3'>{order.price} tk </div>
                            <div className='md:mx-3'>{order.quantity} Item</div>
                            <div className='md:mx-3'>{order.size} - Size</div>
                            <div>
                                <button onClick={() => handleDelete(order._id)}>
                                    <TrashIcon className="md:h-6 h-4 md:w-6 w-4 md:ml-[20px]" />
                                </button>
                            </div>




                        </div>)
                    }
                </div>

                <div>
                    <Orders orders={orders}>

                        <Link to='/payment'>

                            <button className=' btn capitalize text-lg font-serif font-bold  text-white  my-5'>Add Payment</button>

                        </Link>

                    </Orders>
                </div>



            </div>



        </div>
    );
};

export default Cart;