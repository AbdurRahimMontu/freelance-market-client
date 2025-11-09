import React, { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import { auth } from '../Firebase/Firebase.config';
import { createUserWithEmailAndPassword,signOut, onAuthStateChanged} from 'firebase/auth';

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