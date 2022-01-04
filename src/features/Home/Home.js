import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import Hero from './Hero/Hero';

const Home = () => {
    const { user } = useAuth()
    console.log(user);
    return (
        <div>
            <Hero />
        </div>
    );
};

export default Home;
