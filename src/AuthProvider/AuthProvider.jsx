import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../Firebase/Firebase.config';


export const AuthContext = createContext()

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const provider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider()

    const signInWithGoogle = () => {
        return signInWithPopup(auth, provider)
    }

    const signInWithGithub = () => {
        return signInWithPopup(auth, githubProvider)
    }

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const updateUserProfile = (updatedProfile) => {
        return updateProfile(auth.currentUser, updatedProfile)
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
        signInWithGoogle,
        signInWithGithub,
        createUser,
        signInUser,
        updateUserProfile,
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