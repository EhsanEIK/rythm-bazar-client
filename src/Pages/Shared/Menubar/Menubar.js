import { Button, Navbar } from 'flowbite-react';
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
        <Navbar
            fluid={true}
            rounded={true}
        >
            <Navbar.Brand href="https://flowbite.com/">
                <img
                    src={logo}
                    className="mr-3 h-6 sm:h-9"
                    alt="rythm bazar Logo"
                />
                <Link to="/" className="self-center whitespace-nowrap text-3xl font-semibold text-purple-700 dark:text-white">
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
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Menubar;