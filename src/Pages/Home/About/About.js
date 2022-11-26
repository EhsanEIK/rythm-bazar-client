import React from 'react';

const About = () => {
    return (
        <section className="bg-gray-100 text-gray-800 rounded-xl mt-32">
            <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                    <img src="https://i.ibb.co/ZNfwz9Q/aboutBg.jpg" alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                </div>
                <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                    <h1 className="text-5xl font-bold leading-none sm:text-6xl">About Us
                    </h1>
                    <p className="mt-6 mb-8 text-lg sm:mb-12">
                        The<span className='text-3xl text-orange-600 font-semibold mx-2'>Rythm Bazar</span>is a website of buying and selling second-hand musical instruments. Buyer can buy his desired instrument and Seller can sell their instrument in a reasonable price. Musical instrument, any device for producing a musical sound. The principal types of such instruments, classified by the method of producing sound, are percussion, stringed, keyboard, wind, and electronic.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;