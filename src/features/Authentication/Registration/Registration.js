import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useFirebase from '../../../Hooks/useFirebase';

const Registration = () => {
    const [registerData, setRegisterData] = useState({})
    const { registerUser } = useFirebase()

    const navigate = useNavigate()

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
    return (
        <div>
            <div className="container mx-auto">
                <div className="grid grid-cols-2 gap-4 items-center">
                    <div className="login-form">
                        <h3 className='text-5xl mb-8'>User Registration</h3>
                        <form onSubmit={handleRegisterSubmit}>
                            <input onChange={takeRegisterInput} className='w-3/4 mb-4 h-12 pl-5 focus:outline-none border-b-2 border-red-400 rounded-full' type="text" placeholder='Enter your Full Name' required name='name' /> <br />
                            <input onChange={takeRegisterInput} className='w-3/4 mb-4 h-12 pl-5 focus:outline-none border-b-2 border-red-400 rounded-full' type="email" placeholder='Enter your email' required name='email' /> <br />
                            <input onChange={takeRegisterInput} className='w-3/4 mb-4 h-12 pl-5 focus:outline-none border-b-2 border-red-400 rounded-full' type="password" name='password' placeholder='Enter your password' /> <br />
                            <input onChange={takeRegisterInput} className='w-3/4 mb-4 h-12 pl-5 focus:outline-none border-b-2 border-red-400 rounded-full' type="password" name='password2' placeholder='Re-Enter your password' /> <br />
                            <button className='bg-red-400 text-white px-10 font-semibold rounded py-2' type='submit'>Register</button>
                        </form>
                        <div>
                            <h3 className='mt-10'>Already have an account? <Link className='text-red-500 font-semibold underline' to='/login'>Login here.</Link></h3>
                            <p className='text-2xl my-3'>Or</p>
                            <button>Google</button>
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