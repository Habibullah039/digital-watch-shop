import React from 'react';
import banner from '../../images/banner.jpg'

const Banner = () => {
    return (
        <div style={{ background: `url(${banner})`}} className='h-[700px] bg-cover bg-right-bottom'>
            <div className='text-white md:pt-[135px] pt-[70px] md:pl-[165px] pl-[50px]  md:w-3/5 w-4/5 '>
                <h1 className='md:text-7xl text-3xl font-serif'>Alertzy</h1>
                <div className="divider h-1 md:w-64 w-28 mt-[-8px] bg-[#FFA07A]"></div>
                <h6 className='text-xl mt-5 mb-[40px] text-[#CCA471]'>Exclusive Offer -20% Off This Week</h6>
                <p className='md:leading-loose text-lg text-[#AAAAA4] mb-8 md:mr-[50px]'>Expanding the offering is the choice between a leather strap or a metal bracelet, bringing the total new look.Black-tone stainless steel case with a black rubber strap.Scratch free sapphire crystal.</p>

                <div className='flex  items-center mb-[50px]'>
                    <p className='text-[#AAAAA4] md:text-xl '>Starting @</p>
                    <h3 className='text-[#CCA471] md:text-6xl text-xl md:ml-6'>$ 250.00 </h3>
                </div>

                <button className='bg-[#303640] md:w-1/3 w-2/3  py-[13px]  uppercase md:text-md font-medium'>Explore Services</button>
                <div className="divider h-1 md:w-1/3 w-2/3 mt-[-2px] bg-[#FFA07A]"></div>
            </div>

        </div>
    );
};

export default Banner;