import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Products = () => {
    const products = useLoaderData();

    return (
        <div>
            <h1 className='text-5xl text-center font-semibold mb-14'>All Products {products.length}</h1>
        </div>
    );
};

export default Products;