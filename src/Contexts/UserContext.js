import React, { createContext, useEffect, useState } from 'react';
import {GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth';
import app from '../Firebase/firebase.config';

export const AuthContext = createContext();

const auth = getAuth(app);

const UserContext = ({children}) => {

    const googleProvider = new GoogleAuthProvider();
    // const gitHubProvider = new GithubAuthProvider();
    
    const [user, setUser] = useState({displayName: 'Faysal'});
    
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    };

    // const signInWithGitHub = () => {
    //     return signInWithPopup(auth, gitHubProvider)
    // };

    const logOut = () => {
        return signOut(auth);
    };
    
    useEffect(() => {
        const unsubscribe =  onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
        })

        return () => {
            unsubscribe();
        }

    }, [])

    const authInfo = { user, createUser, signIn, logOut, signInWithGoogle };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext; 