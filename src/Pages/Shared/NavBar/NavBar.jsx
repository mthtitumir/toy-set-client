import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../provider/AuthProvider';
import Swal from 'sweetalert2';

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(result => {
                Swal.fire({
                    icon: 'success',
                    title: 'Successful!',
                    text: 'Logged Out Successfully!',
                })
            })
            .then(error => {
                console.log(error);
            })
    }
    return (
        <div className='bg-sky-300'>
            <div className="navbar bg-sky-300 container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link>Home</Link></li>
                            <li><Link>All Toys</Link></li>
                            <li><Link>My Toys</Link></li>
                            <li><Link to='/add-a-toy'>Add a Toy</Link></li>
                            <li><Link to='/blogs'>Blog</Link></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl text-gray-700">ToySet</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link>Home</Link></li>
                        <li><Link to='all-toys'>All Toys</Link></li>
                        <li><Link>My Toys</Link></li>
                        <li><Link to='/add-a-toy'>Add a Toy</Link></li>
                        <li><Link to='/blogs'>Blog</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    {user ?
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img title={user.displayName ? user.displayName : 'Profile'} src={user.photoURL ? user.photoURL : 'https://i.ibb.co/Bw2LkqH/balance-bike.jpg'} />
                                </div>
                            </label>
                            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                <li>
                                    <a className="justify-between">
                                        Profile
                                        <span className="badge">New</span>
                                    </a>
                                </li>
                                <li><a>Settings</a></li>
                                <li onClick={handleLogOut}><a>Logout</a></li>
                            </ul>
                        </div>
                        :
                        <button className="btn btn-info"><Link to='/login'>Login</Link></button>
                    }
                </div>
            </div>
        </div>
    );
};

export default NavBar;