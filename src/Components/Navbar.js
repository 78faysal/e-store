import React from 'react';
import logo from '../Photos/E_Store_logo.png';

const Navbar = (props) => {
    const cartItems = props.cartData;
    console.log(cartItems);
    return (
        <div>
            <div className="navbar bg-base-100 fixed z-10 max-sm:px-5 px-10 mx-auto top-0 shadow">
                <div className="flex-1">
                    <img className='h-16' src={logo} alt="" />
                </div>
                <div className="flex-none">
                    <div className="flex-none max-sm:hidden">
                        <ul className="menu menu-horizontal px-1">
                            <li><a to='/'>Home</a></li>
                            <li><a to='/products'>Products</a></li>
                            <li><a>Contact Us</a></li>
                            <li tabIndex="0">
                                <a to='/categories'>
                                    Categories
                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                                </a>
                                <ul className="p-2 bg-base-100">
                                    <li><a to='/categories/'>Submenu 1</a></li>
                                    <li><a to='/categories/'>Submenu 2</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className="dropdown dropdown-end">
                        <label tabIndex="0" className="btn btn-ghost btn-circle">
                            <div className="indicator">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                <span className="badge badge-sm indicator-item">8</span>
                            </div>
                        </label>
                        <div tabIndex="0" className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
                            <div className="card-body">
                                <span className="font-bold text-lg">8 Items</span>
                                <span className="text-info">Subtotal: $999</span>
                                <div className="card-actions">
                                    <button className="btn btn-primary btn-block">View cart</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="dropdown dropdown-end ms-2 lg:hidden">
                        <label tabIndex="0" className="btn btn-ghost btn-circle">
                            <div className="w-10">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                            </div>
                        </label>
                        <ul f="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;