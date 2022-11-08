import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import app from '../Firebase/firebase.config';


export const AuthProvider = createContext();
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

const AuthContext = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const login = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider);
    }

    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile);
    }

    const logOut = () => {
        localStorage.removeItem('genius-token');
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log(currentUser);
            setUser(currentUser);
            setLoading(false)
        })

        return () => unsubscribe();
    }, [])

    const contextInfo = {
        user,
        createUser,
        login,
        updateUserProfile,
        googleSignIn,
        logOut,

    }

    return (
        <AuthProvider.Provider value={contextInfo}>
            {children}
        </AuthProvider.Provider>
    );
};

export default AuthContext;