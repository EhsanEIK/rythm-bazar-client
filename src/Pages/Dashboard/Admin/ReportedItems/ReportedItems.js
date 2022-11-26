import { useQuery } from '@tanstack/react-query';
import React from 'react';

const ReportedItems = () => {
    const { data: reportedItems = [] } = useQuery({
        queryKey: ['reportedItems'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/reportedItems', {
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
            <h1 className='text-2xl font-semibold mb-14'>Reported Items</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Item Name</th>
                            <th>Buyer Email</th>
                            <th>Seller Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            reportedItems.map((item, idx) =>
                                <tr key={item._id} className="hover">
                                    <th>{idx + 1}</th>
                                    <td>{item.itemName}</td>
                                    <td>{item.buyerEmail}</td>
                                    <td>{item.sellerEmail}</td>
                                    <td>
                                        <button className='btn btn-sm bg-red-700 border-red-700 hover:bg-red-800'>Delete</button>
                                    </td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ReportedItems;