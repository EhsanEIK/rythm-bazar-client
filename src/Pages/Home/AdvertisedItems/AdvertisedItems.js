import axios from 'axios';
import React, { useState } from 'react';
import Item from './Item';

const AdvertisedItems = () => {
    const [advertiseItems, setAdvertiseItems] = useState([]);
    const [items, setItems] = useState([]);

    axios.get('http://localhost:5000/products')
        .then(data => {
            setItems(data.data)
            items.map(item => {
                if (item.advertised) {
                    const newItem = item;
                    setAdvertiseItems(items, newItem);
                }
            })
        })
        .catch(err => console.error(err))

    return (
        advertiseItems.length !== 0 &&
        <section className='mt-40'>
            <h1 className='text-5xl text-center font-semibold mb-14'>Advertised Items</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 md:mx-0 mx-3'>
                {
                    advertiseItems.map(item => <Item
                        key={item._id}
                        item={item}></Item>)
                }
            </div>
        </section>
    );
};

export default AdvertisedItems;