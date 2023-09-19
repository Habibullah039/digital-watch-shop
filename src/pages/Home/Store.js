import React from 'react';
import './Store.css'
import { useState } from 'react';
import ClassicWatch from './ClassicWatch';
import { Link } from 'react-router-dom';
import { ArrowLongRightIcon } from '@heroicons/react/24/solid';
import ModernWatch from './ModernWatch';
import SpecialWatch from './SpecialWatch';
import useClassicProducts from '../../hooks/useClassicProducts';
import useModernProducts from '../../hooks/useModernProducts';
import useSpecialProducts from '../../hooks/useSpecialProducts';



const Store = () => {


    const [classicProducts] = useClassicProducts([]);
    const [modernProducts] = useModernProducts([]);
    const [specialProducts] = useSpecialProducts([]);





    const [state, setState] = useState(1);

    const toggleTab = (index) => {
        setState(index);
    }








    return (
        <div className='bg-black pt-[30px] pb-[130px]'>
            <h2 className='text-center md:text-5xl text-xl text-white mt-[80px]  font-serif'>Popular In Store</h2>
            <div className="divider h-1 md:w-96 w-44 mx-auto mt-[-8px] bg-[#FFA07A]"></div>


            <div className="tabs justify-center my-[60px] ">
                <div onClick={() => toggleTab(1)} className={`tab tab-bordered ${state !== 1 ? 'null' : 'tab-active'} text-white md:text-xl text-md font-serif font-medium`}>Classic</div>
                <div onClick={() => toggleTab(2)} className={`tab tab-bordered ${state !== 2 ? 'null' : 'tab-active'} text-white md:text-xl text-md font-serif font-medium`}>Modern</div>
                <div onClick={() => toggleTab(3)} className={`tab tab-bordered ${state !== 3 ? 'null' : 'tab-active'} text-white md:text-xl text-md font-serif font-medium`}>New Edition</div>
            </div>
            <div className='flex justify-between items-center mb-[100px]'>
                <div className={`tab-active ${state !== 1 ? 'hidden' : 'block'} grid grid-cols-2 lg:grid-cols-4 gap-10 md:px-[105px] px-[20px] `}>

                    {
                        classicProducts?.slice(0,4).map(classicProduct => <ClassicWatch
                            key={classicProduct._id}
                            classicProduct={classicProduct}
                        ></ClassicWatch>)
                    }
                </div>
                <div className={`tab-active ${state !== 2 ? 'hidden' : 'block'} grid grid-cols-2 lg:grid-cols-4 gap-10 md:px-[105px] px-[20px]`}>

                    {
                        modernProducts?.slice(0,4).map(modernProduct => <ModernWatch
                            key={modernProduct._id}
                            modernProduct={modernProduct}
                        ></ModernWatch>)
                    }
                </div>
                <div className={`tab-active ${state !== 3 ? 'hidden' : 'block'} grid grid-cols-2 lg:grid-cols-4 gap-10 md:px-[105px] px-[20px]`}>

                    {
                        specialProducts?.slice(0,4).map(specialProduct => <SpecialWatch
                            key={specialProduct._id}
                            specialProduct={specialProduct}
                        ></SpecialWatch>)
                    }

                </div>
            </div>


            <Link to='/shop'>


                <button className='flex bg-[#4E4E53] items-center uppercase text-md text-white font-semibold block mx-auto px-12 py-4'>
                    <span> Goes Shopping </span>
                    <ArrowLongRightIcon className='h-10 w-8 ml-3' />
                </button>

                <div className="divider h-[2px] block mx-auto w-[263px] mt-[-2px] bg-[#FFA07A]"></div>

            </Link>


        </div>
    );
};

export default Store;