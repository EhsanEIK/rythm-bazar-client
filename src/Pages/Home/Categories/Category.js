import React from 'react';

const Category = ({ category }) => {
    const { name, image } = category;

    return (
        <div className="card lg:w-auto md:w-96 h-48 bg-base-100 shadow-xl image-full">
            <figure><img src={image} alt={name} className="w-full" /></figure>
            <div className="card-body">
                <h2 className="text-3xl font-bold">{name}</h2>
                <div className="card-actions justify-end">
                    <button className='btn bg-teal-700 hover:bg-teal-800 px-4 py-1 '>See Products</button>
                </div>
            </div>
        </div>
    );
};

export default Category;