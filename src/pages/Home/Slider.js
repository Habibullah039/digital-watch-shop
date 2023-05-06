import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import imageSlider from '../../data';
const Slider = () => {
    const [currentState, setCurrentState] = useState(0);

    const goToNext = (currentState) => {
        setCurrentState(currentState) ;
    }

    useEffect(()=> {
        const timer = setTimeout(() => {

            if(currentState===2) {
                setCurrentState(0)
            }
            else {
                setCurrentState(currentState+1)
            }

        } , 3000)

        return () => clearTimeout(timer)

    } , [currentState])

    return (
        <div>
            <div style={{ background: `url(${imageSlider[currentState].image})`, backgroundPosition: "center left", backgroundSize: "cover" }} className='h-[700px]'></div>
            <div className='text-white absolute z-[999] left-[160px] top-[200px] w-3/6'>
                <h1 className='text-7xl font-serif'>{imageSlider[currentState].title}</h1>
                <div className="divider h-1 w-64 mt-[-8px] bg-[#FFA07A]"></div>
                <h6 className='text-xl mt-5 mb-[40px] text-[#CCA471]'>{imageSlider[currentState].offer}</h6>
                <p className='leading-8 text-lg text-[#AAAAA4] mb-8 mr-[50px]'>{imageSlider[currentState].description}</p>

                <div className='flex  items-center mb-[50px]'>
                    <p className='text-[#AAAAA4] text-xl '>Starting @</p>
                    <h3 className='text-[#CCA471] text-6xl ml-6'>{imageSlider[currentState].price} </h3>
                </div>

                <button className='bg-[#303640] w-1/3 py-[13px]  uppercase text-md font-medium'>Explore Services</button>
                <div className="divider h-1 w-1/3 mt-[-2px] bg-[#FFA07A]"></div>

                <div className='flex  items-center ml-10'>
                    
                    {
                        imageSlider.map((imageSlider, currentState) =><span

                            key={currentState} onClick={() => goToNext(currentState)}
                            className='h-[6px] w-[20px] ml-5 mt-5 rounded bg-[#AAAAA4]'
                        ></span>)
                    }

                </div>
            </div>



        </div>
    );
};

export default Slider;