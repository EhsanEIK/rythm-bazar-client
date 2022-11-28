import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import useUserInfo from '../../../hooks/useUserInfo';

const Dashboard = () => {
    const { user } = useContext(AuthContext);
    const [userInfo] = useUserInfo(user?.email);

    return (
        <div>
            <h1 className='text-3xl font-semibold mb-10'>Welcome To Dashboard</h1>
            <h3 className='text-2xl font-semibold mb-3'>Your Info</h3>
            <p><b className='mr-2'>Name:</b>{userInfo.name}</p>
            <p><b className='mr-3'>Email:</b>{userInfo.email}</p>
            <p><b className='mr-5'>Role:</b>{userInfo?.userRole?.toUpperCase()}</p>
        </div>
    );
};

export default Dashboard;