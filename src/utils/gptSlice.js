import { createSlice } from "@reduxjs/toolkit";

const gptSlice=createSlice({
    name:'gpt',
    initialState:{
        recommendedMovies:null
    },
    reducers:{
        addRecommendedMovies:(state,action)=>{
            console.log("addRecommendedMovies");
            
              state.recommendedMovies=action.payload
        }
    }
}); 
 

export const {addRecommendedMovies}=gptSlice.actions;

export default gptSlice.reducer