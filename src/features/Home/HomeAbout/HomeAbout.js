import React from 'react';

const HomeAbout = () => {
    return (
        <div>
            <div className="container mx-auto py-20">
                <div className="grid grid-cols-2 gap-4">
                    <div className="about-text">
                        <h3 className='text-4xl mb-5 font-semibold'>What is Blood Donation BD? <span className='block w-28 h-1 bg-red-400 mt-1'></span></h3>

                        <p>We are a team to serve the nation. Blood is an essential part of our body. And it is very important when anyone is sick or something else.Currently we are working with blood donation and in future we will be work all around the world.With the help of this website anyone can find his desire blood group in his local area. </p>
                        <div className='ml-5 mt-5'>
                            <li className='list-none mb-2 capitalize'><i class="fas fa-caret-right text-red-500"></i> we have a big support team</li>
                            <li className='list-none mb-2 capitalize'><i class="fas fa-caret-right text-red-500"></i> blood donar from every district</li>
                            <li className='list-none mb-2 capitalize'><i class="fas fa-caret-right text-red-500"></i> verified blood donar</li>
                            <li className='list-none mb-2 capitalize'><i class="fas fa-caret-right text-red-500"></i> special clinic support</li>
                        </div>
                    </div>
                    <div className="about-image">
                        <img src="https://i.ibb.co/XJnjv9P/team-young-specialist-doctors-standing-corridor-hospital-1303-21199.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeAbout;