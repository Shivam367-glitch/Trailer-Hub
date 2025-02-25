import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"
import movieReducer from "./movieSlice";
import nowPlayingReducer from "./nowPlayingSlice";
import gptReducer from "./gptSlice";
import peopleReducer from "./peopleSlice"; 
import watchHistoryReducer from "./watchHistorySlice";
//  Register Reducers in the Store
const appStore=configureStore(
    {
        reducer:{
            user:userReducer,
            movie:movieReducer,
            nowPlaying:nowPlayingReducer, 
            gpt:gptReducer,
            people:peopleReducer,
            watchHistory: watchHistoryReducer
        }
    }
)

export default appStore