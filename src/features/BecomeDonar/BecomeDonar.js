import React, { useState } from 'react';
import Swal from 'sweetalert2'
import useFirebase from '../../Hooks/useFirebase';

const BecomeDonar = () => {
    const [donarData, setDonarData] = useState({})
    const { user } = useFirebase()
    const Toast = Swal.mixin({
        toast: true,
        position: 'center',
        showConfirmButton: false,
        timer: 5000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })

    // handle form submit 
    const takeDonarData = e => {
        const key = e.target.name;
        const value = e.target.value;
        const newValue = { ...donarData }
        newValue[key] = value;
        setDonarData(newValue)
    }
    const handleDonarSubmit = (e) => {
        const data = {
            ...donarData,
            creationdate: new Date()
        }
        fetch('https://evening-river-70665.herokuapp.com/donar', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        }).then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Toast.fire({
                        icon: 'success',
                        title: 'Congratulations! You are succesfully done.'
                    })
                }
            })
        e.preventDefault()
    }
    return (
        <div>
            <div className='container mx-auto py-20'>
                <div className="grid grid-cols-2 gap-4">
                    <div className='text-left'>
                        <h2 className='text-4xl '>Want to be a donar?</h2>
                        <h3 className='my-5'>Please Register to join as a donar</h3>
                        <div className="donar-registration">
                            <form onSubmit={handleDonarSubmit}>
                                <input required onChange={takeDonarData} className='border-b-2 border-red-200 rounded-full w-3/4 h-10 mb-5 pl-5 focus:outline-none' type="text" placeholder='Your Name' defaultValue={user.displayName} name='name' /> <br />
                                <input required onChange={takeDonarData} className='border-b-2 border-red-200 rounded-full w-3/4 h-10 mb-5 pl-5 focus:outline-none' type="email" placeholder='Your Email' defaultValue={user.email} name='email' /> <br />
                                <input required onChange={takeDonarData} className='border-b-2 border-red-200 rounded-full w-3/4 h-10 mb-5 pl-5 focus:outline-none' type="number" placeholder='Your Number' name='phone' /> <br />
                                <label className='mb-1 inline-block' htmlFor="blood">Your Blood Group</label><br />
                                <select required onChange={takeDonarData} name="group" id="blood">
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
                                <select required onChange={takeDonarData} className='text-left' name="district" id="district"> <br />
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
                                </select> <br />
                                <label className='mt-3 mb-1 inline-block' htmlFor="area" >Location/Area*</label> <br />
                                <textarea required onChange={takeDonarData} className='border-2 p-2 border-red-200 rounded w-1/2 h-12 focus:outline-none' name="area" id="area"></textarea> <br />
                                <button className='mt-5 bg-red-400 text-white px-8 py-2 rounded' type='submit'>Submit Information</button>
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