import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className="container mx-auto py-10">
                <div className="section-title text-center mb-10">
                    <h3 className='text-5xl mb-3'>Our Latest Blogs <span className='block w-20 h-1 bg-red-500 mx-auto mt-1'></span></h3>
                    <p className='capitalize'>publishing blogs is our passion and we share our news via blog</p>
                </div>
                <div className="grid grid-cols-3 gap-4">
                    <div className="single-blog-box shadow-md">
                        <img className='h-80 w-full' src="https://image.freepik.com/free-photo/sharing-is-caring-money-donation-give-concept_53876-124765.jpg" alt="blog images" />
                        <div className="blog-text p-5">
                            <h3 className='text-2xl capitalize font-semibold mb-2'>Sharing is caring</h3>
                            <h4 className='mb-2 text-sm'><i class="far fa-clock text-red-500"></i> 04 Jan,2022</h4>
                            <p>Blood is a essential part of our body. Everyone needs blood when they are sick.So we all should share our blood to save one's life.It is a kind of social work.</p>
                            <button className='mt-5 text-red-500 text-lg'>Read More..</button>
                        </div>
                    </div>
                    <div className="single-blog-box shadow-md">
                        <img className='h-80 w-full' src="https://image.freepik.com/free-photo/you-can-help-give-welfare-donate-concept_53876-121039.jpg" alt="blog images" />
                        <div className="blog-text p-5">
                            <h3 className='text-2xl capitalize font-semibold mb-2'>We can change the world together</h3>
                            <h4 className='mb-2 text-sm'><i class="far fa-clock text-red-500"></i> 23 feb,2022</h4>
                            <p>Blood is a essential part of our body. Everyone needs blood when they are sick.So we all should share our blood to save one's life.It is a kind of social work.</p>
                            <button className='mt-5 text-red-500 text-lg'>Read More..</button>
                        </div>
                    </div>
                    <div className="single-blog-box shadow-md">
                        <img className='h-80 w-full' src="https://image.freepik.com/free-photo/doctor-holding-blood-test-tube_53876-94745.jpg" alt="blog images" />
                        <div className="blog-text p-5">
                            <h3 className='text-2xl capitalize font-semibold mb-2'>Pure blood needs for body</h3>
                            <h4 className='mb-2 text-sm'><i class="far fa-clock text-red-500"></i> 13 Jan,2022</h4>
                            <p>Blood is a essential part of our body. Everyone needs blood when they are sick.So we all should share our blood to save one's life.It is a kind of social work.</p>
                            <button className='mt-5 text-red-500 text-lg'>Read More..</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;