import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import darkBG from '../../assests/images/backgrounds/dark-bg.svg';
import lightBG from '../../assests/images/backgrounds/light-bg.svg';
// import CustomLink from '../Shared/CustomLink/CustomLink';

const Header = ({ children }) => {
    const darkmood = {
        width: '100vw',
        height: '100vh',
        backgroundImage: `url(${darkBG})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
    };
    const lightmood = {
        width: '100vw',
        height: '100vh',
        backgroundImage: `url(${lightBG})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
    };
    const [dark, setDark] = useState(true);
    const [menu, setMenu] = useState(false);
    const menuItems = <>
        <Link to='#' className='bg-accent text-sm hover:bg-gradient-to-r from-primary to-secondary font-Poppins hover:text-white px-3 lg:px-5 py-2.5 rounded-md mr-0 lg:mr-5'>Hello</Link>
        <Link to='#' className='bg-accent text-sm hover:bg-gradient-to-r from-primary to-secondary font-Poppins hover:text-white px-3 lg:px-5 py-2.5 rounded-md mr-0 lg:mr-5'>Hello</Link>
        <Link to='#' className='bg-accent text-sm hover:bg-gradient-to-r from-primary to-secondary font-Poppins hover:text-white px-3 lg:px-5 py-2.5 rounded-md mr-0 lg:mr-5'>Hello</Link>
    </>
    return (
        <div data-theme={dark ? "dark" : "light"} className="App overflow-y-scroll" style={dark ? darkmood : lightmood}>
            <div className='sticky top-0 z-50 navbar px-2 md:px-8 lg:px-28'>
                <div className="navbar-start">
                    <Link to='/'
                        className="btn btn-ghost normal-case text-4xl font-extrabold font-Secular tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary"><span className='font-Comforter'>A</span>bir
                    </Link>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {menuItems}
                        <label className="swap swap-rotate">
                            <input onClick={() => { setDark(!dark) }} type="checkbox" />
                            <svg className="swap-off fill-current w-10 h-10 bg-accent rounded-full p-1 hover:bg-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

                            <svg className="swap-on fill-current w-10 h-10 bg-accent rounded-full p-1 hover:bg-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>
                        </label>
                    </ul>
                </div>

                <div className="navbar-end flex justify-end lg:hidden">
                    <label className="swap swap-rotate mr-2">
                        <input className='bg-accent rounded-full' onClick={() => { setDark(!dark) }} type="checkbox" />
                        <svg className="swap-off fill-current w-12 h-12 p-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

                        <svg className="swap-on fill-current w-12 h-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>
                    </label>
                    <div className="dropdown mr-2">
                        {/* <label tabIndex={0} className="btn btn-circle bg-primary lg:hidden">
                            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                        </label> */}
                        <label tabIndex={0} className="btn btn-circle btn-primary swap swap-rotate lg:hidden">


                            <input onClick={() => { setMenu(!menu) }} type="checkbox" />


                            <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" /></svg>


                            <svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" /></svg>

                        </label>
                        {/* <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItems}
                        </ul> */}
                    </div>
                </div>

            </div>
            {children}
        </div>
    );
};

export default Header;