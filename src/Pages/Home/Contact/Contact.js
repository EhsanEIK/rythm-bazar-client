import React from 'react';

const Contact = () => {
    return (
        <section className="p-6 text-gray-800 mt-32">
            <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 text-gray-800">
                <form className="flex flex-col py-6 space-y-6 md:py-0 md:px-6 ng-untouched ng-pristine ng-valid">
                    <label className="block">
                        <span className="mb-1">Full name</span>
                        <input type="text" placeholder="enter your full name" className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-emerald-600 bg-gray-100" />
                    </label>
                    <label className="block">
                        <span className="mb-1">Email address</span>
                        <input type="email" placeholder="enter your email address" className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-emerald-600 bg-gray-100" />
                    </label>
                    <label className="block">
                        <span className="mb-1">Message</span>
                        <textarea rows="3" placeholder='write your message' className="block w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-emerald-600 bg-gray-100"></textarea>
                    </label>
                    <button type="button" className="w-full btn-md self-center text-lg rounded focus:ring hover:ring focus:ring-opacity-75 bg-blue-600 text-gray-50 focus:ring-blue-600 hover:ring-blue-600">Submit</button>
                </form>
                <div className="flex flex-col justify-between">
                    <div className="space-y-2">
                        <h2 className="text-4xl font-bold leading-tight lg:text-5xl">Contact Us</h2>
                    </div>
                    <img src="https://i.ibb.co/0cywztW/contact.jpg" alt="" className="object-cover w-full rounded-md xl:col-span-3 bg-gray-500" />
                </div>
            </div>
        </section>
    );
};

export default Contact;