import React from 'react';
import Watch1 from '../../images/Watch1.jpg';
import Watch2 from '../../images/Watch2.jpg';

const Blog = () => {
    return (
        <div className='bg-[#030D1D]'>
            <h2 className='text-center md:text-5xl text-3xl pt-[80px] capitalize text-white pb-1 font-serif'>recent blog</h2>
            <div className="divider h-1 md:w-96 w-44 mx-auto mb-0 mt-[-11px]  bg-[#FFA07A]"></div>


            <div className='flex justify-center  mt-[100px] '>

                <div className='mx-5'>
                    <img src={Watch2} alt="" className='md:h-[350px] h-[200px]  md:w-[520px] w-[300px]' />
                    <p className='text-[#9D9E9F] text-lg my-5 capitalize font-semibold text-center'>july 5, 2019</p>
                    <h4 className='text-center md:text-3xl text-lg text-yellow-50  font-medium font-serif'>Gentlemen always prefer watch </h4>
                    <button className='bg-[#4E4E53] uppercase  text-yellow-50 md:text-md text-sm font-semibold block mx-auto mt-5 md:px-12 px-6 md:py-4 py-3'>Add to cart</button>
                    <div className="divider h-[2px] block mx-auto md:w-[185px] w-[137px] mt-[-2px] bg-[#FFA07A]"></div>
                </div>

                <div className='mx-5'>
                    <p className='text-[#9D9E9F] text-lg my-5 capitalize font-semibold text-center'>july 5, 2019</p>
                    <h4 className='text-center md:text-3xl text-lg text-yellow-50 font-medium font-serif'>measure watch quality using weight</h4>
                    <button className='bg-[#4E4E53] uppercase text-yellow-50 md:text-md text-sm font-semibold block mx-auto mt-5 md:px-12 px-6 md:py-4 py-3'>Add to cart</button>
                    <div className="divider h-[2px] block mx-auto md:w-[185px] w-[137px] mt-[-2px] bg-[#FFA07A]"></div>
                    <img src={Watch1} alt="" className='md:h-[350px] h-[200px] md:w-[520px] w-[300px] mt-8' />

                </div>

            </div>
        </div>
    );
};

export default Blog;