import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";




export const fetchCountry = createAsyncThunk(
    'country/fetchCountry',
    async () => {
        const response = await fetch(`https://ipinfo.io/json`);

        if (!response.ok) {
            throw new Error(`Error: ${response.status} ${response.statusText}`);
        }

        const data = await response.json(); 
        
        return data.country;
    }
); 


const countrySlice=createSlice({
    name:'country',
    initialState:{
        country:'IN',
        status:'idle',
        error:null,
    }, 
    extraReducers: (builder) => {
            builder
                .addCase(fetchCountry.pending, (state) => {
                    state.status = 'loading';
                     
                })
                .addCase(fetchCountry.fulfilled, (state, action) => {
                    state.status = 'succeeded';
                    state.country = action.payload;
    
                })
                .addCase(fetchCountry.rejected, (state, action) => {
                    state.status = 'failed';
                    state.error = action.error.message;
                });
        }
}); 


export default countrySlice.reducer;