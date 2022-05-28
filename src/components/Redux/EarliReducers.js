import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    firstname: "",
    lastname: "",
    email: "",
    password: ""
}

const EarliReducers = createSlice({
    name: "EarliReducers",
    initialState,
    reducers: {
        addFirstname: (state, {payload})=>{
            state.firstname = payload
        },
        addLastname: (state, {payload})=>{
            state.lastname = payload
        },
        addEmail: (state, {payload})=>{
            state.email = payload
        },
        addPassword: (state, {payload})=>{
            state.password = payload
        },
    }
})

export const {addFirstname,addLastname,addEmail,addPassword} = EarliReducers.actions

export default EarliReducers.reducer