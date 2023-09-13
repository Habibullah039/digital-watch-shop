import {  useParams, useNavigate } from 'react-router-dom';
import { StarIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';
import useProductDetails from '../../hooks/useProductDetails';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';

const ProductDetail = () => {
    const [user] = useAuthState(auth);
    const { productId } = useParams();
    const [product] = useProductDetails(productId);
    const navigate = useNavigate();
    const { name, img, price } = product;


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
            productId: productId,
            email: email,
            product: name,
            productImage: img,
            price: price,
            quantity: count,
            size: size


        }

        
        navigate('/cart');

        fetch('https://digital-watch-shopping-server-taanjilahmedtan039-gmailcom.vercel.app/order', {
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

            <div className='bg-[#4E4E53] mt-[80px] md:mx-[60px] mx-[20px] mb-[150px]'>
                <img src={product.img} className='md:h-[450px] h-[250px] md:w-[320px] w-[250px] md:mb-[-130px]' alt={product.name} />
            </div>

            <div className='mt-[100px]'>
                <h1 className='md:text-3xl text-lg font-serif font-bold mb-3'>{product.name}</h1>
                <p className='font-serif text-md font-semibold'> {product.discription} </p>
                <div className='flex my-2'>
                    <StarIcon className="h-5 w-5 text-[#835a0e]" />
                    <StarIcon className="h-5 w-5 text-[#835a0e]" />
                    <StarIcon className="h-5 w-5 text-[#835a0e]" />
                    <StarIcon className="h-5 w-5 text-[#835a0e]" />
                    <StarIcon className="h-5 w-5 text-[#835a0e]" />
                </div>
                <p className='md:text-4xl text-lg font-serif  font-bold mb-3'> {product.price} </p>


                <div className='flex items-center md:text-2xl text-lg font-serif font-bold my-2'>
                    <p className='mr-2'>Quantity :</p>
                    <button className='mr-4' onClick={decreaseCount}>-</button>
                    <p className='mr-4'>{count}</p>
                    <button className='mr-4' onClick={increaseCount}>+</button>

                </div>



                <form onSubmit={handleOrder}>

                    <div className='flex font-serif font-bold'>
                        <p className='mr-4 md:text-2xl text-lg'>Size:</p>

                        <div>
                            <input type="radio" name="size" id="S" value="S" checked className="radio radio-warning" />
                            <label for='S' className='md:text-2xl text-lg md:mx-2 mx-1'>S</label>
                        </div>
                        <div>
                            <input type="radio" name="size" id="M" value="M" className="radio radio-warning" />
                            <label for='M' className='md:text-2xl text-lg md:mx-2 mx-1'>M</label>
                        </div>
                        <div>
                            <input type="radio" name="size" id="L" value="L" className="radio radio-warning" />
                            <label for='M' className='text-2xl md:mx-2 mx-1'>L</label>
                        </div>
                        <div>
                            <input type="radio" name="size" id="XL" value="XL" className="radio radio-warning" />
                            <label for='XL' className='md:text-2xl text-lg mx-2'>XL</label>
                        </div>
                    </div>



                    <input type="submit" value='Add To Cart' className=' btn text-lg font-serif font-bold bg-pink-800 text-white md:px-[30px] py-3 my-5' />


                </form>

            </div>




        </div>
    );
};

export default ProductDetail;

