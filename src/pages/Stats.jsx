import { useContext } from "react";
import { FriendContext } from "../context/AllContext";
import { Legend, Pie, PieChart, Tooltip } from 'recharts';



const Stats = () => {
    const { pieData } = useContext(FriendContext);


    return (
        <div className="my-20 ">
            <p className="text-5xl font-bold mb-6">Friendship Analytics</p>
            <div className="p-8">
                <p className=" mb-6 text-xl font-medium">By Interaction Type</p>
                <PieChart className="w-11/12 mx-auto" style={{ width: '100%', maxWidth: '500px', maxHeight: '60vh', aspectRatio: 1 }} responsive>
                    <Pie
                        data={pieData}
                        innerRadius="80%"
                        outerRadius="100%"
                        // Corner radius is the rounded edge of each pie slice
                        fill="#8884d8"
                        cornerRadius="50%"
                        // padding angle is the gap between each pie slice
                        paddingAngle={5}
                        dataKey="value"
                        isAnimationActive={true}
                    />

                    <Tooltip/>
                    {/*don't know why..... margin is not working*/}
                    <Legend  wrapperStyle={{paddingTop:40}}/>
                </PieChart>
            </div>
        </div>
    );
};

export default Stats;