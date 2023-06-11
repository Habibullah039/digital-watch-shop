import React from 'react';
import bgWatch from '../../images/bgWatch.jpg'

const NewsLetter = () => {
    return (
        <div style={{ background: `url(${bgWatch})`, backgroundPosition: "center", backgroundSize: "cover" }} className='h-[500px]'>
          
          <h2 className='text-center text-5xl pt-[80px] capitalize text-white pb-1 font-serif'>newsletter</h2>
          <div className="divider h-1 w-96 mx-auto mb-0 mt-[-11px]  bg-[#FFA07A]"></div>

          <form className='mt-[70px] flex justify-center items-center'>
            
            <input type="email" className='w-96 py-[15px] pl-3 bg-[#000000] border-[1px] border-[#343535] text-white' placeholder="Enter Your Email" />
            <div>
              <input type="Submit" className='bg-[#4E4E53] uppercase text-yellow-50 text-md font-semibold block  px-12 py-4 mt-4 cursor-pointer' value="Subscribe" />
              <div className="divider h-[2px] block mx-auto w-[177px] mt-[-2px] bg-[#FFA07A]"></div>
            </div>

          </form>

          <p className='text-center text-[#AAAA9A] font-normal text-lg mt-3'>Will be used in accordance with our Privacy policy</p>


      
        </div>
    );
};

export default NewsLetter;