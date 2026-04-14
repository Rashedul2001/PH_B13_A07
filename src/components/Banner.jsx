import React from 'react';
import { FaPlus } from "react-icons/fa";


const Banner = () => {
    return (
        <>
            <div className='mt-10 sm:mt-20 text-center '>
                <p className='font-bold text-4xl sm:text-5xl'>Friends to keep close in your life</p>
                <p className='mt-4 text-gray-500 '>Your personal shelf of meaningful connections. Browse, tend, and nurture the
                    relationships that matter most.</p>
                <button className='inline-flex gap-1 items-center rounded-sm p-2 text-white bg-green-900 mt-8 cursor-pointer'><FaPlus /> Add a Friend</button>
            </div>
            <div className='grid grid-cols-2 sm:grid-cols-4 gap-5 my-5 sm:my-10 justify-center'>
                <div className='p-4 lg:p-8 text-center'>
                    <p className='text-3xl font-semibold'>8</p>
                    <p className='text-gray-500 '>Total Friends</p>
                </div>
                <div className='p-4 lg:p-8 text-center'>
                    <p className='text-3xl font-semibold'>3</p>
                    <p className='text-gray-500 '>On Track</p>
                </div>
                <div className='p-4 lg:p-8 text-center'>
                    <p className='text-3xl font-semibold'>6</p>
                    <p className='text-gray-500 '>Need Attention</p>
                </div>
                <div className='p-4 lg:p-8 text-center'>
                    <p className='text-3xl font-semibold'>12</p>
                    <p className='text-gray-500 '>Interactions This Month</p>
                </div>

            </div>
        </>
    );
};

export default Banner;