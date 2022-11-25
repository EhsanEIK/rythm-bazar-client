import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const AllBuyers = () => {
    const { data: allBuyers = [], refetch } = useQuery({
        queryKey: ['/users/buyers'],
        queryFn: () => fetch('http://localhost:5000/users/buyers')
            .then(res => res.json())
    })

    // handle delete buyer from db
    const handleDeleteBuyer = buyer => {
        const id = buyer._id;
        fetch(`http://localhost:5000/users/buyers/${id}`, {
            method: "DELETE",
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.success(`${buyer.name} is deleted successfully`);
                    refetch();
                }
            })
    }

    return (
        <div>
            <h1 className='text-2xl font-semibold mb-14'>Total Buyers:  {allBuyers.length}</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allBuyers.map((buyer, idx) =>
                                <tr key={buyer._id} className="hover">
                                    <th>{idx + 1}</th>
                                    <td>{buyer.name}</td>
                                    <td>{buyer.email}</td>
                                    <td>
                                        <button onClick={() => handleDeleteBuyer(buyer)} className='btn btn-sm bg-red-700 border-red-700 hover:bg-red-800'>Delete</button>
                                    </td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllBuyers;