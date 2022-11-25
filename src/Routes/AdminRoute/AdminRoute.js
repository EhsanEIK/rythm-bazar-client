import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useAdmin from '../../hooks/useAdmin';
import Loader from '../../Pages/Shared/Loader/Loader';

const AdminRoute = ({ children }) => {
    const { user, loading, logout } = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = useAdmin(user?.email)

    const location = useLocation();

    if (loading || isAdminLoading) {
        return <Loader></Loader>;
    }

    if (user?.email && isAdmin) {
        return children;
    }
    logout()
        .then(() => toast.success('unauthorized access'))
        .catch(err => console.error(err))
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;