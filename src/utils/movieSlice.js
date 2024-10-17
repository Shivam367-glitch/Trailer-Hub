import { createSlice } from "@reduxjs/toolkit";

const movieSlice=createSlice(
    {
        name:'movie',
        initialState:{
            nowPlayingMovies:null,
            popularMovies:null,
            topRatedMovies:null,
            upcomingMovies:null,
            viwedMovie:null

        },
        reducers:{
            addNowPlayingMovies:(state,action)=>{
                state.nowPlayingMovies= action.payload;
            },
            addPopularMovies:(state,action)=>{
                state.popularMovies= action.payload;
            },
            addTopRatedMovies:(state,action)=>{
                state.topRatedMovies= action.payload;
            },
            addUpcomingMovies:(state,action)=>{
                state.upcomingMovies= action.payload;
            },
            addViwedMovie:(state,action)=>{
                state.viwedMovie=action.payload
            },
            removeViwedMovie:(state)=>{
                state.viwedMovie=null;
            }
        }
    }
); 


export const {addNowPlayingMovies,addPopularMovies,addTopRatedMovies,addUpcomingMovies,addViwedMovie,removeViwedMovie}=movieSlice.actions
export default movieSlice.reducer 
