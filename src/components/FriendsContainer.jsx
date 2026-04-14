import React from 'react';
import friends from '../data/friends.json';
import FriendCard from './FriendCard';

const FriendsContainer = () => {
    return (<>
        <p className='text-2xl font-semibold mb-4 text-center sm:text-start'>Your Friends</p>
        <div className='mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20'>
            {
                friends.map(friend => <FriendCard key={friend.id} friend={friend} />)
            }
        </div></>
    );
};

export default FriendsContainer;