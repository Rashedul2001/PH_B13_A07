import { FaAngleDown } from "react-icons/fa";



const Timeline = () => {
    return (
        <div className="my-20 ">
            <h2 className="text-5xl font-bold mb-6">Timeline </h2>
            {/* dropdown */}
            <div className="dropdown dropdown-start">
                <div tabIndex={0} role="button" className="btn m-1">Filter timeline <FaAngleDown /></div>
                <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li><a>Item 1</a></li>
                    <li><a>Item 2</a></li>
                </ul>
            </div>


        </div>
    );
};

export default Timeline;