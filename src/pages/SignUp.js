import React from 'react'
import logo from "../images/logo.png";
import { Link } from 'react-router-dom';

function SignUp() {
  return (
    <div>
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
              <label className="block  text-sm">Phone Number</label>
              <input
                className="w-72 p-2 text-sm border rounded-md focus:outline-none focus:border-primary"
                type="text"
                placeholder="Enter your phone number "
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
              Already have an account?
              <Link to={'/'}><span className="text-primary text-sm hover:underline">Login</span></Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignUp