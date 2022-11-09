import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthProvider } from '../../Context/AuthContext';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthProvider);
    const location = useLocation();

    if (loading) {
        return <div className='text-center my-20'>
            <button className="btn loading text-center">loading</button>
        </div>
    }

    if (!user) {
        return <Navigate to='/login' state={{ from: location }}></Navigate>
    }

    return children;
};

export default PrivateRoute;