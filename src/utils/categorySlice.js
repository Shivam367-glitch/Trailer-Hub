import { createSlice } from "@reduxjs/toolkit";


const categorySlice=createSlice({
    name:'category',
    initialState:{
        movies:null,
        id:null,
        page:1,
        total_pages:0
    },
    reducers:{
         addMovies:(state,action)=>{
              state.movies= action.payload.movies;
              state.id= action.payload.id;
              state.total_pages= action.payload.total_pages || 0;
            },
        setCategoryPage:(state, action) => {
            state.page = action.payload;
        }
    }
});


export const {addMovies,setCategoryPage}=categorySlice.actions

export default categorySlice.reducer