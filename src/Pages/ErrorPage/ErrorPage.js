import React from 'react';
import { Link } from 'react-router-dom';
import errorPageImage from '../../assets/errorPageImage/errorPageImage.jpg';

const ErrorPage = () => {
    return (
        <div className='flex justify-center'>
            <div>
                <Link to='/home' className='flex justify-center'>
                    <button className='btn bg-amber-600 border-amber-600 text-white rounded-xl hover:bg-amber-500 hover:border-amber-500 mt-10'>Go To Home Page</button>
                </Link>
                <img
                    src={errorPageImage}
                    alt="errorPageImage"
                    className='md:w-[1200px] md:h-[800px] w-full h-full md:mt-0 mt-5'
                />
            </div>
        </div >
    );
};

export default ErrorPage;