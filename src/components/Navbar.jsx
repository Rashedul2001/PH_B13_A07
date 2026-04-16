import { NavLink } from 'react-router';
import logo from "../assets/logo.png"
import { RiHome2Line } from "react-icons/ri";
import { CiClock2 } from "react-icons/ci";
import { AiOutlineStock } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className='relative flex justify-between items-center px-10 h-20 '>
            <div className=''>
                <NavLink to="/"  ><img src={logo} alt="Logo Keen Keeper" className='' /></NavLink>
            </div>
            <div className='sm:hidden z-10' onClick={() => setIsOpen(!isOpen)}>
                {
                    isOpen ? <IoCloseSharp /> : <FaBars />
                }
            </div>
            <div className='hidden sm:flex items-center gap-4 '>
                <NavLink to="/" className={({ isActive }) => `flex items-center gap-1 p-2 rounded-sm font-medium ${isActive && "bg-green-900 text-white"}`}><RiHome2Line /> Home</NavLink>
                <NavLink to="/timeline" className={({ isActive }) => `flex items-center gap-1 p-2 rounded-sm font-medium ${isActive ? "bg-green-900 text-white" : ""}`}><CiClock2 /> Timeline</NavLink>
                <NavLink to="/stats" className={({ isActive }) => `flex items-center gap-1 p-2 rounded-sm font-medium ${isActive ? "bg-green-900 text-white" : ""}`}><AiOutlineStock /> Stats</NavLink>
            </div>
            {/* <div className={`absolute sm:hidden ${isOpen ? " right-12" : "-right-40"} top-10 space-y-1 bg-gray-100 rounded-sm transition-all duration-300`} onClick={() => setIsOpen(!isOpen)} >
                <NavLink to="/" className={({ isActive }) => `flex items-center gap-1 p-1 rounded-sm font-medium ${isActive && "bg-green-900 text-white"}`}><RiHome2Line /> Home</NavLink>
                <NavLink to="/timeline" className={({ isActive }) => `flex items-center gap-1 p-1 rounded-sm font-medium ${isActive ? "bg-green-900 text-white" : ""}`}><CiClock2 /> Timeline</NavLink>
                <NavLink to="/stats" className={({ isActive }) => `flex items-center gap-1 p-1 rounded-sm font-medium ${isActive ? "bg-green-900 text-white" : ""}`}><AiOutlineStock /> Stats</NavLink>
            </div> */}
        </nav>
    );
};

export default Navbar;