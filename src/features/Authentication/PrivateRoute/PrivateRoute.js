import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useFirebase from '../../../Hooks/useFirebase';

const PrivateRoute = ({ children }) => {
    const location = useLocation()
    const { user, isLoading } = useFirebase()
    if (isLoading) {
        return <div>
            <h2 className='text-4xl text-red-500 text-center font-medium py-30'>Loading...</h2>
        </div>
    }
    if (user.email) {
        return children
    }
    return <Navigate to={'/login'} state={{ from: location }} />
};

export default PrivateRoute;