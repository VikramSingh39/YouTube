import { BiSolidLike } from "react-icons/bi";
import { BiSolidDislike } from "react-icons/bi";
import { RiShareForwardFill } from "react-icons/ri";
import { TfiDownload } from "react-icons/tfi";
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';

const VideoDetails = () => {
const videoData = useSelector(store => store.currVideo.currentVideo);
const { snippet, statistics, thumbnails } = videoData || {};

let like;
if(statistics){
statistics.likeCount > 1000 ? (like = Math.floor(statistics?.likeCount/1000)+ 'K'): (like = statistics.likeCount)
}


useEffect(() => {
}, [videoData]);

  return (
    <>
    <div className='my-2.5'>
    {snippet && <h2><strong className='text-[22px]'>{snippet.title}</strong></h2>}
    <div className="flex flex-wrap gap-4 justify-between"> 
        <div>
       {snippet && <strong> {snippet.channelTitle}</strong>}
      <button className='bg-black px-4 py-2 cursor-pointer text-white rounded-full ml-4'>Subscribe</button>
        </div>

     <div className="flex  gap-3 items-center">
        <button className="flex gap-1 items-center  bg-gray-500 px-4 py-2 cursor-pointer text-white rounded-full "><BiSolidLike className="text-2xl"/><span>{like}</span> <BiSolidDislike className="text-[1rem] ml-3"/></button>
       
       <button className="flex bg-gray-500 px-4 py-2 cursor-pointer text-white rounded-full "><RiShareForwardFill className="text-[1rem] mr-2"/><span> Share</span></button>
       
       <button className="flex bg-gray-500 px-4 py-2 cursor-pointer text-white rounded-full "><TfiDownload className="text-[1rem] font-extrabold mr-2"/><span>Download</span></button>
       
     </div>
    </div>

    </div>

    </>

  )
}

export default VideoDetails; 