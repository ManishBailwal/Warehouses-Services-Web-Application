import { createSlice } from "@reduxjs/toolkit";

const initialState={
    firstname:'',
    lastname:'',
    username:'',
    email:'',
    profileImage:''
}

const userDataSlice=createSlice({
    name:"userdata",
    initialState:initialState,
    reducers:{
        setData:(state,action)=>{
            const data=action.payload
            state.firstname=data.firstname
            state.lastname=data.lastname;
            state.email=data.email;
            state.username=data.username;
            state.profileImage=data.profileImage;
        }
    }
})

export default userDataSlice;
export const userDataActions=userDataSlice.actions;