import { Button, Navbar } from 'flowbite-react';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo/logo.jpg';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Menubar = () => {
    const { user } = useContext(AuthContext);

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
                    user && <span className='text-sm bg-slate-100 rounded-lg px-2 mr-3'>{user?.email}</span>
                }
                <Link to='/login'>
                    <Button>
                        Login
                    </Button>
                </Link>
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
                <Link to='/home'>Home</Link>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Menubar;