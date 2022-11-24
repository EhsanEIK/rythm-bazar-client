import { useQuery } from '@tanstack/react-query';
import React from 'react';

const Categories = () => {
    const { data: categories = [] } = useQuery({
        queryKey: ['categories'],
        queryFn: async function () {
            const res = await fetch('http://localhost:5000/categories');
            const data = res.json();
            return data;
        }
    })

    return (
        <div>
            <h1>All Categories {categories.length}</h1>
        </div>
    );
};

export default Categories;