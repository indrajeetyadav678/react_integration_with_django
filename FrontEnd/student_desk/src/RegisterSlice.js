import { createSlice } from "@reduxjs/toolkit";

const initialState={
    user_datalist:[],
    user_data:{}
}



const RegisterSlice=createSlice({
    name:"Regist",
    initialState:initialState,
    reducers:({
        data_fetch:(state, action)=>{
            console.log(action)
            state.user_datalist=action.payload
        },
        login_user:(state, action)=>{
            state.user_data=action.payload
        }
    })
})

export const {data_fetch, login_user}=RegisterSlice.actions;
export default RegisterSlice.reducer;