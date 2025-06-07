import { createSlice } from "@reduxjs/toolkit";
 

const categorySlice=createSlice({
    name:'category',
    initialState:{
        movies:null,
        id:null,
        total_pages:0
    },
    reducers:{
         addMovies:(state,action)=>{
              state.movies= action.payload.movies;
              state.id= action.payload.id;
              state.total_pages= action.payload.total_pages || 0;
            }
    }
});


export const {addMovies}=categorySlice.actions

export default categorySlice.reducer