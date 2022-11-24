import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Register = () => {
    const { register: signUp } = useContext(AuthContext);

    const { register, handleSubmit, formState: { errors }, } = useForm();

    const [errorMsg, setErrorMsg] = useState('');

    const navigate = useNavigate();

    const handleRegister = data => {
        const email = data.email;
        const password = data.password;
        const name = data.userName;
        const userRole = data.userRole;
        signUp(email, password)
            .then(result => {
                toast.success("Registration Successful");
                navigate('/');
            })
            .catch(err => setErrorMsg(err.message))
        console.log(data)
    }

    return (
        <div className='flex justify-center'>
            <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-gray-50 text-gray-800">
                <h1 className="text-2xl font-bold text-center">Create A New Account</h1>
                <form onSubmit={handleSubmit(handleRegister)} className="space-y-6 ng-untouched ng-pristine ng-valid">
                    <div className="space-y-1 text-sm">
                        <label htmlFor="userName" className="block text-gray-600">User Name</label>
                        <input type="text"
                            {...register("userName", {
                                required: "User Name is required"
                            })}
                            placeholder="Username" className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-red-600" />
                        {errors.userName && <p role="alert" className='text-red-600 mt-1'>{errors.userName?.message}</p>}
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="email" className="block text-gray-600">Email</label>
                        <input type="email"
                            {...register("email", {
                                required: "Email is required"
                            })}
                            placeholder="email" className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-red-600" />
                        {errors.email && <p role="alert" className='text-red-600 mt-1'>{errors.email?.message}</p>}
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="password" className="block text-gray-600">Password</label>
                        <input type="password"
                            {...register("password", {
                                required: "Password is required"
                            })}
                            placeholder="Password" className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-red-600" />
                        {errors.password && <p role="alert" className='text-red-600 mt-1'>{errors.password?.message}</p>}
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="password" className="block text-gray-600 text-center">User Role</label>
                        <div className='flex justify-evenly'>
                            <div>
                                <input type="radio" id="buyer"
                                    {...register("userRole")} value="Buyer" checked />
                                <label htmlFor="buyer" className='ml-2'>Buyer</label>
                            </div>
                            <div>
                                <input type="radio" id="seller"
                                    {...register("userRole")} value="Seller" />
                                <label htmlFor="seller" className='ml-2'>Seller</label>
                            </div>
                        </div>
                    </div>
                    <button className="block w-full p-3 text-center rounded-sm text-gray-50 bg-red-600">Register</button>
                    {
                        errorMsg && <p className='text-red-600 text-md text-center my-3'>{errorMsg}</p>
                    }
                </form>
                <p className="text-xs text-center sm:px-6 text-gray-600">Already have an account?
                    <Link to='/' className="underline text-gray-800 ml-2">Log in</Link>
                </p>
            </div >
        </div >
    );
};

export default Register;