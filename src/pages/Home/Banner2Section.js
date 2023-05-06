import React from 'react';

const Banner2Section = ({banner}) => {

    const {sale , category , img , discount} = banner ;
    return (
        <div className='relative p-6  bg-black'>
            
           
            <img  src={img} className="h-[245px] w-[360px] border-8 border-[#303640] " alt={category} />
           
            
            <div className='absolute right-[70px] top-[70px] text-right'>
                <h4 className='text-2xl italic text-[#CCA471] font-serif mb-3 mt-2'>{sale}</h4>
                <h2 className='text-4xl font-medium text-white font-serif mb-3 mt-1'>{category}</h2>
                <p className='text-[#AAAAA4] text-2xl mb-2 mt-1 '>{discount}</p>
            </div>
        </div>
    );
};

export default Banner2Section;