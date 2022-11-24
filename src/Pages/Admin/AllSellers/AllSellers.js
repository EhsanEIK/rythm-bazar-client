import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllSellers = () => {
    const { data: allSellers = [] } = useQuery({
        queryKey: ['/users/sellers'],
        queryFn: () => fetch('http://localhost:5000/users/sellers')
            .then(res => res.json())
    })

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
                                                <span>Verified</span>
                                                : <button className='btn btn-sm bg-green-700 border-green-700 hover:bg-green-800'>Verified Now</button>
                                        }
                                    </td>
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

export default AllSellers;