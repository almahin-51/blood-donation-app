import React, { useEffect, useState } from 'react';

const FindDonar = () => {
    const [bloodGroupText, setBloodGroupText] = useState('')
    const [bloodGroup, setBloodGroup] = useState([])
    const [districtText, setDistrictText] = useState('')
    const [district, setDistrict] = useState([])
    const [areaText, setAreaText] = useState('')
    const [donar, setDonar] = useState([])

    // Filtering Donar From Database 
        useEffect(() => {
            fetch(`https://evening-river-70665.herokuapp.com/donar/${bloodGroupText}`)
            .then(res => res.json())
            .then(data => setBloodGroup(data))
        }, [bloodGroupText])
        useEffect(() => {
            setDistrict(bloodGroup.filter(data => data.district === districtText))
        }, [bloodGroup, districtText])
        useEffect(() => {
            setDonar(district.filter(data => data.area.includes(areaText)))
        }, [ areaText, district])
        console.log(donar)
    return (
        <div>
            <div className="container mx-auto py-14 px-5 lg:px-1">
                <div className="grid grid-cols-6 mb-10">
                    <div className="col-start-2 col-span-4">
                        <div className="donar-search-box">
                            <select onChange={e => setBloodGroupText(e.target.value)}>
                                <option value="o+">O+</option>
                                <option value="a+">a+</option>
                                <option value="B+">B+</option>
                            </select>
                            <select onChange={e => setDistrictText(e.target.value)}>
                                <option value="patuakhali">Patuakhali</option>
                                <option value="thakurgaon">Thakurgaon</option>
                                <option value="gazipur">Gazipur</option>
                            </select>
                            <input onChange={e => setAreaText(e.target.value)} className='border-2 border-red-200 rounded-full focus:outline-none w-11/12 lg:w-3/5 h-8 lg:h-10 pl-5 pr-24' type="text" placeholder='Search donar' />
                            <button  className='bg-red-400 text-white px-4 lg:px-6 py-1 lg:py-2 lg:font-semibold rounded-full -ml-20 mt-1'><i className="fas fa-search"></i> Find</button>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-center">
                    <div className="single-donar border-2 border-red-100 rounded flex items-center p-2">
                        <img className='w-24 rounded-full h-24' src="https://image.freepik.com/free-photo/indoor-picture-cheerful-handsome-young-man-having-folded-hands-looking-directly-smiling-sincerely-wearing-casual-clothes_176532-10257.jpg" alt="donar profile" />
                        <div className="donar-text ml-5 text-left">
                            <h4 className='text-lg'>Monib Bormon</h4>
                            <h4>Blood Group: <span className='font-semibold'>A<sup>+</sup>  (A Positive)</span></h4>
                            <p>Location: <span className='font-semibold'>Gazipur,Dhaka</span></p>
                            <button className='bg-red-400 text-white font-semibold px-2 rounded mt-3'>Contact Donar</button>
                        </div>
                    </div>
                    <div className="single-donar border-2 border-red-100 rounded flex items-center p-2">
                        <img className='w-24 rounded-full h-24' src="https://image.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg" alt="donar profile" />
                        <div className="donar-text ml-5 text-left">
                            <h4 className='text-lg'>Mohammad Arif</h4>
                            <h4>Blood Group: <span className='font-semibold'>O<sup>+</sup>  (O Positive)</span></h4>
                            <p>Location: <span className='font-semibold'>Munshigonj,Dhaka</span></p>
                            <button className='bg-red-400 text-white font-semibold px-2 rounded mt-3'>Contact Donar</button>
                        </div>
                    </div>
                    <div className="single-donar border-2 border-red-100 rounded flex items-center p-2">
                        <img className='w-24 rounded-full h-24' src="https://image.freepik.com/free-photo/photo-attractive-ginger-man-with-satisfied-expression-has-thick-beard_273609-18615.jpg" alt="donar profile" />
                        <div className="donar-text ml-5 text-left">
                            <h4 className='text-lg'>Mahin Rahman</h4>
                            <h4>Blood Group: <span className='font-semibold'>B<sup>-</sup>  (B Negetive)</span></h4>
                            <p>Location: <span className='font-semibold'>Thakurgaon,Rangpur</span></p>
                            <button className='bg-red-400 text-white font-semibold px-2 rounded mt-3'>Contact Donar</button>
                        </div>
                    </div>
                    <div className="single-donar border-2 border-red-100 rounded flex items-center p-2">
                        <img className='w-24 rounded-full h-24' src="https://image.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg" alt="donar profile" />
                        <div className="donar-text ml-5 text-left">
                            <h4 className='text-lg'>Shakil</h4>
                            <h4>Blood Group: <span className='font-semibold'>AB<sup>+</sup>  (AB Positive)</span></h4>
                            <p>Location: <span className='font-semibold'>Sadar,Chittagong</span></p>
                            <button className='bg-red-400 text-white font-semibold px-2 rounded mt-3'>Contact Donar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FindDonar;