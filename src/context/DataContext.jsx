import React, { useEffect, useState } from 'react';
import { FriendContext } from './AllContext';

const pieStructure = [
    { name: "Call", value: 0, fill: "#244D3F" },
    { name: "Text", value: 0, fill: "#7E35E1" },
    { name: "Video", value: 0, fill: "#B53389" }
];

const DataContext = ({ children }) => {
    const [friends, setFriends] = useState([]);
    const [loading, setLoading] = useState(true);
    { /*set Error handling later*/ }
    const [timeline, setTimeline] = useState([]);
    const [pieData, setPieData] = useState(pieStructure);



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
        <FriendContext.Provider value={{ friends, loading, timeline, setTimeline, pieData, setPieData }}>
            {children}
        </FriendContext.Provider>

    );

};

export default DataContext;