import React from 'react';

const Contact = () => {
    return (
        <div>
            < div className='bg-gray-700 bg-opacity-95 bg-blend-overlay flex items-center justify-center' style={{ backgroundImage: 'url(https://image.freepik.com/free-photo/businesswoman-looking-important-contact-phone_1163-4256.jpg)', width: '100%', height: '250px', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center center' }
            }>
                <h2 className='md:text-6xl text-5xl px-5 text-center py-10  text-white font-semibold'>Contact Us</h2>
            </div >
            <div className="container mx-auto py-10 px-5 lg:px-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="contact-box rounded shadow-md text-center p-5">
                        <i className="fas fa-envelope text-4xl text-red-500 mb-3"></i>
                        <p className='font-semibold'>blood@bd.com</p>
                    </div>
                    <div className="contact-box rounded shadow-md text-center p-5">
                        <i className="fas fa-location-arrow text-4xl text-red-500 mb-3"></i>
                        <p className='font-semibold'> Road-1/2,Mirpur,Dhaka</p>
                    </div>
                    <div className="contact-box rounded shadow-md text-center p-5">
                        <i className="fas fa-phone-alt text-4xl text-red-500 mb-3"></i>
                        <p className='font-semibold'>+880199999922</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;