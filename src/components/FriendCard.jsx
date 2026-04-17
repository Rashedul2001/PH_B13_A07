import React from 'react';
import BgColor from "../utils/StatusColor"
import { NavLink } from 'react-router';


const FriendCard = ({ friend }) => {
    return (
        <NavLink to={`/friend/${friend.id}`} className='p-6 text-center card-shadow rounded-2xl '>
            <img src={friend.picture} alt="friend.name" className='inline-block rounded-full' />
            <p className='font-semibold text-2xl mt-3'>{friend.name}</p>
            <p className='text-gray-500 mt-2 text-sm  '>{friend.days_since_contact}d ago</p>
            <div className='flex flex-wrap justify-center items-center gap-2 mt-2 '>
                {
                    friend.tags.map((tag, index) => <p key={index} className='p-2 bg-green-200 rounded-full text-sm font-medium uppercase'>{tag}</p>)
                }
            </div>
            <p className={`inline-block mt-2 p-2 ${BgColor[friend.status]} text-white text-sm font-medium rounded-full capitalize`}>{friend.status}</p>
        </NavLink>
    );
};

export default FriendCard;