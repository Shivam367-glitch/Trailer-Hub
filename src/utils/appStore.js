import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"
import movieReducer from "./movieSlice";
import nowPlayingReducer from "./nowPlayingSlice";
import gptReducer from "./gptSlice";
import peopleReducer from "./peopleSlice"; 
import watchHistoryReducer from "./watchHistorySlice";
import categoryReducer from "./categorySlice";
import countryReducer from "./countrySlice";
//  Register Reducers in the Store
const appStore=configureStore(
    {
        reducer:{
            user:userReducer,
            movie:movieReducer,
            nowPlaying:nowPlayingReducer, 
            gpt:gptReducer,
            people:peopleReducer,
            watchHistory: watchHistoryReducer,
            category:categoryReducer, 
            country:countryReducer
        }
    }
)

export default appStore