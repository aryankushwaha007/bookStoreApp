import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Login from './Login';
import { useAuth } from '../context/AuthContext.jsx';

const Navbar = () => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light');
    const element = document.documentElement;
    useEffect(() => {
        if (theme === 'dark') {
            element.classList.add('dark');
            localStorage.setItem('theme', 'dark');
            document.body.classList.add('dark');
        } else {
            element.classList.remove('dark');
            localStorage.setItem('theme', 'light');
            document.body.classList.remove('dark');
        }
        // Ensure daisyUI switches theme variables as well
        element.setAttribute('data-theme', theme);
    }, [theme]);

    const [sticky, setSticky] = useState(false);
    const { user, logout } = useAuth();
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setSticky(true);
            } else {
                setSticky(false);
            }
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    const navitems = (<>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/course">Course</Link>
        </li>
        <li>
            <Link to="/contact">Contact</Link>
        </li>
        <li>
            <Link to="/about">About</Link>
        </li>

    </>)

    return (
        <>
            <div className={`max-w-screen-2xl container mx-auto md:px-20 px-4 dark:bg-slate-900 z-50 dark:text-white fixed top-0 right-0 left-0 ${sticky ? "sticky-navbar shadow-md bg-base-200 duration-300 dark:bg-slate-600 dark:text-white transition-all ease-in-out" : ""}`}>
                <div className="navbar bg-base-100 shadow-sm">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                            </div>
                            <ul
                                tabIndex="-1"
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                {navitems}

                            </ul>
                        </div>
                        <Link to="/" className=" text-2xl font-bold cursor-pointer">BookStore</Link>
                    </div>
                    <div className='navbar-end'>


                        <div className="navbar-center hidden lg:flex">
                            <ul className="menu menu-horizontal px-1">
                                {navitems}
                            </ul>
                        </div>
                        <div className='hidden md:block mr-3'>
                            <label className="input outline-none">
                                <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <g
                                        strokeLinejoin="round"
                                        strokeLinecap="round"
                                        strokeWidth="2.5"
                                        fill="none"
                                        stroke="currentColor"
                                    >
                                        <circle cx="11" cy="11" r="8"></circle>
                                        <path d="m21 21-4.3-4.3"></path>
                                    </g>
                                </svg>
                                <input type="search" required placeholder="Search" />
                            </label>
                        </div>
                        <label className="flex cursor-pointer gap-3 m-3">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round">
                                <circle cx="12" cy="12" r="5" />
                                <path
                                    d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                            </svg>
                            <input
                                type="checkbox"
                                className="toggle"
                                checked={theme === 'dark'}
                                onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
                            />
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
                                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                            </svg>
                        </label>
                        <div className="">
                            {user ? (
                                <div className="flex items-center gap-3">
                                    <span className="text-sm opacity-80">Hi, {user.name.split(' ')[0]}</span>
                                    <button onClick={logout} className="bg-red-500 text-white px-3 py-2 rounded-md hover:bg-red-600 duration-300 cursor-pointer">Logout</button>
                                </div>
                            ) : (
                                <>
                                    <a className="bg-black text-white px-3 py-2 rounded-md hover:bg-slate-800 duration-300 cursor-pointer" onClick={() => document.getElementById("my_modal_3").showModal()}>LogIn</a>
                                    <Login></Login>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar