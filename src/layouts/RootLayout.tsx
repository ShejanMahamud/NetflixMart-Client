import { useState } from "react";
import { BsBuildingAdd } from "react-icons/bs";
import { FiBookmark } from "react-icons/fi";
import {
  IoArrowBackOutline,
  IoCloseOutline,
  IoMenuOutline,
  IoSettingsOutline,
  IoWalletOutline,
} from "react-icons/io5";
import { LuUserCircle2 } from "react-icons/lu";
import { MdOutlineReviews } from "react-icons/md";
import { RiStackFill } from "react-icons/ri";
import { NavLink, Outlet } from "react-router-dom";

const UserDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  // const currentYear = new Date().getFullYear();

  return (
    <>
      <div className="w-full h-screen lg:grid lg:grid-cols-[20%_80%] grid grid-cols-[1fr]">
        <button
          className="hidden fixed top-2 z-50 bg-black text-white p-2 "
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          {sidebarOpen ? <IoCloseOutline /> : <IoMenuOutline />}
        </button>

        <div
          className={`fixed lg:static top-0 left-0 w-full  h-full bg-[#181818] py-10 px-5 lg:px-3 lg:px-5 overflow-y-auto transform transition-transform ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          } lg:translate-x-0 z-20`}
        >
          <div className="flex flex-col w-full items-center gap-2 mb-5">
            <img
              src={"https://i.ibb.co.com/c64j43x/student.png"}
              alt=""
              className="w-20 h-20 rounded-full border border-primary object-cover"
            />
            <h1 className="text-xl text-white font-medium">Shejan Mahamud</h1>
            <span className="text-[#7F7F7F] text-xs">User Dashboard</span>
          </div>
          <div className="w-full flex flex-col items-start">
            <NavLink
              end
              className={({ isActive }) =>
                isActive
                  ? "bg-[#030303] text-white rounded-lg w-full flex items-center gap-3 py-3 px-3"
                  : "w-full flex items-center gap-3 py-3 px-3 text-[#767F8C]"
              }
              to={"/overview"}
            >
              <RiStackFill className="text-xl" />
              <span className="text-base">Overview</span>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "bg-[#030303] text-white rounded-lg w-full flex items-center gap-3 py-3 px-3"
                  : "w-full flex items-center gap-3 py-3 px-3 text-[#767F8C]"
              }
              to={"/dashboard/user/profile"}
            >
              <LuUserCircle2 className="text-xl" />
              <span className="text-base">User Profile</span>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "bg-[#030303] text-white rounded-lg w-full flex items-center gap-3 py-3 px-3"
                  : "w-full flex items-center gap-3 py-3 px-3 text-[#767F8C]"
              }
              to={"/dashboard/user/wishlist"}
            >
              <FiBookmark className="text-xl" />
              <span className="text-base">Wishlist Properties</span>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "bg-[#030303] text-white rounded-lg w-full flex items-center gap-3 py-3 px-3"
                  : "w-full flex items-center gap-3 py-3 px-3 text-[#767F8C]"
              }
              to={"/wallet"}
            >
              <IoWalletOutline className="text-xl" />
              <span className="text-base">Wallet</span>
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "bg-[#030303] text-white rounded-lg w-full flex items-center gap-3 py-3 px-3"
                  : "w-full flex items-center gap-3 py-3 px-3 text-[#767F8C]"
              }
              to={"/settings"}
            >
              <IoSettingsOutline className="text-xl" />
              <span className="text-base">Settings</span>
            </NavLink>
          </div>
          <div className="flex items-center w-full justify-between mt-5">
            <button className="flex items-center gap-2 text-[#F10A0A]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <path
                  d="M13 17L14 17C14.7956 17 15.5587 16.6839 16.1213 16.1213C16.6839 15.5587 17 14.7956 17 14L17 4C17 3.20435 16.6839 2.44129 16.1213 1.87868C15.5587 1.31607 14.7956 1 14 1L13 1M5 5L1 9M1 9L5 13M1 9L13 9"
                  stroke="#F10A0A"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>Logout</span>
            </button>
            <button className="flex items-center gap-2 text-white">
              <IoArrowBackOutline className="text-xl" />
              <span>Back Home</span>
            </button>
          </div>
        </div>
        <div className="lg:col-start-2 col-span-1 h-full z-10 overflow-y-auto bg-[#FAFBFE]">
          <Outlet />
          {/* <div className="w-full border-t border-[#E4E5E8] flex items-center justify-center py-5">
            <p className="text-[#767F8C] text-sm">
              @ {currentYear} NestQuest - All rights Reserved
            </p>
          </div> */}
        </div>
      </div>
      {/* Mobile Menu in bottom */}
      <div className="lg:hidden fixed bottom-0 left-0 w-full bg-black py-3 flex justify-between items-center px-5 z-50">
        <NavLink
          end
          className={({ isActive }) =>
            isActive
              ? "text-white flex flex-col items-center"
              : "text-[#767F8C] flex flex-col items-center"
          }
          to={"/overview"}
        >
          <RiStackFill className="text-lg" />
          <span className="text-[10px]">Overview</span>
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-white flex flex-col items-center"
              : "text-[#767F8C] flex flex-col items-center"
          }
          to={"/dashboard/user/profile"}
        >
          <LuUserCircle2 className="text-lg" />
          <span className="text-[10px]">Profile</span>
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-white flex flex-col items-center"
              : "text-[#767F8C] flex flex-col items-center"
          }
          to={"/dashboard/user/wishlist"}
        >
          <FiBookmark className="text-lg" />
          <span className="text-[10px]">Wishlist</span>
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-white flex flex-col items-center"
              : "text-[#767F8C] flex flex-col items-center"
          }
          to={"/dashboard/user/bought"}
        >
          <BsBuildingAdd className="text-lg" />
          <span className="text-[10px]">Bought</span>
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-white flex flex-col items-center"
              : "text-[#767F8C] flex flex-col items-center"
          }
          to={"/dashboard/user/reviews"}
        >
          <MdOutlineReviews className="text-lg" />
          <span className="text-[10px]">Reviews</span>
        </NavLink>
      </div>
    </>
  );
};

export default UserDashboard;
