import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';

const RequireAuth = ({children}) => {

    const [user, loading, error] = useAuthState(auth);
    const location = useLocation() ;


    if (error) {
    
        return <p className='text-[red]'>{error?.message}</p>

    }


    if (loading) {


        return <button className="btn loading"> Loading</button>

    }


    if(!user) {

       return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
       

    }

    

    return children ;
};

export default RequireAuth;