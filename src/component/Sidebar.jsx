import React from "react";
import { IoHomeSharp } from "react-icons/io5";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { FaHistory } from "react-icons/fa";
import { MdOutlinePlaylistPlay } from "react-icons/md";
import { BiSolidVideos } from "react-icons/bi";
import { MdOutlineCastForEducation } from "react-icons/md";
import { MdWatchLater } from "react-icons/md";
import { BiSolidLike } from "react-icons/bi";
import { IoMdTrendingUp } from "react-icons/io";
import { FaShoppingBag } from "react-icons/fa";
import { FaMusic } from "react-icons/fa";
import { IoFilmSharp } from "react-icons/io5";
import { MdOnlinePrediction } from "react-icons/md";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector(store => store.app.isMenuOpen);
  if(!isMenuOpen) return null;

  return (
    <div className="py-5 px-8 shadow-lg absolute bg-white fixed top-[10%] h-screen">

        <div className="pb-3">
          <ul className="flex flex-col gap-4">
            <li>
              <Link to={"/"} className="flex items-center gap-2">
              <IoHomeSharp /><span>Home</span>            
              </Link>
            </li>

            <li className="flex items-center gap-2">
              <SiYoutubeshorts />
              <span>Shorts</span>
            </li>

            <li className="flex items-center gap-2">
              <MdSubscriptions />
              <span>Subscription</span>
            </li>
          </ul>
        </div>


      <div className="pb-3">
        <h1 className="font-bold my-3 text-xl">You</h1>

        <ul className="flex flex-col gap-4">
          <li className="flex items-center gap-2">
            <FaHistory />
            <span>History</span>
          </li>

          <li className="flex items-center gap-2">
            <MdOutlinePlaylistPlay />
            <span>PlayList</span>
          </li>

          <li className="flex items-center gap-2">
            <BiSolidVideos />
            <span>Your Videos</span>
          </li>

          <li className="flex items-center gap-2">
            <MdOutlineCastForEducation />
            <span className="w-fit">Your Courses</span>
          </li>

          <li className="flex items-center gap-2">
            <MdWatchLater />
            <span>Watch Later</span>
          </li>
          <li className="flex items-center gap-2">
            <BiSolidLike />
            <span>Liked Videos</span>
          </li>
        </ul>
      </div>

      <div>
          <h1 className="font-bold my-3 text-xl">Explore</h1>
          <ul className="flex flex-col gap-4">
            <li className="flex items-center gap-2">
              <IoMdTrendingUp />
              <span>Trending</span>
            </li>

            <li className="flex items-center gap-2">
              <FaShoppingBag />
              <span>Shopping</span>
            </li>

            <li className="flex items-center gap-2">
              <FaMusic />
              <span>Music</span>
            </li>

            <li className="flex items-center gap-2">
              <IoFilmSharp />
              <span>Films</span>
            </li>

            <li className="flex items-center gap-2">
              <MdOnlinePrediction />
              <span>Live</span>
            </li>
          </ul>
      </div>

      

      </div>
  );
};

export default Sidebar;
