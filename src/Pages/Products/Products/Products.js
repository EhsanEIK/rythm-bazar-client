import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from './BookingModal';
import Product from './Product';

const Products = () => {
    const products = useLoaderData([]);
    const [productDetails, setProductDetalis] = useState('');

    const closeBookingModal = () => {
        setProductDetalis(null);
    }

    return (
        <div className='my-10'>
            <h1 className='text-5xl text-center font-semibold mb-14'>All Products {products.length}</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5'>
                {
                    products.map(product =>
                        product.salesStatus !== 'sold' ?
                            <Product
                                key={product._id}
                                product={product}
                                setProductDetalis={setProductDetalis}></Product>
                            :
                            <p className='col-span-3 text-red-600 text-2xl text-center'>
                                There is no product available right now!</p>
                    )
                }
            </div>
            {
                productDetails && <BookingModal
                    productDetails={productDetails}
                    closeBookingModal={closeBookingModal}
                    setProductDetalis={setProductDetalis}></BookingModal>
            }
        </div>
    );
};

export default Products;