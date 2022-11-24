import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState('');

    // register
    const register = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // login
    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    // logout
    const logout = () => {
        return signOut(auth);
    }

    // get the signed in user
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
        })

        return () => unsubscribe();
    }, [])

    const authInfo = {
        user,
        register,
        login,
        logout,
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;