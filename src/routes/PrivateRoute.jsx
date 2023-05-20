import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    if (loading) {
        return <div className='flex items-center justify-center my-8'>
            <progress className="progress bg-sky-600 w-1/2 mt-10 text-center mx-auto"></progress>
        </div>;
    }
    if (user) {
        return children;
    }
    return <Navigate state={{ from: location }} to='/login'></Navigate>
};

export default PrivateRoute;