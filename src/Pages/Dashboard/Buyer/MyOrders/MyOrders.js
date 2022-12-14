import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../contexts/AuthProvider/AuthProvider';

const MyOrders = () => {
    const { user } = useContext(AuthContext);
    const [orders, setOrders] = useState([]);

    // loaded orders based on buyer email
    useEffect(() => {
        axios.get(`https://rythm-bazar-server.vercel.app/orders/${user?.email}`, {
            headers: {
                authorization: `bearer ${localStorage.getItem('rythmBazarToken')}`,
            }
        })
            .then(data => setOrders(data.data));
    }, [user?.email])

    return (
        <div>
            <h1 className='text-2xl font-semibold mb-14'>Your Total Order:  {orders.length}</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Image</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Seller Email</th>
                            <th>Seller Phone</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, idx) =>
                                <tr key={order._id} className="hover">
                                    <th>{idx + 1}</th>
                                    <td>
                                        <img src={order.image}
                                            alt={order.productName}
                                            className="w-20 rounded-xl" />
                                    </td>
                                    <td>{order.productName}</td>
                                    <td>${order.price}</td>
                                    <td>{order.sellerEmail}</td>
                                    <td>{order.sellerPhoneNumber}</td>
                                    <td>
                                        {
                                            order.paid ?
                                                <span className='text-green-600 font-semibold text-sm'>Paid</span>
                                                : <Link to={`/dashboard/payment/${order._id}`}>
                                                    <button className='btn btn-sm bg-blue-600 border-blue-600 hover:bg-blue-700 text-white'>Payment</button>
                                                </Link>
                                        }
                                    </td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;