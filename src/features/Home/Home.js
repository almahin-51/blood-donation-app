import React from 'react';
import useAuth from '../../Hooks/useAuth';
import DonarSection from './DonarSection/DonarSection';
import Hero from './Hero/Hero';
import HomeAbout from './HomeAbout/HomeAbout';

const Home = () => {
    const { user } = useAuth()
    console.log(user);
    return (
        <div>
            <Hero />
            <DonarSection />
            <HomeAbout />
        </div>
    );
};

export default Home;
