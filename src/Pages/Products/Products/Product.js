import React from 'react';
import useUserInfo from '../../../hooks/useUserInfo';
import { FaCheckCircle } from "react-icons/fa";

const Product = ({ product, setProductDetalis }) => {
    const { image, sellerName, email, productName, resalePrice, origianlPrice, yearsOfUse, date, location, phoneNumber, condition } = product;

    const [userInfo] = useUserInfo(email);

    return (
        <div>
            <div className="rounded-md shadow-md sm:w-96 bg-gray-50 text-gray-800">
                <div className="flex items-center justify-between p-3">
                    <div className="flex items-center space-x-2">
                        <div className="-space-y-1">
                            <h2 className="text-sm font-semibold leading-none flex"><b className='mr-2'>Seller Name:</b> {sellerName}
                                {
                                    userInfo.verified && <FaCheckCircle
                                        className='text-blue-500 text-md ml-2'
                                        title='Verified User' />
                                }
                            </h2>
                            <span className="inline-block text-xs leading-none text-gray-600"><b>Location:</b> {location}</span>
                            <span className="inline-block text-xs leading-none text-gray-600 mt-2"><b>Post Time:</b> {date}</span>
                        </div>
                    </div>
                    <button className='btn bg-red-700 border-red-700 hover:bg-red-800 btn-sm'>Report to Admin</button>
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
                            <label onClick={() => setProductDetalis(product)} htmlFor="booking-modal" className='btn bg-teal-700 w-full mt-5'>Book Now</label>
                            : <span className='text-red-600 text-center'>Seller is not verified yet</span>
                    }
                </div>
            </div>
        </div>
    );
};

export default Product;