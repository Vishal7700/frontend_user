import { faSignOut } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

function Navbar() {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <div>
            <div className="w-full fixed top-0 left-0 p-4 bg-white shadow-md font-raleway items-center z-50">
                <ul className="flex justify-end text-sm gap-10 mr-10 text-text">
                    <li className="fixed left-0 ml-10">Home</li>
                    <li className="relative">
                        <input
                            type="text"
                            onClick={toggleDropdown}
                            value={"Profile"}
                            readOnly
                            className="focus:outline-none text-center rounded-md cursor-pointer "
                        />
                        {dropdownOpen && (
                            <div className="absolute mt-5 w-48 text-center border bg-white shadow-lg rounded-md z-50 ">
                                <ul className="py-2 text-sm text-gray-700">
                                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Profile</li>
                                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Appointments</li>
                                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Logout</li>
                                </ul>
                            </div>
                        )}
                    </li>
                    <li className="text-primary">
                        <FontAwesomeIcon icon={faSignOut} />
                    </li>
                </ul>
            </div>

        </div>
    );
}

export default Navbar;






