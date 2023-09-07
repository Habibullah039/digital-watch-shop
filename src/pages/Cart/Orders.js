import React from 'react';



const Orders = (props) => {

    const {orders} = props ;

    

    let price = 0;
    let quantity = 0;
    for (const a of orders) {
        quantity = quantity + a.quantity;
        price = (price + a.price * a.quantity);

    }
    const tax = parseFloat((price * 0.1).toFixed(2));
    const grandTotal =parseFloat((price + tax).toFixed(2));

    




    return (
        <div className='w-[400px] font-serif text-white ml-[30px] font-bold'>
            <h4 className=' text-3xl text-[orange]  mb-[40px]'>Order Summary</h4>
            <p className=' text-xl mb-[10px] capitalize'>Your Selected Products : {quantity} Item</p>
            <p className=' text-xl mb-[10px] capitalize'>Products Price : {price}.00 tk</p>
            <p className=' text-xl mb-[30px] capitalize'>Tax : {tax}.00 tk</p>
            <h5 className=' text-xl mb-[10px] capitalize'>Total Amount :  {grandTotal} tk</h5>     
            {props.children}
        </div>
    );
};

export default Orders;