 import React from 'react'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'
 
 const MainContainer = () => {
   return (
    <>
    <div>
   <ButtonList/>
   <VideoContainer/>
    </div>


    {/* <div className='flex w-full'>
    <div>
      <Sidebar className="w-[250px] h-screen"></Sidebar>
    </div>
     <div className='flex-grow'>
        <ButtonList/>
        <VideoContainer/>
     </div>
    </div> */}

    </>

   )
 }
 
 export default MainContainer