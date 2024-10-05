import CountUp from "react-countup";
import { BiSolidShoppingBags } from "react-icons/bi";
import { BsCash } from "react-icons/bs";
import { FaArrowTrendDown, FaArrowTrendUp } from "react-icons/fa6";
import { GrGroup } from "react-icons/gr";
import { PiBagSimpleBold } from "react-icons/pi";
import { TbCalendarDue } from "react-icons/tb";

const Home = () => {
  return (
    <div className="w-full p-5 font-primary">
      <div className="flex items-start flex-col">
        <h1 className="text-xl font-medium text-[#092C4C]">
          Welcome Shejan Mahamud!
        </h1>
        <p className="text-gray-500 text-sm">
          Here is the overview of your business
        </p>
      </div>
      <div className="w-full grid lg:grid-cols-4 grid-cols- 1 row-auto items-center gap-6">
        <div className="bg-white py-6 px-4 border border-gray-300 rounded-lg flex items-center gap-4">
          <div className="h-12 w-12 flex items-center justify-center bg-[#E1F9FC] rounded-full">
            <FaArrowTrendDown className="text-[#00CFE8] text-lg" />
          </div>
          <div className="flex flex-col items-start">
            <h1 className="font-bold text-lg text-[#092C4C]">
              <CountUp
                start={0}
                end={2000}
                duration={2}
                decimal={"."}
                decimals={2}
                prefix="৳ "
              />
            </h1>
            <span className="text-gray-500 text-sm">Today Sales</span>
          </div>
        </div>
        <div className="bg-white py-6 px-4 border border-gray-300 rounded-lg flex items-center  gap-4">
          <div className="h-12 w-12 flex items-center justify-center bg-[#FEECED] rounded-full">
            <BiSolidShoppingBags className="text-[#FF9F43] text-2xl" />
          </div>
          <div className="flex flex-col items-start">
            <h1 className="font-bold text-lg text-[#092C4C]">
              <CountUp
                start={0}
                end={500}
                duration={2}
                decimal={"."}
                decimals={2}
                prefix="৳ "
              />
            </h1>
            <span className="text-gray-500 text-sm">Today Purchase</span>
          </div>
        </div>
        <div className="bg-white py-6 px-4 border border-gray-300 rounded-lg flex items-center  gap-4">
          <div className="h-12 w-12 flex items-center justify-center bg-[#E2F8ED] rounded-full">
            <BsCash className="text-[#28C76F] text-2xl" />
          </div>
          <div className="flex flex-col items-start">
            <h1 className="font-bold text-lg text-[#092C4C]">
              <CountUp
                start={0}
                end={100}
                duration={2}
                decimal={"."}
                decimals={2}
                prefix="৳ "
              />
            </h1>
            <span className="text-gray-500 text-sm">Today Cash</span>
          </div>
        </div>
        <div className="bg-white py-6 px-4 border border-gray-300 rounded-lg flex items-center  gap-4">
          <div className="h-12 w-12 flex items-center justify-center bg-[#FCE8E9] rounded-full">
            <FaArrowTrendUp className="text-[#EA5455] text-lg" />
          </div>
          <div className="flex flex-col items-start">
            <h1 className="font-bold text-lg text-[#092C4C]">
              <CountUp
                start={0}
                end={300}
                duration={2}
                decimal={"."}
                decimals={2}
                prefix="৳ "
              />
            </h1>
            <span className="text-gray-500 text-sm">Today Expense</span>
          </div>
        </div>
      </div>

      <div className="w-full grid lg:grid-cols-4 grid-cols- 1 row-auto items-center gap-6 my-12">
        <div className="bg-[#FF9F43] py-2 h-[100px] px-4 rounded-lg flex items-center gap-4 justify-between group">
          <div className="flex flex-col items-start text-white">
            <h1 className="font-bold text-xl group-hover:text-lg duration-500">
              <CountUp
                start={0}
                end={250}
                duration={2}
                decimal={"."}
                decimals={2}
                prefix="৳ "
              />
            </h1>
            <span className=" text-sm font-medium duration-500 group-hover:text-xs">
              Party Purchase Due
            </span>
          </div>
          <TbCalendarDue className="text-5xl group-hover:text-6xl duration-500 text-white" />
        </div>
        <div className="bg-[#1ECFE8] py-2 h-[100px] px-4 rounded-lg flex items-center gap-4 justify-between group">
          <div className="flex flex-col items-start text-white">
            <h1 className="font-bold text-xl group-hover:text-lg duration-500">
              <CountUp
                start={0}
                end={450}
                duration={2}
                decimal={"."}
                decimals={2}
                prefix="৳ "
              />
            </h1>
            <span className=" text-sm font-medium">Party Sales Due</span>
          </div>
          <TbCalendarDue className="text-5xl group-hover:text-6xl duration-500 text-white" />
        </div>
        <div className="bg-[#1B2850] py-2 h-[100px] px-4 rounded-lg flex items-center gap-4 justify-between group">
          <div className="flex flex-col items-start text-white">
            <h1 className="font-bold text-xl group-hover:text-lg duration-500">
              <CountUp start={0} end={500} duration={2} suffix=" +" />
            </h1>
            <span className=" text-sm font-medium">Total Party</span>
          </div>
          <GrGroup className="text-5xl group-hover:text-6xl duration-500 text-white" />
        </div>
        <div className="bg-[#4BC770] py-2 h-[100px] px-4 rounded-lg flex items-center gap-4 justify-between group">
          <div className="flex flex-col items-start text-white">
            <h1 className="font-bold text-xl group-hover:text-lg duration-500">
              <CountUp start={0} end={400} duration={2} suffix=" +" />
            </h1>
            <span className=" text-sm font-medium">Total Bags</span>
          </div>
          <PiBagSimpleBold className="text-5xl group-hover:text-6xl duration-500 text-white" />
        </div>
      </div>
    </div>
  );
};

export default Home;
