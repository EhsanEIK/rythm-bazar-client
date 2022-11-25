import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../../contexts/AuthProvider/AuthProvider';
import useUserInfo from '../../../../hooks/useUserInfo';

const AddProducts = () => {
    const { user } = useContext(AuthContext);
    const [userInfo] = useUserInfo(user?.email);

    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors }, } = useForm();

    const { data: categories = [] } = useQuery({
        queryKey: ['categories'],
        queryFn: async function () {
            const res = await fetch('http://localhost:5000/categories');
            const data = res.json();
            return data;
        }
    })

    // handle add product to the database
    const handleAddProduct = (data, event) => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);

        // save the image into the imgbb site
        fetch(`https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_ImgBB_API_Key}`, {
            method: "POST",
            body: formData,
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    const date = new Date();
                    const imageURL = imgData.data.url;
                    const product = {
                        sellerName: userInfo.name,
                        email: user?.email,
                        productName: data.productName,
                        resalePrice: data.resalePrice,
                        origianlPrice: data.originalPrice,
                        yearsOfUse: data.yearsOfUse,
                        description: data.description,
                        location: data.location,
                        phoneNumber: data.phoneNumber,
                        condition: data.condition,
                        category: data.category,
                        image: imageURL,
                        date: date + '',
                        salesStatus: 'available'
                    }

                    // save the product details into the database
                    fetch('http://localhost:5000/products', {
                        method: "POST",
                        headers: {
                            'content-type': 'application/json',
                            authorization: `bearer ${localStorage.getItem('rythmBazarToken')}`,
                        },
                        body: JSON.stringify(product)
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.acknowledged) {
                                toast.success('Product added successfully');
                                navigate('/dashboard/seller/myProducts');
                                event.target.reset();
                            }
                        })
                }
            })
    }

    return (
        <div className='my-10'>
            <h1 className='text-5xl text-center font-semibold mb-5'>Add New Product</h1>
            <div className='flex justify-center'>
                <form onSubmit={handleSubmit(handleAddProduct)}
                    className="border-1 rounded-sm shadow-lg p-10 w-[400px]">
                    <div className="form-control w-full">
                        <label className="label"><span className="label-text">Product Name</span></label>
                        <input type="text"
                            {...register("productName", {
                                required: "Product Name is required"
                            })}
                            className="input input-bordered w-full" />
                        {errors.productName && <p role="alert" className='text-red-600 mt-1'>{errors.productName?.message}</p>}
                    </div>
                    <div className="form-control w-full">
                        <label className="label"><span className="label-text">Resale Price</span></label>
                        <input type="text"
                            {...register("resalePrice", {
                                required: "Resale Price is required"
                            })}
                            className="input input-bordered w-full" />
                        {errors.resalePrice && <p role="alert" className='text-red-600 mt-1'>{errors.resalePrice?.message}</p>}
                    </div>
                    <div className="form-control w-full">
                        <label className="label"><span className="label-text">Origianl Price</span></label>
                        <input type="text"
                            {...register("originalPrice", {
                                required: "Origianl Price is required"
                            })}
                            className="input input-bordered w-full" />
                        {errors.originalPrice && <p role="alert" className='text-red-600 mt-1'>{errors.originalPrice?.message}</p>}
                    </div>
                    <div className="form-control w-full">
                        <label className="label"><span className="label-text">Years of Use</span></label>
                        <input type="text"
                            {...register("yearsOfUse", {
                                required: "Years of use is required"
                            })}
                            className="input input-bordered w-full" />
                        {errors.yearsOfUse && <p role="alert" className='text-red-600 mt-1'>{errors.yearsOfUse?.message}</p>}
                    </div>
                    <div className="form-control w-full">
                        <label className="label"><span className="label-text">Product Description</span></label>
                        <textarea
                            {...register("description")}
                            className="textarea textarea-bordered"></textarea>
                        {errors.description && <p role="alert" className='text-red-600 mt-1'>{errors.description?.message}</p>}
                    </div>
                    <div className="form-control w-full">
                        <label className="label"><span className="label-text">Select Product Condition</span></label>
                        <select {...register("condition", {
                            required: "Please select product condition"
                        })} className="select select-bordered w-full">
                            <option>--- SELECT ---</option>
                            <option value="Excellent">Excellent</option>
                            <option value="Good">Good</option>
                            <option value="Fair">Fair</option>
                            {errors.condition && <p role="alert" className='text-red-600 mt-1'>{errors.condition?.message}</p>}
                        </select>
                    </div>
                    <div className="form-control w-full">
                        <label className="label"><span className="label-text">Select Category</span></label>
                        <select {...register("category", {
                            required: "Please select a category"
                        })} className="select select-bordered w-full">
                            <option>--- SELECT ---</option>
                            {
                                categories.map(category =>
                                    <option
                                        key={category._id}
                                        value={category._id}>{category.name}</option>)
                            }
                            {errors.category && <p role="alert" className='text-red-600 mt-1'>{errors.category?.message}</p>}
                        </select>
                    </div>
                    <div className="form-control w-full">
                        <label className="label"><span className="label-text">Phone Number</span></label>
                        <input type="text"
                            {...register("phoneNumber", {
                                required: "Phone Number is required",
                            })}
                            className="input input-bordered w-full" />
                        {errors.phoneNumber && <p role="alert" className='text-red-600 mt-1'>{errors.phoneNumber?.message}</p>}
                    </div>
                    <div className="form-control w-full">
                        <label className="label"><span className="label-text">Location</span></label>
                        <input type="text"
                            {...register("location", {
                                required: "Location is required"
                            })}
                            className="input input-bordered w-full" />
                        {errors.location && <p role="alert" className='text-red-600 mt-1'>{errors.location?.message}</p>}
                    </div>
                    <div className="form-control w-full mt-5">
                        <input type="file"
                            {...register("image", {
                                required: "Image is required"
                            })}
                            accept='image/*' className="file-input file-input-md file-input-bordered w-full" />
                        {errors.image && <p role="alert" className='text-red-600 mt-1'>{errors.image?.message}</p>}
                    </div>
                    <button className="btn btn-md bg-teal-700 hover:bg-teal-800 text-white border-teal-700 w-full mt-5">Add Product</button>
                </form>
            </div>
        </div>
    );
};

export default AddProducts;