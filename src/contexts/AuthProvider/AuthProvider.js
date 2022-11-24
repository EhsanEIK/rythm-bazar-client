import React, { createContext } from 'react';
import app from '../../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    // register
    const register = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const authInfo = {
        register,
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;