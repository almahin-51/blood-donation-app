import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Home = () => {
    const {user} = useAuth()
    console.log(user);
    return (
        <div>
            <h1>HomePage</h1>
            <Link to={`/become-donar`}>
                <button className='bg-red-400 px-8 py-2 mt-10 text-white font-semibold rounded mr-5'>Want to be a donar?</button>
            </Link>
            <Link to={`/find-donar`}><button className='bg-red-400 px-8 py-2 mt-10 text-white font-semibold rounded'>Find Donar</button></Link>
        </div>
    );
};

export default Home;
