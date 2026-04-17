import React, { useState, useEffect } from 'react';
import { FriendContext } from './AllContext';


const pieStructure = [
    { name: "Call", count: 0, fill: "#244D3F" },
    { name: "Text", count: 0, fill: "#7E35E1" },
    { name: "Video", count: 0, fill: "#B53389" }
];

const DataContext = ({ children }) => {
    const [friends, setFriends] = useState([]);
    const [loading, setLoading] = useState(true);
    { /*set Error handling later*/ }
    const [timeline, setTimeline] = useState([]);
    const [pieData, setPieData] = useState(pieStructure);

    useEffect(() => {
        const fetchData = async () => {

            // it is to prevent the fetching after updating from user interaction and coming back to homepage
            if (friends.length > 0) {
                setLoading(false);
                return;
            }

            try {
                const res = await fetch('/friends.json');
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
        <FriendContext.Provider value={{ friends, loading, timeline, setTimeline, pieData, setPieData, setFriends, setLoading }}>
            {children}
        </FriendContext.Provider>

    );

};

export default DataContext;