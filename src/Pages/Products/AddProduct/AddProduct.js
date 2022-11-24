import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import useUserInfo from '../../../hooks/useUserInfo';

const AddProducts = () => {
    const { user } = useContext(AuthContext);
    const [userInfo] = useUserInfo(user?.email);

    const { register, handleSubmit, formState: { errors }, } = useForm();

    const handleAddProduct = data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);

        fetch(`https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_ImgBB_API_Key}`, {
            method: "POST",
            body: formData,
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    const imageURL = data.data.url;
                }
            })
        // const product = {
        //     productName: data.productName,
        //     resalePrice: data.resalePrice,
        //     origianlPrice: data.originalPrice,
        //     yearsOfUse:data.yearsOfUse,
        // }
    }

    return (
        <div className='my-10'>
            <h1 className='text-5xl text-center font-semibold mb-8'>Add New Product</h1>
            <div className='flex justify-center'>
                <form onSubmit={handleSubmit(handleAddProduct)}>
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
                            {...register("origianlPrice", {
                                required: "Origianl Price is required"
                            })}
                            className="input input-bordered w-full" />
                        {errors.origianlPrice && <p role="alert" className='text-red-600 mt-1'>{errors.origianlPrice?.message}</p>}
                    </div>
                    <div className="form-control w-full">
                        <label className="label"><span className="label-text">Years of Use</span></label>
                        <input type="text"
                            {...register("yearsOfUser", {
                                required: "Years of use is required"
                            })}
                            className="input input-bordered w-full" />
                        {errors.yearsOfUser && <p role="alert" className='text-red-600 mt-1'>{errors.yearsOfUser?.message}</p>}
                    </div>
                    <div className="form-control w-full mt-5">
                        <input type="file"
                            {...register("image", {
                                required: "Image is required"
                            })}
                            accept='image/*' className="file-input file-input-sm file-input-bordered w-full" />
                        {errors.image && <p role="alert" className='text-red-600 mt-1'>{errors.image?.message}</p>}
                    </div>
                    <button className="btn btn-md bg-teal-700 hover:bg-teal-800 text-white border-teal-700 w-full mt-5">Add Product</button>
                </form>
            </div>
        </div>
    );
};

export default AddProducts;