import React from 'react';

const Orders = ({order}) => {

    const {img , name , count , price} = order ;
    return (
        <div>
            <img src={img} alt="" />
            <h1>{name}</h1>
        </div>
    );
};

export default Orders;