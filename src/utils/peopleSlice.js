import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {API_OPTIONS} from "../utils/Constants"
export const fetchPeople = createAsyncThunk(
    'people/fetchPeople',
    async (query) => {
        const response = await fetch(`https://api.themoviedb.org/3/search/person?query=${query}`,API_OPTIONS);

        if (!response.ok) {
            throw new Error(`Error: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        return data.results;
    }
);





const peopleSlice = createSlice({
    name: 'people',
    initialState: {
        peopleList: [],
        status: 'idle',
        error: null,
        viewedPeople:null
    },
    reducers: {
        addViewedPeople:(state,action)=>{
            console.log("addViewedPeople")
            state.viewedPeople=action.payload
        },
        removeViewedPeople:(state)=>{
            console.log("removeViewedPeople")
            state.viewedPeople=null;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPeople.pending, (state) => {
                state.status = 'loading';
                state.peopleList=[];
            })
            .addCase(fetchPeople.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.peopleList = action.payload;

            })
            .addCase(fetchPeople.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    }
});

export const {addViewedPeople,removeViewedPeople}=peopleSlice.actions
export default peopleSlice.reducer;
