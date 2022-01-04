import React from 'react';
import useAuth from '../../Hooks/useAuth';
import Counter from './Counter/Counter';
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
            <Counter />
        </div>
    );
};

export default Home;
