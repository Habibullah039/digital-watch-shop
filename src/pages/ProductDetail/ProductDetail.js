import { Link, useParams } from 'react-router-dom';
import useProductDetails from '../../hooks/useProductDetails';
import { StarIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';

const ProductDetail = () => {
    const { productId } = useParams();
    const [product] = useProductDetails(productId);
    const [count, setCount] = useState(1);

    const increaseCount = () => setCount(count + 1);
    const decreaseCount = () => setCount(count - 1);

    return (
        <div className='flex'>
            <div className='bg-[#4E4E53] mt-[80px] mx-[60px] mb-[150px]'>
                <img src={product.img} className='h-[450px] w-[320px] mb-[-130px]' alt={product.name} />
            </div>

            <div className='mt-[100px]'>
                <h1 className='text-3xl font-serif font-bold mb-3'>{product.name}</h1>
                <p className='font-serif text-md font-semibold'> {product.discription} </p>
                <div className='flex my-2'>
                    <StarIcon className="h-5 w-5 text-[#835a0e]" />
                    <StarIcon className="h-5 w-5 text-[#835a0e]" />
                    <StarIcon className="h-5 w-5 text-[#835a0e]" />
                    <StarIcon className="h-5 w-5 text-[#835a0e]" />
                    <StarIcon className="h-5 w-5 text-[#835a0e]" />
                </div>
                <p className='text-4xl font-serif  font-bold mb-3'> {product.price} </p>
                <div className='flex font-serif font-bold'>
                    <p className='mr-4 text-2xl'>Size :</p>
                    <div>
                        <input type="radio" name="radio-1" className="radio radio-warning"  />
                        <span className='text-2xl mx-2'>S</span>
                    </div>
                    <div>
                        <input type="radio" name="radio-1" className="radio radio-warning" />
                        <span className='text-2xl mx-2'>M</span>
                    </div>
                    <div>
                        <input type="radio" name="radio-1" className="radio radio-warning" />
                        <span className='text-2xl mx-2'>L</span>
                    </div>
                    <div>
                        <input type="radio" name="radio-1" className="radio radio-warning" />
                        <span className='text-2xl mx-2'>XL</span>
                    </div>
                </div>
                <div className='flex items-center text-2xl font-serif font-bold my-2'>
                    <p className='mr-2'>Quantity :</p>
                    <button className='mr-4' onClick={decreaseCount}>-</button>
                    <p className='mr-4'>{count}</p>
                    <button className='mr-4' onClick={increaseCount}>+</button>
                </div>

                <Link to='/checkout'>
                    <button className='text-lg font-serif font-bold bg-pink-800 text-white px-[30px] py-3 my-5'>ADD TO CART</button>
                </Link>
            </div>

        </div>
    );
};

export default ProductDetail;

