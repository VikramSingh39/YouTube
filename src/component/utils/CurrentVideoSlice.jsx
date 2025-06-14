import { createSlice } from "@reduxjs/toolkit";

const currentVideoSlice = createSlice(
    {
        name: "currentVideo",
        initialState:{
            currentVideo: "",
        },
        reducers:{
            addCurrentVideo: (state, action)=>{
                state.currentVideo = action.payload;
            }
        }
    }
)

export const {addCurrentVideo} = currentVideoSlice.actions;

export default currentVideoSlice.reducer;