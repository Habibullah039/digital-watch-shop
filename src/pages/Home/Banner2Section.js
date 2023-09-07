import React from 'react';

const Banner2Section = ({banner}) => {

    const {sale , category , img , discount} = banner ;
    return (
        <div className='relative p-6  bg-black'>
            
           
            <img  src={img} className="md:h-[245px] h-[180px] md:w-[360px] w-[250px] border-8 border-[#303640] " alt={category} />
           
            
            <div className='absolute md:right-[70px]  left-[70px]  md:top-[70px] top-[40px] text-right'>
                <h4 className='md:text-2xl text-lg italic text-[#CCA471] font-serif mb-3 mt-2'>{sale}</h4>
                <h2 className='md:text-4xl text-xl font-medium text-white font-serif mb-3 mt-1'>{category}</h2>
                <p className='text-[#AAAAA4] md:text-2xl mb-2 mt-1 '>{discount}</p>
            </div>
        </div>
    );
};

export default Banner2Section;