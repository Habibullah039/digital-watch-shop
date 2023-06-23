import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Orders from './Orders';


const CheckOut = () => {

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/order')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
    
    return (
        <div>
            <h2>My Appointments : {orders.length} </h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Count</th>
                            <th>image</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                       
                       {

                        orders.map(a => <tr>
                            <th>{1}</th>
                            <td>{a.product}</td>
                            <td>{a.price}</td>
                            <td>{a.quantity}</td>
                            <td>
                                <img src={a.productImage} alt="" />
                            </td>

                            
                        </tr>)
                       }
                        
                       
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CheckOut;