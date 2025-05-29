import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";    
import { API_OPTIONS, BASE_URL } from "./Constants";


export const fetchDiscover = createAsyncThunk(
    'discover/fetchDiscover',
    async ({country,page,category})    => {
        console.log(country,page,category);
        
        const response = await fetch(`${BASE_URL}movie/${category}?page=${page}&region=${country}`, API_OPTIONS);


       if (!response.ok) {
            throw new Error(`Error: ${response.status} ${response.statusText}`);
        }

        const data = await response.json(); 
        return data;
    }
);


const discoverSlice = createSlice({
    name: 'discover',
    initialState: {
        movies: [],
        total_pages: 0,
        status: 'idle',
        error: null,
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchDiscover.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchDiscover.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.movies = action.payload.results;

                 state.total_pages = action.payload.total_pages;
            })
            .addCase(fetchDiscover.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    }
});


export default discoverSlice.reducer;