import React from 'react';

const ClassicWatch = ({classicProduct}) => {
    const {img , name , price} = classicProduct ;
    return (
        <section className='bg-[#4E4E53] mt-10 '>
            <div className='mb-[-250px]'>
                
                <div>
                    <img src={img} className='h-[340px] w-[250px]' alt={name} />
                </div>
                <div className='text-white'>
                    <h3 className='text-2xl text-center font-medium capitalize font-serif'> {name} </h3>
                    <p className='text-center text-2xl mt-1 mb-2 font-medium'> {price}.00 </p>
                    <button className='bg-[#4E4E53] uppercase text-md font-semibold block mx-auto px-12 py-4'>Add to cart</button>
                    <div className="divider h-[2px] block mx-auto w-[197px] mt-[-2px] bg-[#FFA07A]"></div>
                
                </div>
            </div>
            
        </section>
    );
};

export default ClassicWatch;