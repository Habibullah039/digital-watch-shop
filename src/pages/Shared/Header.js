
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
        <div className="navbar bg-[#0E1D55]   text-white px-[40px]">
            <div className="navbar-start ">
                <div className="dropdown">
                    <label tabindex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-[#0E1D55] rounded-box w-52">
                        <li className='mx-3  hover:text-yellow-300'><Link to="/">Home</Link></li>
                        <li className='mx-3  hover:text-yellow-300'><Link to='/shop'>Shop</Link></li>
                        <li className='mx-3  hover:text-yellow-300'><Link to='/checkout'>Check Out</Link></li>
                        <li className='mx-3  hover:text-yellow-300'><Link to='/contact'>Contact Us</Link></li>
                    </ul>
                </div>
                <div>
                    <img src={logo} alt="Logo" />
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal text-md font-semibold tracking-widest uppercase px-1">
                    <li className='mx-3  hover:text-yellow-300'><Link to="/">Home</Link></li>
                    <li className='mx-3  hover:text-yellow-300'><Link to='/shop'>Shop</Link></li>
                    <li className='mx-3  hover:text-yellow-300'><Link to='/checkout'>Check Out</Link></li>
                    <li className='mx-3  hover:text-yellow-300'><Link to='/contact'>Contact Us</Link></li>
                </ul>
            </div>
            <div className="navbar-end">





                {
                    user ?
                        <div className='flex item-center justify-between'>
                            <button className='btn  text-white' onClick={handleSignOut}>sign out</button>
                            <p className='text-white mt-3 ml-2'>{user?.displayName}</p>
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