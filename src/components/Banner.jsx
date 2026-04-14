import React from 'react';
import { FaPlus } from "react-icons/fa";


const Banner = () => {
    return (
        <div className='mt-10 sm:mt-20 text-center '>
            <p className='font-bold text-4xl sm:text-5xl'>Friends to keep close in your life</p>
            <p className='mt-4 text-gray-500 '>Your personal shelf of meaningful connections. Browse, tend, and nurture the
                relationships that matter most.</p>
            <button className='inline-flex gap-1 items-center rounded-sm p-2 text-white bg-green-900 mt-8 cursor-pointer'><FaPlus /> Add a Friend</button>
        </div>
    );
};

export default Banner;