import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../Firebase/Firebase.config';


export const AuthContext = createContext()

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    console.log(user, loading)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOutUser = () => {
        return signOut(auth)
    }

    useEffect(()=> {
       const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unsubscribe()
        }
    }, [])

    const userInfo = {
        user,
        setUser,
        createUser,
        signInUser,
        logOutUser,
        loading,
        setLoading,
    }

    return (
       <AuthContext value={userInfo}>
        {children}
       </AuthContext>
    );
};

export default AuthProvider;