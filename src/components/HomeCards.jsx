import { pendingleaves } from "../constants/data.js"
import totalapplied from "../assets/Home/totalapplied.png"
import totalabsent from "../assets/Home/totalabsent.png"
const HomeCard = () => {
    return (
        <div className="grid px-[5.3rem] pt-28 min-h-full grid-cols-3 gap-x-[2.1rem] gap-y-[5.375rem] mt-12 
        grid-rows-[repeat(3,212px)]
        ">
            {
                pendingleaves.map((item) => (
                    <div key={item.id} className="relative flex justify-center items-end rounded-[15px] from-[#81B9F9] to-[#C8FEFE] bg-gradient-to-r">
                        <img src={item.imgsrc} alt="" className="absolute -top-[35%]" />
                        <div className="flex flex-col gap-2 items-center mb-10">
                            <h1 className="text-5xl font-bold text-[#0478FF]" >{item.count} day</h1>
                            <p className="text-2xl text-[#0E1A45] font-[500]">
                                {item.type}
                            </p>
                        </div>
                    </div>

                ))
            }
            <div className="flex justify-center items-end rounded-[15px] from-[#81B9F9] to-[#C8FEFE] bg-gradient-to-r">
                <div className="flex flex-col gap-2 items-center mb-10">
                    <img src={totalapplied} alt="" className="" />
                    <h1 className="text-5xl font-bold text-[#0478FF] mt-4" >{0} day</h1>
                    <p className="text-2xl text-[#0E1A45] font-[500]">
                    Total Applied Leave
                    </p>
                </div>
            </div>
            <div className="flex justify-center items-end rounded-[15px] from-[#81B9F9] to-[#C8FEFE] bg-gradient-to-r">
                <div className="flex flex-col gap-2 items-center mb-10">
                    <img src={totalabsent} alt="" className="" />
                    <h1 className="text-5xl font-bold text-[#0478FF] mt-4" >{0} day</h1>
                    <p className="text-2xl text-[#0E1A45] font-[500]">
                    Total Absent + Penalty
                    </p>
                </div>
            </div>
        </div>
    )
}

export default HomeCard