import React from 'react'
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';
import Head from './Head';


const Body = () => {
  return (
    <div className=''>
         <Head/>
        <Sidebar/>
        <Outlet/>
    </div>
  )
}

export default Body