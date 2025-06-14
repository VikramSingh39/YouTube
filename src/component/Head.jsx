import { IoIosSearch } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import youtubeLogo from '../assets/youtubeLogo.svg'
import { toggleMenu } from "./utils/AppSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";


const Head = () => {
  
  const dispatch = useDispatch();
  const toggleMenuHandler = ()=>{
  dispatch(toggleMenu())
  }
  return (
    <>
    <div className="header flex justify-between items-center py-6 w-[95%] mx-auto my-3 fixed bg-white top-[-20px]">
    <div className="flex gap-8 items-center">
      <div >
       <i onClick={toggleMenuHandler} className="ri-menu-line text-2xl cursor-pointer ml-6"></i>
      </div>
      
      <Link to={"/"}>
      <img className="w-[100px] cursor-pointer" src={youtubeLogo} alt="" />
       </Link>
    </div>

     <div className="relative w-[30%]">
      <input type="text" className="bg-white text-xl w-[100%] border-black border-2 rounded-full py-[6px] px-6 " placeholder="Search"/>
      <IoIosSearch className='text-4xl hidden md:block absolute top-[10%] right-[5%] cursor-pointer'/>
     </div>
     
     <div>
     <FaUser className='text-3xl cursor-pointer'/>
     </div>
    </div>

    </>
    
  )
}

export default Head