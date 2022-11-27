import { Navbar } from 'flowbite-react';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo/logo.jpg';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Menubar = () => {
    const { user, logout } = useContext(AuthContext);

    // handle log out for logging out a user from the website
    const handleLogout = () => {
        logout()
            .then(() => toast.success("Logout Successful"))
            .catch(err => console.error(err))
    }

    return (
        <div className='shadow-xl md:p-3'>
            <Navbar
                fluid={true}
                rounded={true}
            >
                <Navbar.Brand href="https://flowbite.com/">
                    <img
                        src={logo}
                        className="mr-3 h-6 sm:h-9"
                        alt="rythm bazar logo"
                    />
                    <Link to="/" className="self-center whitespace-nowrap text-3xl text-orange-600 font-semibold uppercase border-b-2 border-r-2 border-orange-400 rounded-md pb-1 pr-2 dark:text-white md:mb-0 mb-5">
                        Rythm Bazar
                    </Link>
                </Navbar.Brand>
                <div className="flex md:order-2">
                    {
                        user ? <>
                            <span className='text-md bg-slate-100 rounded-lg px-2 mr-3'>{user?.email}</span>
                            <button onClick={handleLogout} className='bg-red-700 text-white rounded-lg px-4 py-1 hover:bg-red-800'>
                                Log out
                            </button>
                        </>
                            :
                            <Link to='/login'>
                                <button className='bg-sky-700 text-white rounded-lg px-4 py-1 hover:bg-sky-800'>
                                    Log in
                                </button>
                            </Link>
                    }
                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse>
                    <Link to='/home'>Home</Link>
                    <Link to='/blogs'>Blogs</Link>
                    <Link to='/dashboard'>Dashboard</Link>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Menubar;