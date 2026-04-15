import React, { useEffect, useState } from 'react';
import { FriendContext } from './AllContext';

const DataContext = ({ children }) => {
    const [friends, setFriends] = useState([]);
    const [loading, setLoading] = useState(true);
    { /*set Error handling later*/ }
    const [timeline, setTimeline] = useState([]);



    useEffect(() => {
        const fetchData = async () => {
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
    }, [])

    return (
        <FriendContext.Provider value={{ friends, loading, timeline, setTimeline }}>
            {children}
        </FriendContext.Provider>

    );

};

export default DataContext;