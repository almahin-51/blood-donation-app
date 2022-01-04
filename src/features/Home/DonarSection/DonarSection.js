import React from 'react';
import { Link } from 'react-router-dom';

const DonarSection = () => {
    return (
        <div className='bg-gray-200'>
            <div className="container mx-auto py-14 px-5 lg:px-0">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-center">
                    <div className="col-span-2 donar-text">
                        <h3 className='text-4xl font-semibold text-red-600 mb-5'>Want to donate blood and help people?</h3>
                    </div>
                    <div className="donar-btn">
                        <Link to={`/become-donar`}>
                            <button className='bg-red-500 text-white px-14 hover:text-red-500 hover:bg-white border-2 border-transparent hover:border-red-500 transition-all duration-300 py-3   rounded-full'><i class="fas fa-angle-double-right"></i> Register Now</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DonarSection;