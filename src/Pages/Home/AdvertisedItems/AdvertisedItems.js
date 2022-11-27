import axios from 'axios';
import React, { useEffect, useState } from 'react';
import BookingModal from '../../Products/Products/BookingModal';
import Item from './Item';

const AdvertisedItems = () => {
    const [advertiseItems, setAdvertiseItems] = useState([]);
    const [productDetails, setProductDetalis] = useState('');

    const [size, setSize] = useState(5);
    const [page, setPage] = useState(0);
    const [count, setCount] = useState([]);
    // loaded only advertised items which are published for advertising
    useEffect(() => {
        axios.get(`https://rythm-bazar-server.vercel.app/products?page=${page}&size=${size}`)
            .then(data => {
                const items = data.data.products;
                const newItems = items.filter(item => (item.advertised && item.salesStatus !== 'sold'));
                setAdvertiseItems(newItems);
                setCount(data.data.count);
            })
    }, [page, size])

    // pagination functionality
    const pages = Math.ceil(count / size);

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

            {/* pagination */}
            <div className='flex justify-center gap-5 mt-10'>
                <div className="btn-group">
                    {
                        [...Array(pages).keys()].map(number =>
                            <button key={number} onClick={() => setPage(number)} className="block px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md sm:inline dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200">
                                {number + 1}
                            </button>
                        )
                    }
                </div>
                <select onChange={event => setSize(event.target.value)} className="rounded-lg border-1 md:h-auto h-10">
                    <option value="3">3</option>
                    <option value="5">5</option>
                    <option value="6" selected>6</option>
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value={count}>All</option>
                </select>
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