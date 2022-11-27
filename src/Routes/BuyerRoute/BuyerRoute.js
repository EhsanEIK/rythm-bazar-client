import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useBuyer from '../../hooks/useBuyer';
import Loader from '../../Pages/Shared/Loader/Loader';

const BuyerRoute = ({ children }) => {
    const { user, loading, logout } = useContext(AuthContext);
    const [isBuyer, isBuyerLoading] = useBuyer(user?.email)

    const location = useLocation();

    if (loading || isBuyerLoading) {
        return <Loader></Loader>;
    }

    if ((user?.email || user?.displayName) && isBuyer) {
        return children;
    }
    logout()
        .then(() => toast.success('unauthorized access'))
        .catch(err => console.error(err))
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>;
};

export default BuyerRoute;