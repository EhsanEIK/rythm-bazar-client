import { Button, Navbar } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo/logo.jpg';

const Menubar = () => {
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
                <Button>
                    Login
                </Button>
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
                <Link to='/home'>Home</Link>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Menubar;