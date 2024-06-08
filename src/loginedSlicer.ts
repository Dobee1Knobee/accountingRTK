import {createSlice} from "@reduxjs/toolkit";

export const loginedSlicer = createSlice({
    name:"system",
    initialState:{
        firstName:"Ivan",
        lastName:"Ivanov",
        login:"IvanovIvan",
        role:"User"
    },
    reducers: {
        loginUser(state,action){
                state.firstName = action.payload.firstName;
                state.lastName = action.payload.lastName;
                state.role = action.payload.role
                state.login = action.payload.login
        },
        logOut(state,action){
            state.firstName = "";
            state.lastName = "";
            state.role = "";
            state.login = "";
        }
    }

})
export const {loginUser,logOut} = loginedSlicer.actions
 export default loginedSlicer