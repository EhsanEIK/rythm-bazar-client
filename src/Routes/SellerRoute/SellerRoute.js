import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useSeller from '../../hooks/useSeller';
import Loader from '../../Pages/Shared/Loader/Loader';

const SellerRoute = ({ children }) => {
    const { user, loading, logout } = useContext(AuthContext);
    const [isSeller, isSellerLoading] = useSeller(user?.email)

    const location = useLocation();

    if (loading || isSellerLoading) {
        return <Loader></Loader>;
    }

    if (user?.email && isSeller) {
        return children;
    }
    logout()
        .then(() => toast.success('unauthorized access'))
        .catch(err => console.error(err))
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>;
};

export default SellerRoute;