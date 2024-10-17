import { createSlice } from "@reduxjs/toolkit";

const nowPlaying=createSlice(
    {
        name:"nowPlaying",
        initialState:{
            id:null,
            videoId:null
        },
        reducers:{
            addNowPlayingVideo:(state,action)=>{
               state.id=action.payload.id,
               state.videoId=action.payload.videoId 
            }
        }
    }
); 



export const {addNowPlayingVideo}=nowPlaying.actions

export default nowPlaying.reducer