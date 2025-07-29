import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {API_OPTIONS} from "../utils/Constants" 
import {BASE_URL} from "../utils/Constants"


export const fetchMovie = createAsyncThunk(
    'movieSearch/fetchMovie',
    async (query) => {

        const response = await fetch(`${BASE_URL}search/movie?query=${encodeURIComponent(query)}`, API_OPTIONS);

        if (!response.ok) {
            throw new Error(`Error: ${response.status} ${response.statusText}`);
        }

        const data = await response.json(); 
         return data.results;
    }
); 


const searchMovieSlice=createSlice({
    name:"movieSearch",
    initialState:{
        movieList:[],
        status:"idle",
        error:null
    },
     extraReducers: (builder) => {
            builder
                .addCase(fetchMovie.pending, (state) => {
                    state.status = 'loading';
                    state.movieList=[];
                })
                .addCase(fetchMovie.fulfilled, (state, action) => {
                    state.status = 'succeeded';
                    state.movieList = action.payload;

                })
                .addCase(fetchMovie.rejected, (state, action) => {
                    state.status = 'failed';
                    state.error = action.error.message;
                });
        }
})




export default searchMovieSlice.reducer