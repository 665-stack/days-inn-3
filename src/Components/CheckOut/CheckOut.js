import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import './CheckOut.css'

const CheckOut = () => {
    const [user] = useAuthState(auth);
    return (
        <div className='checkout'>
            <h2>Hello, {user.displayName ? <span>{user.displayName}</span> : "Guest"}. Welcome to Days Inn</h2>
        </div>
    );
};

export default CheckOut;