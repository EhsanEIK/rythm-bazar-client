import axios from 'axios';
import React, { useEffect, useState } from 'react';
import BookingModal from '../../Products/Products/BookingModal';
import Item from './Item';

const AdvertisedItems = () => {
    const [advertiseItems, setAdvertiseItems] = useState([]);

    // loaded only advertised items which are published for advertising
    useEffect(() => {
        axios.get('https://rythm-bazar-server.vercel.app/products')
            .then(data => {
                const items = data.data;
                const newItems = items.filter(item => (item.advertised && item.salesStatus !== 'sold'));
                setAdvertiseItems(newItems);
            })
    }, [])

    const [productDetails, setProductDetalis] = useState('');

    const closeBookingModal = () => {
        setProductDetalis(null);
    }

    return (
        advertiseItems.length !== 0 &&
        <section className='mt-40'>
            <h1 className='text-5xl text-center font-semibold mb-14'>Advertised Items</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 md:mx-0 mx-3'>
                {
                    advertiseItems.map(item => <Item
                        key={item._id}
                        item={item}
                        setProductDetalis={setProductDetalis}></Item>)
                }
            </div>
            {
                productDetails && <BookingModal
                    productDetails={productDetails}
                    closeBookingModal={closeBookingModal}
                    setProductDetalis={setProductDetalis}></BookingModal>
            }
        </section>
    );
};

export default AdvertisedItems;