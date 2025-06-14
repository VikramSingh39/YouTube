import React, { useEffect, useState } from 'react'
import {youTubeApi} from "./utils/Constant.jsx"
import VideoCard from './VideoCard.jsx'; 
import { Link } from 'react-router-dom';

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  const getVideos = async()=>{
    const data = await fetch(youTubeApi);
    const json = await data.json();
    setVideos(json.items);
  }
  useEffect(()=>{
    getVideos();
  },[])

  return (
    <div className='flex flex-wrap justify-center'>
    {videos.map((video)=> (
      <Link to={"/watch?v=" + video.id}>
      <VideoCard key={video.id} info={video}/>
      </Link>
      
    ))}

      
    </div>
  )
}

export default VideoContainer