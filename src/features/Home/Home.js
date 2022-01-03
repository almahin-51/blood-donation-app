import React from 'react';
import { Link } from 'react-router-dom';
import Slider from '../Slider/Slider';

const Home = () => {
    // const data ={
    //     name: 'sakil',
    //     group: 'a+',
    //     district: 'cumilla',
    //     area: 'sadar road'
    // }
    // fetch('https://evening-river-70665.herokuapp.com/donar',{
    //     method: "POST",
    //     headers: {
    //         'content-type': 'application/json'
    //     },
    //     body: JSON.stringify(data)
    // })
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