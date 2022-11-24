import React from 'react';

const Loader = () => {
    return (
        <div className='flex justify-center my-10'>
            <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-emerald-600"></div>
        </div>
    );
};

export default Loader;