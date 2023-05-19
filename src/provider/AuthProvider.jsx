import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, getAuth, onAuthStateChanged } from "firebase/auth";
import app from '../firebase/firebase.init'

export const AuthContext = createContext(null);
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, loggedUser =>{
            console.log('user in on auth', loggedUser);
            setUser(loggedUser);

        })
        return () => unsubscribe();
    }, [])
    const authInfo = {
        user,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;