import React from "react";
import logo from "../images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

function Login() {
    return (
        <div className="flex  h-screen flex-col justify-center items-center">
            <div >
                <img src={logo} alt="Logo" className="h-56  m-auto" />
            </div>
            <div className="form">
                <h2 className="text-center text-primary font-bold text-2xl">Login</h2>
                <form className="font-raleway">
                    <div className="mt-2 mb-3">
                        <label className="block text-sm">Email</label>
                        <input
                            className="w-72 p-2 border rounded-md text-sm focus:outline-none focus:border-primary"
                            type="email"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div className="mt-2 mb-3">
                        <label className="block  text-sm">Password</label>
                        <input
                            className="w-72 p-2 text-sm border rounded-md focus:outline-none focus:border-primary"
                            type="password"
                            placeholder="Enter your password "
                        />
                    </div>
                    <div className="flex items-center justify-between mt-2">
                        <button
                            className="bg-button hover:bg-buttonHover text-white text-sm p-2 rounded-md w-72 "
                            type="button"
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
