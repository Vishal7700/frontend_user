import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import axios from "axios";
import { apiUrl , getAxiosConfig } from "../config";


function Appointments() {

    const [doctors , setDoctors] = useState([]);
    const [name, setName] = useState('');
    
    const fetchDoctors = async (name) => {
        try {
            const response = await axios.get(`${apiUrl}/admin/doctors`, {
                params:{name},
                ...getAxiosConfig(),
            });
            if (response.status === 200) {
                setDoctors(response.data.doctors || []);
            }
        } catch (error) {
            console.error(error.message);
        } 
    };

    useEffect(() => {
        fetchDoctors(name);
    }, [name]);

    return (
        <div>
            <div>
                <Navbar />
            </div>

            <div className="m-auto mt-16 flex justify-center">
                <input
                    type="text"
                    placeholder="Search Doctor"
                    className="w-2/4 p-1 border rounded-md text-sm focus:outline-none focus:border-primary"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>

            <div className="m-auto mt-4 w-10/12 grid grid-cols-4 gap-4">
                {doctors.map((doctor, index) => (
                    <div
                        key={index}
                        className="px-4 py-2 border rounded-lg shadow-md flex flex-col items-center transition-transform hover:scale-105 hover:border-primary max-w-xs"
                    >
                        <img
                            src={`data:${doctor.profilePhoto.contentType};base64,${btoa(
                                new Uint8Array(doctor.profilePhoto.data.data).reduce(
                                    (data, byte) => data + String.fromCharCode(byte),
                                    ''
                                )
                            )}`}
                            alt="Doctor Profile"
                            className="w-20 h-20 object-cover rounded-full mb-2"
                        />
                        <h3 className="text-md font-semibold mb-1">{doctor.name}</h3>
                        <p className="text-xs text-gray-600">{doctor.speciality}</p>
                        <p className="text-xs text-gray-600">{doctor.experience}</p>
                        <p className="text-xs text-gray-600">{doctor.address}</p>
                        <button className="bg-button hover:bg-buttonHover text-white text-xs py-1 mt-2 rounded-md w-32">
                            Book Appointment
                        </button>
                    </div>
                ))}
            </div>



            <div>
                <Footer />
            </div>
        </div>
    )
}

export default Appointments