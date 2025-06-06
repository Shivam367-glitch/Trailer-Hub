import { createSlice } from "@reduxjs/toolkit";
 

const categorySlice=createSlice({
    name:'category',
    initialState:{
        movies:null,
        id:null
    },
    reducers:{
         addMovies:(state,action)=>{
              state.movies= action.payload.movies;
            state.id= action.payload.id;
            }
    }
});


export const {addMovies}=categorySlice.actions

export default categorySlice.reducer