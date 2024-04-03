import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
    name: "login",

    initialState: {
        name: "Gonzalez Pinto",
        firstName: "Ugo",
        email: "ugogonzalez50@gmail.com"
    },

    reducers: {

        loginName: ((state, action) => {
            state.name = action.payload
        }),

        loginFirstName: ((state, action) => {
            state.firstName = action.payload
        }),

        loginEmail: ((state, action) => {
            state.email = action.payload
        })

    }
})

export const {loginName, loginFirstName, loginEmail} = loginSlice.actions

export default loginSlice.reducer