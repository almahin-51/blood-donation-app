import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    const [loginData, setLoginData] = useState({})


    // handle login submit
    const takeLoginInput = (e) => {
        const key = e.target.name;
        const value = e.target.value;
        const newValue = { ...loginData }
        newValue[key] = value
        setLoginData(newValue)
    }
    const handleLoginSubmit = (e) => {
        e.preventDefault()

    }
    return (
        <div>
            <div className="container mx-auto">
                <div className="grid grid-cols-2 gap-4 items-center">
                    <div className="login-form">
                        <h3 className='text-5xl mb-8'>User Login</h3>
                        <form onSubmit={handleLoginSubmit}>
                            <input onChange={takeLoginInput} className='w-3/4 mb-4 h-12 pl-5 focus:outline-none border-b-2 border-red-400 rounded-full' type="email" placeholder='Enter your email' required name='email' /> <br />
                            <input onChange={takeLoginInput} className='w-3/4 mb-4 h-12 pl-5 focus:outline-none border-b-2 border-red-400 rounded-full' type="password" name='password' placeholder='Enter your password' /> <br />
                            <button className='bg-red-400 text-white px-10 font-semibold rounded py-2' type='submit'>Login</button>
                        </form>
                        <div>
                            <h3 className='mt-10'>Don't have an account? <Link className='text-red-500 font-semibold underline' to='/register'>Register here.</Link></h3>
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

export default Login;