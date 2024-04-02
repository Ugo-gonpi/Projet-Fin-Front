import { createSlice } from "@reduxjs/toolkit"

export const themeSlice = createSlice({
    name: "themes",

    initialState: {
        style: "light",
        backgroundHeader: "bg-[#007f8e]",
        backgroundMain: "bg-[#001933]",
        backgroundFooter: "bg-[#007f8e]",
        backgroundCards: "bg-[#007f8e]",
        textColor: "text-[#00fdff]",
        borderCards: "border-[#00aeb8]",
        backgroundButtons: "bg-[#003f51]",
        borderButtons: "border-[#00fdff]"
    },

    reducers: {
        changeStyle: ((state, action)=> {
            switch (action.payload) {
                case true:
                    state.backgroundHeader = "bg-[#007f8e]",
                    state.backgroundMain = "bg-[#001933]",
                    state.backgroundFooter = "bg-[#007f8e]",
                    state.backgroundCards = "bg-[#007f8e]",
                    state.textColor = "text-[#00fdff]",
                    state.borderCards = "border-[#00aeb8]",
                    state.backgroundButtons = "bg-[#003f51]",
                    state.borderButtons = "border-[#00fdff]"
                    break;
                
                case false: 
                    state.backgroundHeader = "bg-[#007f8e]",
                    state.backgroundMain = "bg-[#a8141d]",
                    state.backgroundFooter = "bg-[#007f8e]",
                    state.backgroundCards = "bg-[#a8141d]",
                    state.textColor = "text-[#d3181c]",
                    state.borderCards = "border-[#7d0f1f]",
                    state.backgroundButtons = "bg-[#3c0921]",
                    state.borderButtons = "border-[#7d0f1f]"
                    break;
                
                default:
                    break;
            }
        })
    }
})

export const {changeStyle} = themeSlice.actions

export default themeSlice.reducer