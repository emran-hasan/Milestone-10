import React, { useContext } from 'react';
import { authContext } from '../Providers/AuthProvider';

const Home = () => {
    const user = useContext(authContext)
    return (
        <div>
            <h1>This is home {user && <span className='text-purple-900'>{user.displayName}</span> }</h1>
        </div>
    );
};

export default Home;