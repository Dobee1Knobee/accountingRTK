import { createSlice } from "@reduxjs/toolkit";

export const accountSlice = createSlice({
    name:"account",
    initialState:{
        login:"",
        firstName:"",
        lastName:"",
        roles:[]
    },
    reducers: {
        getUser(state, action) {
                state = action.payload
        }
    }

})

export const {getUser} = accountSlice.actions;
export default accountSlice