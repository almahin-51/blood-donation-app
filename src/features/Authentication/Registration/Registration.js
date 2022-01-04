import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Registration = () => {
    const [registerData, setRegisterData] = useState({})
    const { registerUser, error, signInWithGoogle } = useAuth()

    const navigate = useNavigate()
    const location = useLocation()

    // handle login submit
    const takeRegisterInput = (e) => {
        const key = e.target.name;
        const value = e.target.value;
        const newValue = { ...registerData }
        newValue[key] = value
        setRegisterData(newValue)
    }
    const handleRegisterSubmit = (e) => {
        e.preventDefault()
        if (registerData.password !== registerData.password2) {
            alert('Password didnot match')
            return
        }
        registerUser(registerData.email, registerData.password, registerData.name, navigate)
        console.log(registerData)
    }
    // handle google sign in
    const handleGoogleSignIn = () => {
        signInWithGoogle(location, navigate)
    }
    return (
        <div>
            <div className="container mx-auto py-10 px-5 lg:px-0">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
                    <div className="login-form">
                        <h3 className='text-5xl mb-8'>User Registration</h3>
                        <form onSubmit={handleRegisterSubmit}>
                            <input onChange={takeRegisterInput} className='lg:w-3/4 w-full mb-4 h-12 pl-5 focus:outline-none border-b-2 border-red-400 rounded-full' type="text" placeholder='Enter your Full Name' required name='name' /> <br />
                            <input onChange={takeRegisterInput} className='lg:w-3/4 w-full mb-4 h-12 pl-5 focus:outline-none border-b-2 border-red-400 rounded-full' type="email" placeholder='Enter your email' required name='email' /> <br />
                            <input onChange={takeRegisterInput} className='lg:w-3/4 w-full mb-4 h-12 pl-5 focus:outline-none border-b-2 border-red-400 rounded-full' type="password" name='password' placeholder='Enter your password' /> <br />
                            <input onChange={takeRegisterInput} className='lg:w-3/4 w-full mb-4 h-12 pl-5 focus:outline-none border-b-2 border-red-400 rounded-full' type="password" name='password2' placeholder='Re-Enter your password' /> <br />
                            {error && <p className='text-red-500 font-semibold mb-3'>{error}</p>}
                            <button className='bg-red-400 text-white px-10 font-semibold rounded py-2' type='submit'>Register</button>
                        </form>
                        <div>
                            <h3 className='mt-10'>Already have an account? <Link className='text-red-500 font-semibold underline' to='/login'>Login here.</Link></h3>
                            <p className='text-2xl my-3'>Or</p>
                            <button onClick={handleGoogleSignIn} className='text-2xl shadow-lg rounded px-5 py-1'>Continue with <FcGoogle className='inline-block text-4xl' /></button>
                        </div>
                    </div>
                    <div className="login-bg">
                        <img src="https://image.freepik.com/free-vector/secure-login-concept-illustration_114360-4685.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;