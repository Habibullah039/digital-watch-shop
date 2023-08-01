import React from 'react';

const Orders = ({ orders }) => {

    

    let price = 0;
    let quantity = 0;
    for (const a of orders) {
        quantity = quantity + a.quantity;
        price = (price + a.price * a.quantity);

    }
    const tax = parseFloat((price * 0.1).toFixed(2));
    const grandTotal = price + tax;


    return (
        <div className='w-[400px] font-serif text-white font-bold'>
            <h4 className=' text-3xl text-[orange]  mb-[40px]'>Order Summary</h4>
            <p className=' text-xl mb-[10px] capitalize'>Your Selected Products : {quantity} Item</p>
            <p className=' text-xl mb-[10px] capitalize'>Products Price : {price}.00 tk</p>
            <p className=' text-xl mb-[30px] capitalize'>Tax : {tax}.00 tk</p>
            <h5 className=' text-xl mb-[10px] capitalize'>Total Amount :  {grandTotal.toFixed(2)} tk</h5>
            <button className=' btn capitalize text-lg font-serif font-bold  text-white  my-5'>Add Payment</button>
            {orders.children}
        </div>
    );
};

export default Orders;