import firebaseInit from '../Firebase/firebase.init';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { useEffect, useState } from 'react';

// firebase init 
firebaseInit()
const useFirebase = () => {
    const [user, setUser] = useState({})
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(true)

    // get auth 
    const auth = getAuth()
    const googleProvider = new GoogleAuthProvider()

    // register user 
    const registerUser = (email, password, name, navigate) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then(userCredential => {
                setError('')
                const newUser = { email, displayName: name }
                setUser(newUser)
                // save user to database
                saveUser(email, name, "POST")
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => { })
                    .catch((error) => { setError(error.message) })
                navigate('/')
            }).catch(error => {
                setError(error.message)
            }).finally(() => setIsLoading(false))
    }

    // login user
    const loginUser = (email, password, location, navigate) => {
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then(userCredential => {
                const destination = location?.state?.from || '/'
                navigate(destination)
                setError('')
            }).catch(error => {
                setError(error.message)
            }).finally(() => setIsLoading(false))

    }

    // google login
    const signInWithGoogle = (location, navigate) => {
        setIsLoading(true)
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user;
                //save user to database
                saveUser(user.email, user.displayName, 'PUT')
                setError('')
                const destination = location?.state?.from || '/';
                navigate(destination)
            }).catch(error => { setError(error.message) })
            .finally(() => setIsLoading(false))
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

    // save user to database
    const saveUser = (email, displayName, method) => {
        const user = { email, displayName }
        fetch('http://localhost:5000/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        }).then(() => { })
    }

    return {
        user,
        error,
        isLoading,
        loginUser,
        registerUser,
        signInWithGoogle,
        logOut
    }


};

export default useFirebase;