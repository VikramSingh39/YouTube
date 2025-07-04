import React from 'react'

const VideoCard = ({info}) => {
    console.log(info);
    const{snippet, statistics} = info;
    const {channelTitle, title, thumbnails} = snippet;
  return (
    <div className="p-2 m-2 w-72 shadow-lg">
        <img className="rounded-lg" src={thumbnails.medium.url} alt="Thumbnail" />
        <ul>
            <li className="font-bold py-2">{title}</li>
            <li className='text-gray-500'>{channelTitle}</li>
            <li className='text-gray-500'>{statistics.viewCount} Views</li>
        </ul>
    </div>
  )
}

export default VideoCard