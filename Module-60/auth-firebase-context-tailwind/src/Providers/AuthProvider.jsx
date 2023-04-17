import React from 'react';
import { createContext } from 'react';

export const authContext = createContext(null)

const AuthProvider = ({children}) => {
    const user ={displayName: 'M Emran Hasan'}
    return (
        <authContext.Provider value={user}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;