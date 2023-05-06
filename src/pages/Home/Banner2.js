import React from 'react';
import banner3 from '../../images/banner3.jpg' ;
import banner2 from '../../images/banner2.jpg' ;
import banner4 from '../../images/banner4.jpg' ;
import Banner2Section from './Banner2Section';

const Banner2 = () => {

    const banners = [
        {
            _id : 1 ,
            img: banner3 ,
            sale :"Flash Sale" ,
            category:"Men's Watch" ,
            discount:"25% Discount"
        }
        ,
        {
            _id : 2 ,
            img: banner2 ,
            sale :"Flash Sale" ,
            category:"Women's Watch" ,
            discount:"40% Discount"
        }
        ,
        {
            _id : 3 ,
            img: banner4 ,
            sale :"Flash Sale" ,
            category:"Couple's Watch" ,
            discount:"30% Discount"
        }
    ] ;
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 px-10 gap-8 bg-[#030D1D]'>
            {
                banners.map(banner => <Banner2Section 
                    
                    key={banner._id}
                    banner={banner}
                ></Banner2Section> )
            }
        </div>
    );
};

export default Banner2;