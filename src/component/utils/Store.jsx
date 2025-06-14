import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./AppSlice"
import currentVideo from "./CurrentVideoSlice";

const store = configureStore({
    reducer:{
        app: appSlice,
        currVideo: currentVideo,
    }
});

export default store;