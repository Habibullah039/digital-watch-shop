import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import time from '../../images/time.jpg'

const Time = () => {
    const [days, setDays] = useState(0);
    const [hours, setHours] =useState(0);
    const [minutes, setMinutes] =useState(0);
    const [seconds, setSeconds] =useState(0);
  
    const deadline = "May,26 , 2023";
  
    const getTime = () => {
      const time = Date.parse(deadline) - Date.now();    
  
      setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
      setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
      setMinutes(Math.floor((time / 1000 / 60) % 60));
      setSeconds(Math.floor((time / 1000) % 60));
    };
  
    useEffect(() => {
      const interval = setInterval(() => getTime(deadline), 1000);
  
      return () => clearInterval(interval);
    }, []);

  return (
    <div style={{ background: `url(${time})`, backgroundPosition: "center", backgroundSize: "cover" , backgroundAttachment:"fixed" }} className='h-[500px]'>

        <h2 className='text-center text-4xl text-white capitalize font-serif font-normal pt-[100px]'>new arrival comming soon</h2>
        <div className="divider h-[4px] block mx-auto w-2/5 mt-[-2px] bg-[#FFA07A]"></div>

        <div className="flex justify-center pb-[150px] gap-5  mt-[60px] auto-cols-max">

            <div className="flex flex-col p-2 text-neutral-content">
                <div className='font-semibold py-5 px-10 text-center rounded-box  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
                    <p className='text-4xl mb-4'>{days < 10 ? "0" + days : days}</p>
                    <span className='text-2xl'>Days</span>
                </div>
            </div>

            <div className="flex flex-col p-2 text-neutral-content">
                <div className='font-semibold py-5 px-10 text-center rounded-box bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
                    <p className='text-4xl mb-4'>{hours < 10 ? "0" + hours : hours}</p>
                    <span className='text-2xl'>Hrs</span>
                </div>
            </div>


            <div className="flex flex-col p-2 text-neutral-content">
                <div className='font-semibold py-5 px-10 text-center rounded-box bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
                    <p className='text-4xl mb-4'>{minutes < 10 ? "0" + minutes : minutes}</p>
                    <span className='text-2xl'>Mins</span>
                </div>
            </div>


            <div className="flex flex-col p-2 text-neutral-content">
                <div className='font-semibold py-5 px-10 text-center rounded-box bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
                    <p className='text-4xl mb-4'> {seconds < 10 ? "0" + seconds : seconds}</p>
                    <span className='text-2xl'>Secs</span>
                </div>
            </div>


        </div>

    </div>
  );
};

export default Time;