import { createSlice } from "@reduxjs/toolkit";

const nowPlaying=createSlice(
    {
        name:"nowPlaying",
        initialState:{
            id:null,
            videoId:null,
            playing:true
        },
        reducers:{
            addNowPlayingVideo:(state,action)=>{
               state.id=action.payload.id,
               state.videoId=action.payload.videoId 
            },
            togglePlaying:(state)=>{
                state.playing=!state.playing
            }
        }
    }
); 



export const {addNowPlayingVideo,togglePlaying}=nowPlaying.actions

export default nowPlaying.reducer