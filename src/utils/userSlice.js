import { createSlice } from "@reduxjs/toolkit";

const userSlice =createSlice(
    {
        name:'user',
        initialState: null,
        reducers:{
            addUser:(state,action)=>{
                console.log("addUser")
                
                
                return action.payload;
            },
            removeUser:(state,action)=>{
                console.log("removeUser")
                return null;
            }
        }
    }
)


export const {addUser,removeUser}=userSlice.actions

export default userSlice.reducer;