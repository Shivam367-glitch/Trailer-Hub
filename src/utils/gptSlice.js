import { createSlice } from "@reduxjs/toolkit";

const gptSlice=createSlice({
    name:'gpt',
    initialState:{
        showGptSearch:false,
        recommendedMovies:null
    },
    reducers:{
        toggleGpt:(state,action)=>{
            console.log("toggleGpt");
            
              state.showGptSearch=action.payload
        },
        hideGpt:(state)=>{ 
            console.log("hideGpt");
            
          state.showGptSearch=false;
        },
        addRecommendedMovies:(state,action)=>{
            console.log("addRecommendedMovies");
            
              state.recommendedMovies=action.payload
        }
    }
}); 
 

export const {toggleGpt,addRecommendedMovies,hideGpt}=gptSlice.actions;

export default gptSlice.reducer