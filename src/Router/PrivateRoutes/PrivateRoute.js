import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthProvider } from '../../Context/AuthContext';

const PrivateRoute = ({children}) => {
    const {user} = useContext(AuthProvider);


    if(!user) {
        return <Navigate to='/'></Navigate>
    }

    return children;
};

export default PrivateRoute;