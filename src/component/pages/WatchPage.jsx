import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/AppSlice";
import { useSearchParams } from "react-router-dom";
import { videoApi } from "../utils/Constant";
import VideoDetails from "./VideoDetails";
import { addCurrentVideo } from "../utils/CurrentVideoSlice";
// import { useSelector } from 'react-redux';

const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");

  //   const currentVideo = useSelector(store => store.currVideo.currentVideo);
  const video = async () => {
    const data = await fetch(videoApi + videoId);
    const json = await data.json();
    const videoData = json.items[0];
    dispatch(addCurrentVideo(videoData));
  };

  useEffect(() => {
    dispatch(closeMenu());
    video();
  }, []);

  return (
    <>
      <div className="w-full max-w-4xl aspect-video ml-2  mb-4 mt-24">
        <iframe
          className="w-full h-full"
          src={"https://www.youtube.com/embed/" + videoId}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <VideoDetails />
      </div>
    </>
  );
};

export default WatchPage;
