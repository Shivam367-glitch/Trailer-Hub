import { createSlice } from "@reduxjs/toolkit";

const gptSlice=createSlice({
    name:'gpt',
    initialState:{
        showGptSearch:false,
        recommendedMovies:null
    },
    reducers:{
        toggleGpt:(state,action)=>{
              state.showGptSearch=action.payload
        },
        hideGpt:(state)=>{
          state.showGptSearch=false;
        },
        addRecommendedMovies:(state,action)=>{
              state.recommendedMovies=action.payload
        }
    }
}); 
 

export const {toggleGpt,addRecommendedMovies,hideGpt}=gptSlice.actions;

export default gptSlice.reducer