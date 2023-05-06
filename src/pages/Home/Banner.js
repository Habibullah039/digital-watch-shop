import React from 'react';
import banner from '../../images/banner.jpg'

const Banner = () => {
    return (
        <div style={{ background: `url(${banner})`, backgroundPosition: "center", backgroundSize: "cover" }} className='h-[700px]'>
            <div className='text-white pt-[135px] pl-[165px] w-3/5'>
                <h1 className='text-7xl font-serif'>Alertzy</h1>
                <div className="divider h-1 w-64 mt-[-8px] bg-[#FFA07A]"></div>
                <h6 className='text-xl mt-5 mb-[40px] text-[#CCA471]'>Exclusive Offer -20% Off This Week</h6>
                <p className='leading-loose text-lg text-[#AAAAA4] mb-8 mr-[50px]'>Expanding the offering is the choice between a leather strap or a metal bracelet, bringing the total new look.Black-tone stainless steel case with a black rubber strap.Scratch free sapphire crystal.</p>

                <div className='flex  items-center mb-[50px]'>
                    <p className='text-[#AAAAA4] text-xl '>Starting @</p>
                    <h3 className='text-[#CCA471] text-6xl ml-6'>$ 250.00 </h3>
                </div>

                <button className='bg-[#303640] w-1/3 py-[13px]  uppercase text-md font-medium'>Explore Services</button>
                <div className="divider h-1 w-1/3 mt-[-2px] bg-[#FFA07A]"></div>
            </div>

        </div>
    );
};

export default Banner;