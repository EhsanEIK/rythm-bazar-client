import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { useNavigation } from 'react-router-dom';
import Loader from '../../Shared/Loader/Loader';
import Category from './Category';

const Categories = () => {
    // const [categories, setCategories] = useState([])
    // useEffect(() => {
    //     fetch('http://localhost:5000/categories')
    //         .then(res => res.json())
    //         .then(data => setCategories(data));
    // }, [])
    const { data: categories = [] } = useQuery({
        queryKey: ['categories'],
        queryFn: async function () {
            const res = await fetch('http://localhost:5000/categories');
            const data = res.json();
            return data;
        }
    })

    const navigation = useNavigation();

    if (navigation.state === "loading") {
        return <Loader></Loader>
    }

    return (
        <section className='mt-40 mb-10'>
            < h1 className='text-5xl text-center font-semibold mb-14' > All Categories</h1 >
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 md:mx-0 mx-3'>
                {
                    categories.map(category => <Category
                        key={category._id}
                        category={category}></Category>)
                }
            </div>
        </section >
    );
};

export default Categories;