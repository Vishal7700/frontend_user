import React, { useState } from "react";
import logo from "../images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { apiUrl } from "../config";
import Cookies from 'js-cookie';


function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${apiUrl}/user/login`, {
                email,
                password
            })  
            if (response.status === 200) {
                const token = response.data.token;
                Cookies.set('token', token, { expires: 1 });
                // toast.success("Login successful")
                navigate('/dashboard');
            }
        } catch (error) {
            alert("Invalid email or password");
        }
    }




    return (
        <div className="flex  h-screen flex-col justify-center items-center">
            <div >
                <img src={logo} alt="Logo" className="h-56  m-auto" />
            </div>
            <div className="form">
                <h2 className="text-center text-primary font-bold text-2xl">Login</h2>
                <form className="font-raleway" onSubmit={handleSubmit}>
                    <div className="mt-2 mb-3">
                        <label className="block text-sm">Email</label>
                        <input
                            className="w-72 p-2 border rounded-md text-sm focus:outline-none focus:border-primary"
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mt-2 mb-3">
                        <label className="block  text-sm">Password</label>
                        <input
                            className="w-72 p-2 text-sm border rounded-md focus:outline-none focus:border-primary"
                            type="password"
                            placeholder="Enter your password "
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="flex items-center justify-between mt-2">
                        <button
                            className="bg-button hover:bg-buttonHover text-white text-sm p-2 rounded-md w-72 "
                            type="submit"
                        >
                            Login
                        </button>
                    </div>

                    <p className="text-center text-sm text-text mt-4">
                        Don't have an account?
                        <Link to={'/signup'}><span className="text-primary text-sm hover:underline">Sign up</span></Link>
                    </p>
                </form>
            </div>
            <div className="mt-6 text-center">
                <p className="text-gray-600 text-sm font-raleway">Connect with us:</p>
                <div className="flex justify-center space-x-4">
                    <p className="cursor-pointer text-l " ><FontAwesomeIcon icon={faInstagram} /> </p>
                    <p className="cursor-pointer text-l"><FontAwesomeIcon icon={faFacebook} /></p>
                    <p className="cursor-pointer text-l"><FontAwesomeIcon icon={faWhatsapp} /></p>
                </div>
            </div>
        </div>
    );
}

export default Login;
