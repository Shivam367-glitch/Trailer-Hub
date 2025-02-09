import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_KEY = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNzk4ZTNlYjkzYTdhZWMxYjM4NWI5MWFhODEwYTg3NyIsIm5iZiI6MTcyNjQ2NjU5NS43NTYsInN1YiI6IjY2ZTdjYTIzMDUwZjE0ZTRmY2NmZDM2MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4n2Xp1SGlomNln_xeHvMrTvcdxo6uS-eg-j2eZ9et-U'; // Replace with your actual API key

export const fetchPeople = createAsyncThunk(
    'people/fetchPeople',
    async (query) => {
        const response = await axios.get(`https://api.themoviedb.org/3/search/person`, {
            headers: {
                accept: 'application/json',
                Authorization: API_KEY  // Correct usage of Bearer Token
            },
            params: {
                query: query
            }
        });
        return response.data.results;
    }
); 

console.log(fetchPeople);


const peopleSlice = createSlice({
    name: 'people',
    initialState: {people: [],status: 'idle', error: null},
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPeople.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchPeople.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.people = action.payload;
            })
            .addCase(fetchPeople.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    }
});

export default peopleSlice.reducer;
