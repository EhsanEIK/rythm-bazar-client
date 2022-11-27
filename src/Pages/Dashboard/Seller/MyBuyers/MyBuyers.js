import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../../contexts/AuthProvider/AuthProvider';

const MyBuyers = () => {
    const { user } = useContext(AuthContext);

    // loaded all the  buyers/booked orders of this seller which are sold//booked
    const { data: myBuyers = [] } = useQuery({
        queryKey: ['orders'],
        queryFn: async function () {
            const res = await fetch(`https://rythm-bazar-server.vercel.app/orders?email=${user?.email}`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('rythmBazarToken')}`,
                }
            });
            const data = await res.json();
            return data;
        }
    })

    return (
        <div>
            <h1 className='text-2xl font-semibold mb-14'>Your Buyers List</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product Name</th>
                            <th>Buyer Name</th>
                            <th>Buyer Email</th>
                            <th>Buyer Phone</th>
                            <th>Payment Status</th>
                            <th>Transaction Id</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myBuyers.map((buyer, idx) =>
                                <tr key={buyer._id} className="hover">
                                    <th>{idx + 1}</th>
                                    <td>{buyer.productName}</td>
                                    <td>{buyer.buyerName}</td>
                                    <td>{buyer.buyerEmail}</td>
                                    <td>{buyer.buyerPhoneNumber}</td>
                                    <td>
                                        {
                                            buyer.paid ? <span className='text-green-500 font-semibold'>Paid</span>
                                                : <span className='text-green-500 font-semibold'>Unpaid</span>
                                        }
                                    </td>
                                    <td>
                                        {
                                            buyer.transactionId ? <span className='text-green-500 font-semibold'>{buyer.transactionId}</span>
                                                : <span className='text-green-500 font-semibold'>Not yet sold</span>
                                        }
                                    </td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default MyBuyers;