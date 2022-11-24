import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import useUserInfo from '../../../hooks/useUserInfo';

const BookingModal = ({ productDetails, closeBookingModal }) => {
    const { user } = useContext(AuthContext);
    const [userInfo] = useUserInfo(user?.email);

    const { register, handleSubmit, formState: { errors }, } = useForm();

    return (
        <div>
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <form onSubmit={handleSubmit} className="modal-box">
                    <h3 className="font-bold text-lg">{productDetails.productName}</h3>
                    <p className="py-4">{userInfo?.name}</p>
                    <div className="form-control w-full">
                        <label className="label"><span className="label-text">Phone Number</span></label>
                        <input type="text"
                            {...register("phoneNumber", {
                                required: "Phone Number is required"
                            })}
                            className="input input-bordered w-full" />
                        {errors.phoneNumber && <p role="alert" className='text-red-600 mt-1'>{errors.phoneNumber?.message}</p>}
                    </div>
                    <div className="form-control w-full">
                        <label className="label"><span className="label-text">Meeting Location</span></label>
                        <input type="text"
                            {...register("mettingLocation", {
                                required: "Meeting Location is required"
                            })}
                            className="input input-bordered w-full" />
                        {errors.mettingLocation && <p role="alert" className='text-red-600 mt-1'>{errors.mettingLocation?.message}</p>}
                    </div>
                    <div className="modal-action">
                        <label htmlFor="booking-modal" type="submit" className="btn btn-sm bg-sky-600 border-sky-600 hover:bg-sky-700">Submit</label>
                        <label onClick={closeBookingModal} type="submit" className="btn btn-sm btn-outline">Cancel</label>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default BookingModal;