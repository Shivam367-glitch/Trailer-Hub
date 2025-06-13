import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";    
import { API_OPTIONS, BASE_URL } from "./Constants";


export const fetchDiscover = createAsyncThunk(
    'discover/fetchDiscover',
    async ({country,page,endpoint,people})    => {
        console.log(country,page,endpoint);
        
        const response = await fetch(
        `${BASE_URL}${people ? "person/popular" : "movie/" + endpoint}?page=${page}&region=${country}`,
            API_OPTIONS
        );


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
        items: [],
        page: 1,
        total_pages: 0,
        status: 'idle',
        error: null,
    },
    reducers: {
        setPage: (state, action) => {
            state.page = action.payload;
        },
        resetDiscover: (state) => {
            state.items = [];
            state.page = 1;
            state.total_pages = 0;
            state.status = 'idle';
            state.error = null;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchDiscover.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchDiscover.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.items = action.payload.results;

                 state.total_pages = action.payload.total_pages;
            })
            .addCase(fetchDiscover.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    }
});

export const { setPage, resetDiscover } = discoverSlice.actions;
export default discoverSlice.reducer;   