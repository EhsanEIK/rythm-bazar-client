import axios from 'axios';
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
            <h1 className='text-5xl text-center font-semibold mb-14'>All Products</h1>

            {
                products.length === 0 ?
                    <p className='col-span-3 text-red-600 text-2xl text-center'>
                        There is no product available right now!</p>
                    :
                    <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5'>
                        {
                            products.map(product =>
                                (product.advertised && product.salesStatus !== 'sold') &&
                                <Product
                                    key={product._id}
                                    product={product}
                                    setProductDetalis={setProductDetalis}></Product>
                            )
                        }
                    </div>

            }
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