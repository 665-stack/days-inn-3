import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';


const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth)
    }
    return (
        <header className='flex justify-center md:justify-between items-center bg-black sm:px-12 md:px-20 py-5'>
            <Link className='uppercase text-slate-50 text-xl hidden md:block' to='/'>Days Inn</Link>

            <nav className='flex text-slate-50 hover:text-slate-200 text-lg'>

                <Link className='mr-2 sm:mr-6' to="/">Home</Link>

                <Link className='mr-2 sm:mr-6 hidden sm:block' to="/about-us">About Us</Link>

                <Link className='mr-2 sm:mr-6' to="/rooms">Rooms</Link>

                <Link className='mr-2 sm:mr-6 hidden sm:block' to="/contact">Contact</Link>
                {
                    user ?
                        <button className='logout-btn' onClick={handleSignOut}>Log Out</button>
                        :
                        <Link className='mr-2 sm:mr-6' to="/login">Login</Link>
                }
                {
                    !user && <Link className='mr-2 sm:mr-6' to="/register">Register</Link>
                }


            </nav>
        </header>
    );
};

export default Header;