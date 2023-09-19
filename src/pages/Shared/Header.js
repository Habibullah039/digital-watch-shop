
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../images/logo.jpg'

const Header = () => {

    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth);
        localStorage.removeItem('token');

    }

    return (
        <div className="navbar bg-[#0E1D55] text-white py-5 md:px-[80px] px-[20px]">
            <div className="navbar-start ">
                <div className="dropdown">
                    <label tabindex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-[#0E1D55] rounded-box w-52">
                        <li className='mx-3  hover:text-yellow-300'><Link to="/">Home</Link></li>
                        <li className='mx-3  hover:text-yellow-300'><Link to='/shop'>Shop</Link></li>
                        <li className='mx-3  hover:text-yellow-300'><Link to='/cart'>Cart</Link></li>
                        <li className='mx-3  hover:text-yellow-300'><Link to='/contact'>Contact Us</Link></li>
                    </ul>
                </div>
                <div>
                    <img src={logo} className="h-[30px] w-[70px] md:h-[45px] md:w-[140px]"  alt="Logo" />
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal text-md font-semibold tracking-widest uppercase px-1">
                    <li className='mx-3  hover:text-yellow-300'><Link to="/">Home</Link></li>
                    <li className='mx-3  hover:text-yellow-300'><Link to='/shop'>Shop</Link></li>
                    <li className='mx-3  hover:text-yellow-300'><Link to='/cart'>Cart</Link></li>
                    <li className='mx-3  hover:text-yellow-300'><Link to='/contact'>Contact Us</Link></li>
                </ul>
            </div>
            <div className="navbar-end">





                {
                    user ?
                        <div className='flex item-center justify-between'>
                            <button className='btn btn-sm md:text-lg text-sm text-white md:mt-0 mt-3 mr-3' onClick={handleSignOut}>sign out</button>
                            <p className='text-white md:text-lg text-sm  md:mt-1 ml-2'>{user?.displayName}</p>
                        </div>

                        :

                        <button className="btn bg-[#0E1D55]">
                            <Link to='/login'>Login</Link>
                        </button>

                }


            </div>
        </div>
    );
};

export default Header;