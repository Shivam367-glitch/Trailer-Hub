import { createSlice } from "@reduxjs/toolkit";
 

const categorySlice=createSlice({
    name:'category',
    initialState:{
        movies:null
    },
    reducers:{
         addMovies:(state,action)=>{
              state.movies= action.payload;
            }
    }
});


export const {addMovies}=categorySlice.actions

export default categorySlice.reducer