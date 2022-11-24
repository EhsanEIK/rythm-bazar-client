import React from 'react';
import useUserInfo from '../../../hooks/useUserInfo';
import { FaCheckCircle } from "react-icons/fa";

const Product = ({ product }) => {
    const { _id, image, sellerName, email, productName, resalePrice, origianlPrice, yearsOfUse, date, location, phoneNumber, condition } = product;

    const [userInfo] = useUserInfo(email);

    return (
        <div>
            <div className="rounded-md shadow-md sm:w-96 bg-gray-50 text-gray-800">
                <div className="flex items-center justify-between p-3">
                    <div className="flex items-center space-x-2">
                        <div className="-space-y-1">
                            <h2 className="text-sm font-semibold leading-none"><b>Seller Name:</b> {sellerName}</h2>
                            <span className="inline-block text-xs leading-none text-gray-600"><b>Location:</b> {location}</span>
                            <span className="inline-block text-xs leading-none text-gray-600 mt-2"><b>Post Time:</b> {date}</span>
                        </div>
                    </div>
                    {
                        userInfo.verified && <FaCheckCircle
                            className='text-blue-500 text-3xl'
                            title='Verified User' />
                    }
                    <button type="button" title="Bookmark post" className="flex items-center justify-center ml-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
                            <path d="M424,496H388.75L256.008,381.19,123.467,496H88V16H424ZM120,48V456.667l135.992-117.8L392,456.5V48Z"></path>
                        </svg>
                    </button>
                </div>
                <img src={image} alt="" className="object-cover object-center w-full h-72 bg-gray-500" />
                <div className="p-3">
                    <p className='text-lg'><b>Product Name:</b> {productName}</p>
                    <p className='text-lg'><b>Condition:</b> {condition}</p>
                    <p className='text-lg'><b>Resale Price:</b> ${resalePrice}</p>
                    <p className='text-lg'><b>Origianl Price:</b> ${origianlPrice}</p>
                    <p className='text-lg'><b>Used (in year):</b> {yearsOfUse}</p>
                    <p className='text-lg'><b>Phone:</b> {phoneNumber}</p>
                    {
                        userInfo.verified ?
                            <label htmlFor="my-modal" className='btn bg-teal-700 w-full mt-5'>Book Now</label>
                            : <span className='text-red-600 text-center'>User is not verified yet</span>
                    }
                </div>
            </div>
        </div>
    );
};

export default Product;