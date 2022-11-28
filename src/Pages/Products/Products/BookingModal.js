import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import useUserInfo from '../../../hooks/useUserInfo';

const BookingModal = ({ productDetails, closeBookingModal, setProductDetalis }) => {
    const { user } = useContext(AuthContext);
    const [userInfo] = useUserInfo(user?.email);

    const { _id, image, email, productName, resalePrice, location, phoneNumber } = productDetails;

    const { register, handleSubmit, formState: { errors }, } = useForm();

    // handle booking order and saved the order into the db
    const handleBookOrder = data => {
        const order = {
            productId: _id,
            productName,
            price: resalePrice,
            sellerLocation: location,
            sellerEmail: email,
            sellerPhoneNumber: phoneNumber,
            image,
            buyerName: userInfo.name,
            buyerEmail: userInfo.email,
            buyerPhoneNumber: data.phoneNumber,
            meetingLocation: data.mettingLocation,
        }
        fetch('https://rythm-bazar-server.vercel.app/orders', {
            method: "POST",
            headers: {
                'content-type': 'application/json',
                headers: {
                    authorization: `bearer ${localStorage.getItem('rythmBazarToken')}`,
                }
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success("Order is booked");
                    setProductDetalis(null);
                }
            })
    }

    return (
        <div>
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <form onSubmit={handleSubmit(handleBookOrder)} className="modal-box">
                    <h3 className="font-bold text-lg">{productName}</h3>
                    <div className="form-control w-full">
                        <label className="label"><span className="label-text">Buyer Name</span></label>
                        <input type="text" className="input input-bordered w-full" value={userInfo?.name} disabled />
                    </div>
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
                        <button htmlFor="booking-modal" type="submit" className="btn btn-sm bg-sky-600 border-sky-600 hover:bg-sky-700">Submit</button>
                        <label onClick={closeBookingModal} className="btn btn-sm btn-outline">Cancel</label>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default BookingModal;