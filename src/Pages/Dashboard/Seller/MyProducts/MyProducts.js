import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../../contexts/AuthProvider/AuthProvider';

const MyProducts = () => {
    const { user } = useContext(AuthContext);
    const email = user?.email;

    const { data: myProducts = [], refetch } = useQuery({
        queryKey: ['/products/:email', email],
        queryFn: async function () {
            const res = await fetch(`http://localhost:5000/products/?email=${email}`);
            const data = await res.json();
            return data;
        }
    })

    // handle advertise item to permit the product advertised in the website
    const handleAdvertisItem = product => {
        fetch(`http://localhost:5000/products/${product._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${localStorage.getItem('rythmBazarToken')}`,
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Product has been published in the website successfully!');
                    refetch();
                }
            })
    }

    // handle delete product from db
    const handleDeleteProduct = product => {
        fetch(`http://localhost:5000/products/${product._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('rythmBazarToken')}`,
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.success(`${product.productName}} has been deleted successfully!`);
                    refetch();
                }
            })
    }

    return (
        <div>
            <h1 className='text-2xl font-semibold mb-14'>My Products: {myProducts.length}</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Image</th>
                            <th>Title</th>
                            <th>Reslae Price</th>
                            <th>Original Price</th>
                            <th>Sales Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myProducts.map((product, idx) =>
                                <tr key={product._id} className="hover">
                                    <th>{idx + 1}</th>
                                    <td>
                                        <img src={product.image}
                                            alt={product.productName}
                                            className="w-20 rounded-xl" />
                                    </td>
                                    <td>{product.productName}</td>
                                    <td>{product.resalePrice}</td>
                                    <td>{product.origianlPrice}</td>
                                    <td>
                                        {
                                            product.salesStatus === 'sold' ?
                                                <span className='text-red-600 font-semibold'>{product.salesStatus}</span>
                                                :
                                                <span className='text-green-600 font-semibold'>{product.salesStatus}</span>
                                        }
                                    </td>
                                    <td>
                                        {
                                            (product.salesStatus === 'available' && !product.advertised) &&
                                            <button onClick={() => handleAdvertisItem(product)} className='btn btn-sm bg-green-700 border-green-700 hover:bg-green-800 mr-5'>Advertise Now</button>
                                        }
                                        <button onClick={() => handleDeleteProduct(product)} className='btn btn-sm bg-red-700 border-red-700 hover:bg-red-800'>Delete</button>
                                    </td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default MyProducts;