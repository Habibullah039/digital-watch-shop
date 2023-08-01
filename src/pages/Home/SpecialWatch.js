import React from 'react';
import { useNavigate } from 'react-router-dom';
import { StarIcon } from '@heroicons/react/24/solid';

const SpecialWatch = ({ specialProduct }) => {
    const { img, name, price, _id } = specialProduct;
    const navigate = useNavigate();

    const handleClick = id => {
        navigate(`/specialProduct/${id}`)
    }
    return (

        <section className='mt-[60px]'>

            <div>
                <img src={img} className='h-[340px] w-[250px] text-white' alt={name} />
            </div>

            <div className='text-white'>

                <h3 className='text-2xl text-center font-medium capitalize font-serif'> {name} </h3>
                <div className='flex justify-center'>
                    <StarIcon className="h-6 w-6 text-[yellow]" />
                    <StarIcon className="h-6 w-6 text-[yellow]" />
                    <StarIcon className="h-6 w-6 text-[yellow]" />
                    <StarIcon className="h-6 w-6 text-[yellow]" />
                    <StarIcon className="h-6 w-6 text-[yellow]" />
                </div>
                <p className='text-center text-2xl mt-1 mb-2 font-medium'>  Tk {price}.00 </p>

            </div>

            <div className='text-white'>

                <button className='bg-[#4E4E53] uppercase text-md font-semibold block mx-auto px-12 py-4' onClick={() => handleClick(_id)}>Add to cart</button>
                <div className="divider h-[2px] block mx-auto w-[197px] mt-[-2px] bg-[#FFA07A]"></div>

            </div>




        </section>


    );
};

export default SpecialWatch;