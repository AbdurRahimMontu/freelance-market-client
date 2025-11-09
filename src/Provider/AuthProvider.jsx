import React, { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import { auth } from '../Firebase/Firebase.config';
import { createUserWithEmailAndPassword,signOut, onAuthStateChanged, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, sendPasswordResetEmail} from 'firebase/auth';

const provider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    
    const [user, setUser] = useState(null);
     const [loading, setLoading] = useState(true);
 

    const createUser=(email, password)=>{
        setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
    }

    const signOutUser=()=>{
        return signOut(auth)
    }

   const signInUser=(email, password)=>{
    return signInWithEmailAndPassword(auth, email, password)
   }

  const googleSignIn=()=>{
    return signInWithPopup(auth, provider)
  }

  const forgotPass=(email)=>{
    return sendPasswordResetEmail(auth, email)
  }
    useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser)
        setLoading(false);
        });
        return ()=>{
            unsubscribe()
        }
    },[])
 






    const userInfo = {
        user,
        setUser,
        createUser,
        signOutUser,
        loading,
        setLoading,
        signInUser,
        googleSignIn,
        forgotPass,
        

    }
    return (
        <div>
           <AuthContext value={userInfo}>
            {children}
            </AuthContext> 
        </div>
    );
};

export default AuthProvider;