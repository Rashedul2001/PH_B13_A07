import React, { useContext, useEffect } from 'react';
// import friends from '../data/friends.json';
import FriendCard from './FriendCard';
import { FriendContext } from '../context/AllContext';


const FriendsContainer = () => {
    const { friends, loading, setFriends, setLoading } = useContext(FriendContext);
    useEffect(() => {
        const fetchData = async () => {
            // it is to prevent the fetching after updating from user interaction and coming back to homepage
            if (friends.length > 0) {
                setLoading(false);
                return;
            }

            try {
                const res = await fetch('friends.json');
                if (!res.ok) throw new Error("Failed to fetch friends data");
                const data = await res.json();
                setFriends(data);
            }
            catch {
                //catch(error)
                // console.error("Error fetching friends data", error);
                ;
            }
            finally {
                setLoading(false);
            }
        };
        fetchData();
        //don't know why my eslint is saying i have to put some dependency in [] but I clearly know it is optional
        // but I included some dependency just to remove that warning.
    }, [friends, setFriends, setLoading])


    return (<>
        <p className='text-2xl font-semibold mb-4 text-center sm:text-start'>Your Friends</p>
        <div className='relative mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20'>
            {
                loading ?
                    <span className="relative top-10 left-1/2 col-span-full mb-20 loading loading-spinner text-primary" ></span >
                    :
                    friends.map(friend => <FriendCard key={friend.id} friend={friend} />)
            }
        </div></>
    );
};

export default FriendsContainer;