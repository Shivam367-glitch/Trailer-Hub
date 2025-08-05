import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {API_OPTIONS} from "../utils/Constants" 
import {BASE_URL} from "../utils/Constants"



export const fetchPeople = createAsyncThunk(
    'people/fetchPeople',
    async (query) => {
        const response = await fetch(`${BASE_URL}search/person?query=${encodeURIComponent(query)}`, API_OPTIONS);

        if (!response.ok) {
            throw new Error(`Error: ${response.status} ${response.statusText}`);
        }

         const data = await response.json(); 
         const filteredPerson = data.results.filter(actor => actor.profile_path !== null);
        return filteredPerson;
    }
);





const peopleSlice = createSlice({
    name: 'people',
    initialState: {
        peopleList: [],
        status: 'idle',
        error: null,
        viewedPeople:null,
        viewedPeopleMovies:[],
        popularPeople:[]
    },
    reducers: {
        addViewedPeople:(state,action)=>{
            console.log("addViewedPeople")
            state.viewedPeople=action.payload
        },
        removeViewedPeople:(state)=>{
            console.log("removeViewedPeople")
            state.viewedPeople=null;
        }, 
        addPopularPeople:(state,action)=>{
            console.log("addPopularPeople")
            state.popularPeople=action.payload
        },
        removePopularPeople:(state)=>{
            console.log("removePopularPeople")
            state.popularPeople=[];
        },
        addViewedPeopleMovies:(state,action)=>{ 
            state.viewedPeopleMovies=action.payload;
        },
        removeViewedPeopleMovies:(state)=>{
            state.viewedPeopleMovies=[];
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

export const {addViewedPeople,removeViewedPeople,addViewedPeopleMovies,addPopularPeople,removePopularPeople,removeViewedPeopleMovies}=peopleSlice.actions
export default peopleSlice.reducer;
