import { NavLink } from 'react-router';
import logo from "../assets/logo.png"
import { RiHome2Line } from "react-icons/ri";
import { CiClock2 } from "react-icons/ci";
import { AiOutlineStock } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { useState } from 'react';

const Navbar = () => {
    const [open, setOpen] = useState(true);

    return (
        <nav className='flex justify-between items-center px-10 mt-3 h-14 shadow-md'>
            <div className=''>
                <NavLink to="/"  ><img src={logo} alt="Logo Keen Keeper" className='' /></NavLink>
            </div>


            <div className="drawer drawer-end sm:hidden ">
                <input id="my-drawer-5" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex justify-end">
                    {/* Page content here */}
                    <label htmlFor="my-drawer-5" className="drawer-button z-20 cursor-pointer" onClick={() => setOpen(!open)} >{open ? <FaBars /> : <IoCloseSharp />}</label>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-5" aria-label="close sidebar" className="drawer-overlay" onClick={() => setOpen(!open)}></label>
                    <div className="menu bg-base-200 w-2/3 min-h-full max-w-40 p-4 rounded-tl-lg">
                        <div className='mt-10'>

                            <NavLink to="/" className={({ isActive }) => ` flex items-center gap-1 p-2 rounded-sm font-medium ${isActive ? "bg-green-900 text-white" : "hover:bg-green-100"}`}><RiHome2Line /> Home</NavLink>
                            <NavLink to="/timeline" className={({ isActive }) => `flex items-center gap-1 p-2 rounded-sm font-medium ${isActive ? "bg-green-900 text-white" : "hover:bg-green-100"}`}><CiClock2 /> Timeline</NavLink>
                            <NavLink to="/stats" className={({ isActive }) => `flex items-center gap-1 p-2 rounded-sm font-medium ${isActive ? "bg-green-900 text-white" : "hover:bg-green-100"}`}><AiOutlineStock /> Stats</NavLink>
                        </div>
                    </div>
                </div>
            </div>


            <div className='hidden sm:flex items-center gap-4  '>
                <NavLink to="/" className={({ isActive }) => `flex items-center gap-1 p-2 rounded-sm font-medium ${isActive && "bg-green-900 text-white"}`}><RiHome2Line /> Home</NavLink>
                <NavLink to="/timeline" className={({ isActive }) => `flex items-center gap-1 p-2 rounded-sm font-medium ${isActive ? "bg-green-900 text-white" : ""}`}><CiClock2 /> Timeline</NavLink>
                <NavLink to="/stats" className={({ isActive }) => `flex items-center gap-1 p-2 rounded-sm font-medium ${isActive ? "bg-green-900 text-white" : ""}`}><AiOutlineStock /> Stats</NavLink>
            </div>

        </nav>
    );
};

export default Navbar;