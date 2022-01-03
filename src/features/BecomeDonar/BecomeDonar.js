import React, { useEffect, useState } from 'react';

const BecomeDonar = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [blood, setBlood] = useState('')
    const [district, setDistrict] = useState('')
    const [area, setArea] = useState('')


    const data = {
        name,
        email,
        phone,
        blood,
        district,
        area
    }
    // handle form submit 
    const handleDonarSubmit = (e) => {
        e.preventDefault()
        fetch('https://evening-river-70665.herokuapp.com/donar', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        }).then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Congrats! You made it.')
                }
            })
    }
    return (
        <div>
            <div className='container mx-auto py-20'>
                <div className="grid grid-cols-2 gap-4">
                    <div className='text-left'>
                        <h2 className='text-4xl '>Want to be a donar?</h2>
                        <h3 className='my-5'>Please Register to join as a donar</h3>
                        <div className="donar-registration">
                            <form>
                                <input onChange={e => setName(e.target.value)} className='border-b-2 border-red-200 rounded-full w-3/4 h-10 mb-5 pl-5 focus:outline-none' type="text" placeholder='Your Name' /> <br />
                                <input onChange={e => setEmail(e.target.value)} className='border-b-2 border-red-200 rounded-full w-3/4 h-10 mb-5 pl-5 focus:outline-none' type="email" placeholder='Your Email' /> <br />
                                <input onChange={e => setPhone(e.target.value)} className='border-b-2 border-red-200 rounded-full w-3/4 h-10 mb-5 pl-5 focus:outline-none' type="number" placeholder='Your Number' /> <br />
                                <label className='mb-1 inline-block' htmlFor="blood">Your Blood Group</label><br />
                                <select onChange={e => setBlood(e.target.value)} name="blood" id="blood">
                                    <option selected disabled>Select Blood Group</option>
                                    <option value="a+">A+</option>
                                    <option value="a-">A-</option>
                                    <option value="b+">B+</option>
                                    <option value="b-">B-</option>
                                    <option value="ab+">AB+</option>
                                    <option value="ab-">AB-</option>
                                    <option value="o+">O+</option>
                                    <option value="o-">O-</option>
                                </select> <br />
                                <label className='mt-3 mb-1 inline-block' htmlFor="district">Your District</label> <br />
                                <select onChange={e => setDistrict(e.target.value)} className='text-left' name="district" id="district"> <br />
                                    <option disabled selected>Select District</option>
                                    <option value="Dhaka">Dhaka</option>
                                    <option value="Gazipur">Gazipur</option>
                                    <option value="Narayangonj">Narayangonj</option>
                                    <option value="Potuakhali">Potuakhali</option>
                                    <option value="Rangpur">Rangpur</option>
                                    <option value="Mirpur">Mirpur</option>
                                </select> <br />
                                <label className='mt-3 mb-1 inline-block' htmlFor="area">Area*</label> <br />
                                <textarea onChange={e => setArea(e.target.value)} className='border-2 p-2 border-red-200 rounded w-1/2 h-12 focus:outline-none' name="area" id="area"></textarea> <br />
                                <button onClick={handleDonarSubmit} className='mt-5 bg-red-400 text-white px-8 py-2 rounded' type='submit'>Submit Information</button>
                            </form>
                        </div>
                    </div>
                    <div className='become-donar-bg'>
                        <img src="https://image.freepik.com/free-vector/organic-flat-world-blood-donor-day-illustration_23-2148939040.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BecomeDonar;