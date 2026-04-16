import React, { useState } from 'react';
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





    return (
        <FriendContext.Provider value={{ friends, loading, timeline, setTimeline, pieData, setPieData, setFriends,setLoading}}>
            {children}
        </FriendContext.Provider>

    );

};

export default DataContext;