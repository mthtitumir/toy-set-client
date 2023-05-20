import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { InfinitySpin } from 'react-loader-spinner';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    if (loading) {
        return <div className='flex items-center justify-center my-8'>
            <InfinitySpin
                width='200'
                color="#4fa94d"
            />
        </div>;
    }
    if (user) {
        return children;
    }
    return <Navigate state={{ from: location }} to='/login'></Navigate>
};

export default PrivateRoute;