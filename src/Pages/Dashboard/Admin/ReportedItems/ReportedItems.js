import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const ReportedItems = () => {

    // load all the reported items
    const { data: reportedItems = [], refetch } = useQuery({
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

    // handle delete reported item from db
    const handleDeleteReportedItem = item => {
        const agree = window.confirm('Are you sure to delete this product from server?');
        if (agree) {
            fetch(`http://localhost:5000/reportedItems/${item._id}`, {
                method: "DELETE",
                headers: {
                    'content-type': 'application/json',
                    authorization: `bearer ${localStorage.getItem('rythmBazarToken')}`,
                },
                body: JSON.stringify({
                    itemId: item.itemId
                })
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        toast.success('Product deleted successfully');
                        refetch();
                    }
                })
        }
    }

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
                                        <button onClick={() => handleDeleteReportedItem(item)} className='btn btn-sm bg-red-700 border-red-700 hover:bg-red-800'>Delete</button>
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