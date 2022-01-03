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
                                    <option selected disabled>Select Blood Group</option>
                                    <option value="a+">A+</option>
                                    <option value="a-">A-</option>
                                    <option value="b+">B+</option>
                                    <option value="b-">B-</option>
                                    <option value="ab+">AB+</option>
                                    <option value="ab-">AB-</option>
                                    <option value="o+">O+</option>
                                    <option value="o-">O-</option>
                            </select>
                            <select onChange={e => setDistrictText(e.target.value)}>
                            <option disabled selected>Select District</option>
                                    <option value='Bagerhat'>Bagerhat</option>
                                    <option value='Bandarban'>Bandarban</option>
                                    <option value='Barguna'>Barguna</option>
                                    <option value='Barisal'>Barisal</option>
                                    <option value='Bhola'>Bhola</option>
                                    <option value='Bogra'>Bogra</option>
                                    <option value='Brahmanbaria'>Brahmanbaria</option>
                                    <option value='Chandpur'>Chandpur</option>
                                    <option value='Chittagong'>Chittagong</option>
                                    <option value='Chuadanga'>Chuadanga</option>
                                    <option value='Comilla'>Comilla</option>
                                    <option value='CoxsBazar'>Cox'sBazar</option>
                                    <option value='Dhaka'>Dhaka</option>
                                    <option value='Dinajpur'>Dinajpur</option>
                                    <option value='Faridpur'>Faridpur</option>
                                    <option value='Feni'>Feni</option>
                                    <option value='Gaibandha'>Gaibandha</option>
                                    <option value='Gazipur'>Gazipur</option>
                                    <option value='Gopalganj'>Gopalganj</option>
                                    <option value='Habiganj'>Habiganj</option>
                                    <option value='Jamalpur'>Jamalpur</option>
                                    <option value='Jessore'>Jessore</option>
                                    <option value='Jhalokati'>Jhalokati</option>
                                    <option value='Jhenaidah'>Jhenaidah</option>
                                    <option value='Joypurhat'>Joypurhat</option>
                                    <option value='Khagrachari'>Khagrachari</option>
                                    <option value='Khulna'>Khulna</option>
                                    <option value='Kishoreganj'>Kishoreganj</option>
                                    <option value='Kurigram'>Kurigram</option>
                                    <option value='Kushtia'>Kushtia</option>
                                    <option value='Lakshmipur'>Lakshmipur</option>
                                    <option value='Lalmonirhat'>Lalmonirhat</option>
                                    <option value='Madaripur'>Madaripur</option>
                                    <option value='Magura'>Magura</option>
                                    <option value='Manikganj'>Manikganj</option>
                                    <option value='Maulvibazar'>Maulvibazar</option>
                                    <option value='Meherpur'>Meherpur</option>
                                    <option value='Munshiganj'>Munshiganj</option>
                                    <option value='Mymensingh'>Mymensingh</option>
                                    <option value='Naogaon'>Naogaon</option>
                                    <option value='Narail'>Narail</option>
                                    <option value='Narayanganj'>Narayanganj</option>
                                    <option value='Narsingdi'>Narsingdi</option>
                                    <option value='Natore'>Natore</option>
                                    <option value='Nawabganj'>Nawabganj</option>
                                    <option value='Netrokona'>Netrokona</option>
                                    <option value='Nilphamari'>Nilphamari</option>
                                    <option value='Noakhali'>Noakhali</option>
                                    <option value='Pabna'>Pabna</option>
                                    <option value='Panchagarh'>Panchagarh</option>
                                    <option value='Patuakhali'>Patuakhali</option>
                                    <option value='Pirojpur'>Pirojpur</option>
                                    <option value='Rajbari'>Rajbari</option>
                                    <option value='Rajshahi'>Rajshahi</option>
                                    <option value='Rangamati'>Rangamati</option>
                                    <option value='Rangpur'>Rangpur</option>
                                    <option value='Satkhira'>Satkhira</option>
                                    <option value='Shariatpur'>Shariatpur</option>
                                    <option value='Sherpur'>Sherpur</option>
                                    <option value='Sirajgonj'>Sirajgonj</option>
                                    <option value='Sunamganj'>Sunamganj</option>
                                    <option value='Sylhet'>Sylhet</option>
                                    <option value='Tangail'>Tangail</option>
                                    <option value='Thakurgaon'>Thakurgaon</option> 
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