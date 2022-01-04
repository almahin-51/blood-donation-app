import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css'

const Hero = () => {
    return (
        <div className='slide-bg hero-area'>
            <div className="hero-text text-center">
                <h4 className='text-white text-xl lg:text-2xl'>Donate blood, save life!</h4>
                <h2 className='text-white text-5xl lg:text-7xl capitalize font-semibold my-5'>Donate Blood <br /> and inspires others</h2>
                <Link to={`/become-donar`}>
                    <button className='bg-red-500 text-white px-12 hover:text-red-500 hover:bg-white border-2 border-transparent hover:border-red-500 transition-all duration-300 py-3 rounded-full mt-10'><i class="fas fa-angle-double-right"></i> Donate Blood</button>
                </Link>
            </div>
        </div>
    );
};

export default Hero;