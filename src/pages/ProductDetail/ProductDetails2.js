import {  useParams, useNavigate } from 'react-router-dom';
import { StarIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import useProductDetails2 from '../../hooks/useProductDetails2';


const ProductDetails2 = () => {
    const [user] = useAuthState(auth);
    const { modernProductId } = useParams();
    const [service] = useProductDetails2(modernProductId);
    const navigate = useNavigate();
    const { name, img, price , discription } = service;


    const [count, setCount] = useState(1);
    const increaseCount = () => setCount(count + 1);
    const decreaseCount = () => {
        if(count === 1) {
            return ;
        }

        else {
            setCount(count - 1)
        }
    };



    const handleOrder = event => {

        const email = user?.email
        const size = event.target.size.value;
        const order = {
            productId: modernProductId,
            email: email,
            product: name,
            productImage: img,
            price: price,
            quantity: count,
            size: size


        }

        console.log(order);
        navigate('/checkout');

        fetch('http://localhost:5000/order', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },

            body: JSON.stringify(order)
        })

            .then(res => res.json())
            .then(data => {

                console.log(data);
            })

    }

    return (
        <div className='flex'>

            <div className='bg-[#4E4E53] mt-[80px] mx-[60px] mb-[150px]'>
                <img src={img} className='h-[450px] w-[320px] mb-[-130px]' alt={name} />
            </div>

            <div className='mt-[100px]'>
                <h1 className='text-3xl font-serif font-bold mb-3'>{name}</h1>
                <p className='font-serif text-md font-semibold'> {discription} </p>
                <div className='flex my-2'>
                    <StarIcon className="h-5 w-5 text-[#835a0e]" />
                    <StarIcon className="h-5 w-5 text-[#835a0e]" />
                    <StarIcon className="h-5 w-5 text-[#835a0e]" />
                    <StarIcon className="h-5 w-5 text-[#835a0e]" />
                    <StarIcon className="h-5 w-5 text-[#835a0e]" />
                </div>
                <p className='text-4xl font-serif  font-bold mb-3'> {price} </p>


                <div className='flex items-center text-2xl font-serif font-bold my-2'>
                    <p className='mr-2'>Quantity :</p>
                    <button className='mr-4' onClick={decreaseCount}>-</button>
                    <p className='mr-4'>{count}</p>
                    <button className='mr-4' onClick={increaseCount}>+</button>

                </div>



                <form onSubmit={handleOrder}>

                    <div className='flex font-serif font-bold'>
                        <p className='mr-4 text-2xl'>Size :</p>

                        <div>
                            <input type="radio" name="size" id="S" value="S" checked className="radio radio-warning" />
                            <label for='S' className='text-2xl mx-2'>S</label>
                        </div>
                        <div>
                            <input type="radio" name="size" id="M" value="M" className="radio radio-warning" />
                            <label for='M' className='text-2xl mx-2'>M</label>
                        </div>
                        <div>
                            <input type="radio" name="size" id="L" value="L" className="radio radio-warning" />
                            <label for='M' className='text-2xl mx-2'>L</label>
                        </div>
                        <div>
                            <input type="radio" name="size" id="XL" value="XL" className="radio radio-warning" />
                            <label for='XL' className='text-2xl mx-2'>XL</label>
                        </div>
                    </div>



                    <input type="submit" value='Add To Cart' className=' btn text-lg font-serif font-bold bg-pink-800 text-white px-[30px] py-3 my-5' />


                </form>

            </div>




        </div>
    );
};

export default ProductDetails2;
