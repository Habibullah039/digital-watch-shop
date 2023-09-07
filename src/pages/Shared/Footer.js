import React from 'react';
import { Link } from 'react-router-dom';
import footer from '../../images/footer.jpg'

const Footer = () => {
    const toDay = new Date();
    const year = toDay.getFullYear();
    return (
        <div>
            <div style={{ background: `url(${footer})`, backgroundPosition: "center", backgroundSize: "cover" }} className='grid grid-cols-1 lg:grid-cols-3 md:px-[50px] px-[10px]   md:gap-10 text-white md:h-[320px]'>
                <div className=' pl-[90px] '>
                    <p className='text-3xl font-serif font-normal  mt-[50px] mb-5'>Help</p>
                    <ul className='text-lg'>
                        <li className='my-2'>
                            <Link>Search</Link>
                        </li>
                        <li className='my-2'>
                            <Link>Help</Link>
                        </li>
                        <li className='my-2'>
                            <Link>Information</Link>
                        </li>
                        <li className='my-2'>
                            <Link>Privacy Policy</Link>
                        </li>
                        <li className='my-2'>
                            <Link>Shopping Details</Link>
                        </li>
                    </ul>
                </div>

                <div className=' pl-[90px]'>

                    <p className='text-3xl font-serif font-normal  mt-[50px] mb-5'>Support</p>
                    <ul className='text-lg'>
                        <li className='my-2'>
                            <Link>Contact us</Link>
                        </li>
                        <li className='my-2'>
                            <Link>About us</Link>
                        </li>
                        <li className='my-2'>
                            <Link>Careers</Link>
                        </li>
                        <li className='my-2'>
                            <Link>Refunds & Returns</Link>
                        </li>
                        <li className='my-2'>
                            <Link>Deliveries</Link>
                        </li>
                    </ul>

                </div>

                <div className=' pl-[90px]'>
                    <p className='text-3xl font-serif font-normal mt-[50px] mb-5'>Information</p>
                    <ul className='text-lg'>
                        <li className='my-2'>
                            <Link>Search Terms</Link>
                        </li>
                        <li className='my-2'>
                            <Link>Advanced Search</Link>
                        </li>
                        <li className='my-2'>
                            <Link>Help & Faq's</Link>
                        </li>
                        <li className='my-2'>
                            <Link>Store Location</Link>
                        </li>
                        <li className='my-2'>
                            <Link>Orders & Returns</Link>
                        </li>
                    </ul>
                </div>

            </div>

            <p className='text-center py-5 text-white text-2xl font-semibold bg-[#0E1D55]'> <small> Copyright @ {year} </small> </p>
        </div>
    );
};

export default Footer;