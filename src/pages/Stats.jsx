import { useContext } from "react";
import { FriendContext } from "../context/AllContext";
import { Legend, Pie, PieChart, Tooltip } from 'recharts';
import NoData from "../components/NoData";



const Stats = () => {
    const { pieData } = useContext(FriendContext);
    const interactionCnt = pieData.reduce((sum, item) => sum + item.count, 0);


    return (
        <div className="my-6 md:my-20 ">
            <p className="text-3xl md:text-5xl font-bold mb-6">Friendship Analytics</p>
            <div className="p-8">
                {interactionCnt > 0 ? <>
                    <p className=" mb-6 text-xl font-medium">By Interaction Type</p>
                    <PieChart margin={{ top: 20 }} style={{ width: '100%', maxWidth: '400px', maxHeight: '60vh', aspectRatio: 1, margin: '0 auto' }} responsive>
                        <Pie
                            data={pieData}
                            innerRadius="80%"
                            outerRadius="100%"
                            // Corner radius is the rounded edge of each pie slice
                            fill="#8884d8"
                            cornerRadius="50%"
                            // padding angle is the gap between each pie slice
                            paddingAngle={5}
                            dataKey="count"
                            isAnimationActive={true}
                        />

                        <Tooltip />
                        {/*margin top is not working*/}
                        <Legend
                            iconType="circle"
                            wrapperStyle={{ paddingTop: 20 }}
                        />
                    </PieChart></>
                    : <NoData />
                }
            </div>
        </div>
    );
};

export default Stats;