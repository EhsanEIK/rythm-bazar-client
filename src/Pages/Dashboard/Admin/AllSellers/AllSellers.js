import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const AllSellers = () => {
    const { data: allSellers = [], refetch } = useQuery({
        queryKey: ['/users/sellers'],
        queryFn: () => fetch('http://localhost:5000/users/sellers')
            .then(res => res.json())
    })

    // handle seller verification
    const handleSellerVerification = seller => {
        const id = seller._id;
        fetch(`http://localhost:5000/users/sellers/${id}`, {
            method: "PUT",
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success(`${seller.name} is verified now`);
                    refetch();
                }
            })
    }

    // handle delete seller from db
    const handleDeleteSeller = seller => {
        const id = seller._id;
        fetch(`http://localhost:5000/users/sellers/${id}`, {
            method: "DELETE",
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.success(`${seller.name} is deleted successfully`);
                    refetch();
                }
            })
    }

    return (
        <div>
            <h1 className='text-2xl font-semibold mb-14'>Total Sellers:  {allSellers.length}</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Verification</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allSellers.map((seller, idx) =>
                                <tr key={seller._id} className="hover">
                                    <th>{idx + 1}</th>
                                    <td>{seller.name}</td>
                                    <td>{seller.email}</td>
                                    <td>
                                        {
                                            seller?.verified ?
                                                <span className='text-green-500 font-semibold'>Verified</span>
                                                : <button onClick={() => handleSellerVerification(seller)} className='btn btn-sm bg-green-700 border-green-700 hover:bg-green-800'>Verified Now</button>
                                        }
                                    </td>
                                    <td>
                                        <button onClick={() => handleDeleteSeller(seller)} className='btn btn-sm bg-red-700 border-red-700 hover:bg-red-800'>Delete</button>
                                    </td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllSellers;