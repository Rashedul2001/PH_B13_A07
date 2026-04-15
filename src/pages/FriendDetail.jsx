import { useParams } from "react-router";
import friends from '../data/friends.json';
import StatusColor from '../utils/StatusColor'
import { MdSnooze } from "react-icons/md";
import { FiArchive } from "react-icons/fi";
import { RiDeleteBin5Line } from "react-icons/ri";
import callIcon from '../assets/call.png'
import textIcon from '../assets/text.png';
import videoIcon from '../assets/video.png'
import { toast } from "react-toastify";

const FriendDetail = () => {
    const { id } = useParams();
    const friend = friends.find(f => f.id === parseInt(id));


    return (
        <div className="my-20 p-6 flex gap-6 flex-col lg:flex-row">
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
                <div className="flex gap-6 justify-between">
                    <div className="my-8 text-center">
                        <p className="text-3xl font-semibold ">{friend.days_since_contact}</p>
                        <p className="text-gray-500 mt-2 text-xl">Days Since Contact</p>
                    </div>
                    <div className="my-8 text-center">
                        <p className="text-3xl font-semibold ">{friend.goal}</p>
                        <p className="text-gray-500 mt-2 text-xl">Goal (Days)</p>
                    </div>
                    <div className="my-8 text-center">
                        <p className="text-3xl font-semibold ">{friend.next_due_date}</p>
                        <p className="text-gray-500 mt-2 text-xl">Next Due</p>
                    </div>
                </div>
                <div className="p-6">
                    <div className="flex justify-between items-center ">
                        <p className="text-green-950  text-xl font-medium ">Relationship Goal</p>
                        <button className="btn text-xl font-medium">Edit</button>
                    </div>
                    <p className="text-gray-500 mt-4 ">Connect every <span className="font-bold text-black"> 30 days</span></p>
                </div>
                <div className="p-6 space-y-4 ">
                    <p className="text-green-950  text-xl font-medium ">Quick Check-In</p>
                    <div className="flex justify-between items-center gap-4 ">
                        <div className="p-4 text-center flex-col cursor-pointer"
                            onClick={() => toast(<p className="text-gray-500"><span className="text-green-950 text-xl font-medium ">Call</span> with {friend.name} </p>)}>
                            <img src={callIcon} alt="Call" className="mb-2 w-fit object-contain" />
                            <p>Call</p>
                        </div>
                        <div className="p-4 text-center flex-col cursor-pointer" onClick={()=> toast(<p className="text-gray-500"><span className="text-green-950 text-xl font-medium ">Text</span> with {friend.name} </p>)}>
                            <img src={textIcon} alt="Text" className="mb-2 w-fit object-contain" />
                            <p>Text</p>
                        </div>
                        <div className="p-4 text-center flex-col cursor-pointer" onClick={()=> toast(<p className="text-gray-500"><span className="text-green-950 text-xl font-medium ">Video</span> with {friend.name} </p>)}>
                            <img src={videoIcon} alt="Video" className="mb-2 w-fit object-contain" />
                            <p>Video</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );

}
export default FriendDetail;