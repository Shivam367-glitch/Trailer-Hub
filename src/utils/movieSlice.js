import { createSlice } from "@reduxjs/toolkit";
 
const movieSlice=createSlice(
    {
        name:'movie',
        initialState:{
            nowPlayingMovies:null,
            popularMovies:null,
            topRatedMovies:null,
            upcomingMovies:null,
            viewedMovie:null
        },
        reducers:{
            addNowPlayingMovies:(state,action)=>{
                console.log("addNowPlayingMovies")
                state.nowPlayingMovies= action.payload;
            },
            addPopularMovies:(state,action)=>{
                console.log("addPopularMovies")
                state.popularMovies= action.payload;
            },
            addTopRatedMovies:(state,action)=>{
                console.log("addTopRatedMovies")
                state.topRatedMovies= action.payload;
            },
            addUpcomingMovies:(state,action)=>{
                console.log("addUpcomingMovies")
                state.upcomingMovies= action.payload;
            },
            addViewedMovie:(state,action)=>{
                console.log("addViwedMovie")
                state.viewedMovie=action.payload
            },
            removeViewedMovie:(state)=>{
                console.log("removeViewedMovie")
                state.viewedMovie=null;
            }
        }
    }
); 


export const {addNowPlayingMovies,addPopularMovies,addTopRatedMovies,addUpcomingMovies,addViewedMovie,removeViewedMovie}=movieSlice.actions
export default movieSlice.reducer 
