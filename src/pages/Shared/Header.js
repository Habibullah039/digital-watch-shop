import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.jpg'

const Header = () => {
    return (
        <div className="navbar bg-[#0E1D55]   text-white px-[40px]">
            <div className="navbar-start ">
                <div className="dropdown">
                    <label tabindex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-[#0E1D55] rounded-box w-52">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link>Shop</Link></li>
                        <li><Link to='about'>About</Link></li>
                        <li><Link>Contact Us</Link></li>
                    </ul>
                </div>
                <div>
                    <img src={logo} alt="Logo" />
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal text-md font-semibold tracking-widest uppercase px-1">
                    <li className='mx-3  hover:text-yellow-300'><Link to="/">Home</Link></li>
                    <li className='mx-3  hover:text-yellow-300'><Link>Shop</Link></li>
                    <li className='mx-3  hover:text-yellow-300'><Link to='about'>About</Link></li>
                    <li className='mx-3  hover:text-yellow-300'><Link>Contact Us</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                <button className="btn bg-[#0E1D55]">
                    <Link>Login</Link>
                </button>
            </div>
        </div>
    );
};

export default Header;