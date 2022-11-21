import React, { useContext } from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';
import AuthProvider from '../../../contexts/AuthProvider';

const DisplayError = () => {
    const { logOut } = useContext(AuthProvider)
    const error = useRouteError()
    const navigate = useNavigate()
    const handleLogOut = () => {
        logOut()
            .then(() => { 
                navigate('/login')
            })
            .catch(e => console.error(e))
    }
    return (
        <div>
            <p className='text-3xl text-red-500'>SomeThing Went wrong!!!!</p>
            <p className='text-2xl text-red-500'>{error.statusText || error.message}</p>
            <h3 className="text-3xl">Please <button onClick={handleLogOut}>Sign Out</button> and log in again</h3>
        </div>
    );
};

export default DisplayError;