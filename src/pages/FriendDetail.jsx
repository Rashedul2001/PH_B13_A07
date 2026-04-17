//TODO: split the page into components and utils 

import { useParams } from "react-router";
import StatusColor from '../utils/StatusColor'
import { MdSnooze } from "react-icons/md";
import { FiArchive } from "react-icons/fi";
import { RiDeleteBin5Line } from "react-icons/ri";
import callIcon from '../assets/call.png'
import textIcon from '../assets/text.png';
import videoIcon from '../assets/video.png'
import { toast } from "react-toastify";
import { useContext } from "react";
import { FriendContext } from "../context/AllContext";



const FriendDetail = () => {

    const { friends,setFriends, timeline, setTimeline, pieData, setPieData } = useContext(FriendContext);
    const { id } = useParams();
    const friend = friends.find(f => f.id === parseInt(id));

    const handleClick = (action, name, icon) => {
        setFriends(friends.map(f => f.id === friend.id ? {...f,days_since_contact: 0} : f));
        const message = <p className="text-gray-500"><span className="text-green-950 font-bold text-xl">{action}</span> with <span className="text-green-950 font-bold text-xl">{name}</span></p>;
        toast(message, { autoClose: 2000 });

        const newTimeline = {};
        newTimeline.date = new Date();
        const formattedDate = newTimeline.date.toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric"
        });
        newTimeline.element = <div className="flex gap-4 justify-start items-center p-4 card-shadow rounded-md">
            <img src={icon} alt={action} />
            <div>
                {message}
                <p className="text-gray-500">{formattedDate}</p>
            </div>
        </div>
        newTimeline.action = action;
        setTimeline([...timeline, newTimeline]);
        const data = [...pieData].map(item => item.name === action ? { ...item, count: item.count + 1 } : item);
        setPieData(data);

    }


    return (
        <div className="my-4 sm:my-10 md:my-20 md:p-6 flex gap-6 flex-col lg:flex-row sm:w-11/12 mx-auto">
            <div className="text-center flex-1">
                <img src={friend.picture} alt={friend.name} className="inline-block rounded-full" />
                <p className="text-xl font-semibold mt-3">{friend.name}</p>
                <p className={`mt-2 text-white ${StatusColor[friend.status]} inline-block p-2 leading-none font-medium text-sm  rounded-full capitalize`}>{friend.status}</p>
                <div className="flex flex-wrap items-center gap-2 justify-center mt-2">
                    {
                        friend.tags.map((tag, index) => <p key={index} className="uppercase p-2 bg-green-200 leading-none inline-block font-medium text-sm rounded-full ">{tag}</p>)
                    }
                </div>
                <p className=" mt-3 inter italic font-medium text-gray-500" >"{friend.bio}"</p>
                <p className="text-gray-500 mt-2">Email: {friend.email}</p>
                <div className="flex flex-col ">
                    <button className="mt-12 btn p-4 font-medium "><MdSnooze /> Snooze 2 weeks</button>
                    <button className="mt-2 btn p-4  font-medium "><FiArchive /> Archive</button>
                    <button className="my-2 btn text-red-600 p-4  font-medium "><RiDeleteBin5Line /> Delete</button>
                </div>
            </div>
            <div className="flex-2 space-y-6">
                <div className="flex gap-1 sm:gap-6 justify-between">
                    <div className="py-5 flex-1 text-center justify-center card-shadow rounded-md">
                        <p className="text-xl sm:text-3xl font-semibold ">{friend.days_since_contact}</p>
                        <p className="text-gray-500 mt-2 sm:text-xl ">Days Since Contact</p>
                    </div>
                    <div className="py-5 flex-1 text-center justify-center card-shadow rounded-md">
                        <p className="text-xl sm:text-3xl font-semibold ">{friend.goal}</p>
                        <p className="text-gray-500 mt-2 sm:text-xl">Goal (Days)</p>
                    </div>
                    <div className="py-5 flex-1 text-center justify-center card-shadow rounded-md">
                        <p className="text-xl sm:text-3xl font-semibold ">{friend.next_due_date}</p>
                        <p className="text-gray-500 mt-2 sm:text-xl">Next Due Date</p>
                    </div>
                </div>
                <div className="p-6">
                    <div className="flex justify-between items-center ">
                        <p className="text-green-950  text-xl font-medium ">Relationship Goal</p>
                        <button className="btn text-xl font-medium">Edit</button>
                    </div>
                    <p className="text-gray-500 mt-4 ">Connect every <span className="font-bold text-xl text-black"> {friend.goal} days</span> </p>
                </div>
                <div className="p-6 space-y-4 ">
                    <p className="text-green-950  text-xl font-medium ">Quick Check-In</p>
                    <div className="flex justify-between items-center gap-4 ">
                        <button className="flex-1 p-4 text-center flex-col cursor-pointer card-shadow rounded-md"
                            onClick={() => handleClick("Call", friend.name, callIcon)}>
                            <img src={callIcon} alt="Call" className="mb-2 w-fit object-contain inline-block" />
                            <p>Call</p>
                        </button>
                        <button className="flex-1 p-4 text-center flex-col cursor-pointer card-shadow rounded-md" onClick={() => handleClick("Text", friend.name, textIcon)}>
                            <img src={textIcon} alt="Text" className="mb-2 w-fit object-contain inline-block" />
                            <p>Text</p>
                        </button>
                        <button className="flex-1 p-4 text-center flex-col cursor-pointer card-shadow rounded-md" onClick={() => handleClick("Video", friend.name, videoIcon)}>
                            <img src={videoIcon} alt="Video" className="mb-2 w-fit object-contain inline-block" />
                            <p>Video</p>
                        </button>

                    </div>
                </div>
            </div>
        </div>
    );

}
export default FriendDetail;