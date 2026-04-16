import { useContext, useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { FriendContext } from "../context/AllContext";



const Timeline = () => {
    const { timeline } = useContext(FriendContext);
    const [constraint, setConstraint] = useState("All Interactions")
    const filteredTimeline = timeline.filter(item => item.action === constraint || constraint === "All Interactions")

    return (
        <div className="my-10 lg:my-20 w-11/12 sm:w-9/12 mx-auto">
            <h2 className="text-5xl font-bold mb-6">Timeline </h2>

            <select defaultValue="Filter timeline" className="select select-ghost " onChange={(e) => setConstraint(e.target.value)}>
                <option disabled={true}>Filter timeline</option>
                <option>All Interactions</option>
                <option>Call</option>
                <option>Text</option>
                <option>Video</option>
            </select>

            <div className="mt-6 space-y-6">
                {
                    filteredTimeline.map((item, idx) => <div key={idx}>{item.element}</div>)
                }
            </div>

        </div>
    );
};

export default Timeline;