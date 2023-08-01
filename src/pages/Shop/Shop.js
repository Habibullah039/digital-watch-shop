import React from 'react';
import '../Home/Store.css'
import { useState } from 'react';
import useClassicProducts from '../../hooks/useClassicProducts';
import ClassicWatch from '../Home/ClassicWatch';
import ModernWatch from '../Home/ModernWatch';
import useModernProducts from '../../hooks/useModernProducts';
import useSpecialProducts from '../../hooks/useSpecialProducts';
import SpecialWatch from '../Home/SpecialWatch';

const Shop = () => {

    const [classicProducts] = useClassicProducts([]);
    const [modernProducts] = useModernProducts([]);
    const [specialProducts] = useSpecialProducts([])
    

    const [state, setState] = useState(1);

    const toggleTab = (index) => {
        setState(index);
    }


    return (
        <div className='bg-black pt-[30px] pb-[130px]'>
        
            <div className="tabs justify-center my-[80px] ">
                <div onClick={() => toggleTab(1)} className={`tab tab-bordered ${state !== 1 ? 'null' : 'tab-active'} text-white text-xl font-serif font-medium`}>Classic</div>
                <div onClick={() => toggleTab(2)} className={`tab tab-bordered ${state !== 2 ? 'null' : 'tab-active'}  text-white text-xl font-serif font-medium`}>Modern</div>
                <div onClick={() => toggleTab(3)} className={`tab tab-bordered ${state !== 3 ? 'null' : 'tab-active'}  text-white text-xl font-serif font-medium`}>New Edition</div>
            </div>
            <div className='flex justify-between items-center'>
                <div className={`tab-active ${state !== 1 ? 'hidden' : 'block'} grid grid-cols-2 lg:grid-cols-4 gap-10  px-[105px]`}>

                    {
                        classicProducts?.map(classicProduct => <ClassicWatch
                            key={classicProduct._id}
                            classicProduct={classicProduct}
                        ></ClassicWatch>)
                    }
                </div>
                <div className={`tab-active ${state !== 2 ? 'hidden' : 'block'} grid grid-cols-2 lg:grid-cols-4 gap-10   px-[105px]`}>

                    {
                        modernProducts?.map(modernProduct => <ModernWatch
                            key={modernProduct._id}
                            modernProduct={modernProduct}
                        ></ModernWatch>)
                    }
                </div>
                <div className={`tab-active ${state !== 3 ? 'hidden' : 'block'} grid grid-cols-2 lg:grid-cols-4 gap-10 px-[105px]`}>

                    {
                        specialProducts?.map(specialProduct => <SpecialWatch
                            key={specialProduct._id}
                            specialProduct={specialProduct}
                        ></SpecialWatch>)
                    }

                </div>
            </div>
        </div>
    );
};

export default Shop;