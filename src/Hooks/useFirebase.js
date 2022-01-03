import firebaseInit from '../Firebase/firebase.init';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile } from 'firebase/auth'
import { useEffect, useState } from 'react';

// firebase init 
firebaseInit()
const useFirebase = () => {
    const [user, setUser] = useState({})
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(true)

    // get auth 
    const auth = getAuth()

    // register user 
    const registerUser = (email, password, name, navigate) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then(userCredential => {
                setError('')
                const newUser = { email, displayName: name }
                setUser(newUser)
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => { })
                    .catch((error) => { setError(error.message) })
                navigate('/')
            }).catch(error => {
                setError(error.message)
            }).finally(() => setIsLoading(false))
    }


    // state changed 
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser({})
            }
            setIsLoading(false)
        })
        return () => unSubscribe;
    }, [auth])

    // log out 
    const logOut = () => {
        setIsLoading(true)
        signOut(auth).then(() => { })
            .catch(error => { })
            .finally(() => setIsLoading(false))
    }

    return {
        user,
        error,
        isLoading,
        registerUser,
        logOut
    }


};

export default useFirebase;