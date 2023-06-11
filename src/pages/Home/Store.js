import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ClassicWatch from './ClassicWatch';
import ModernWatch from './ModernWatch';



const Store = () => {

    const [classicProducts, setClassicProducts] = useState([]);
    const [modernProducts, setModernProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/classicWatch')
            .then(res => res.json())
            .then(data => setClassicProducts(data))
    }, [])


    useEffect(() => {
        fetch('modernProduct.json')
            .then(res => res.json())
            .then(data => setModernProducts(data))
    }, [])




    const [state, setState] = useState(1);

    const toggleTab = (index) => {
        setState(index);
    }


    return (
        <div className='bg-black pt-[30px] pb-[400px]'>
            <h2 className='text-center text-5xl text-white mt-[80px] font-serif'>Popular In Store</h2>
            <div className="divider h-1 w-96 mx-auto mt-[-8px] bg-[#FFA07A]"></div>
            <div className="tabs justify-center ">
                <div onClick={() => toggleTab(1)} className={`tab tab-bordered ${state !== 1 ? 'null' : 'tab-active'} text-white text-xl font-serif font-medium`}>Classic</div>
                <div onClick={() => toggleTab(2)} className={`tab tab-bordered ${state !== 2 ? 'null' : 'tab-active'}  text-white text-xl font-serif font-medium`}>Modern</div>
                <div onClick={() => toggleTab(3)} className={`tab tab-bordered ${state !== 3 ? 'null' : 'tab-active'}  text-white text-xl font-serif font-medium`}>New Edition</div>
            </div>
            <div className='flex justify-between items-center'>
                <div className={`tab-active ${state !== 1 ? 'hidden' : 'block'} grid grid-cols-2 lg:grid-cols-4 gap-10 px-[105px]`}>

                    {
                        classicProducts?.map(classicProduct => <ClassicWatch
                            key={classicProduct._id}
                            classicProduct={classicProduct}
                        ></ClassicWatch>)
                    }
                </div>
                <div className={`tab-active ${state !== 2 ? 'hidden' : 'block'} grid grid-cols-2 lg:grid-cols-4 gap-10 px-[105px]`}>

                    {
                        modernProducts?.map(modernProduct => <ModernWatch
                            key={modernProduct._id}
                        modernProduct={modernProduct}
                        ></ModernWatch>)
                    }
                </div>
                <div className={`tab-active ${state !== 3 ? 'hidden' : 'block'} grid grid-cols-2 lg:grid-cols-4 gap-10 px-[105px]`}>

                    {
                        modernProducts?.map(modernProduct => <ModernWatch
                            key={modernProduct._id}
                        modernProduct={modernProduct}
                        ></ModernWatch>)
                    }

                </div>
            </div>
        </div>
    );
};

export default Store;