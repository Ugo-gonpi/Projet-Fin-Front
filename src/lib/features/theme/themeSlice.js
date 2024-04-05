import { createSlice } from "@reduxjs/toolkit"

export const themeSlice = createSlice({
    name: "themes",

    initialState: {
        toggle: true,
        style: "light",
        backgroundHeader: "bg-[#007f8e]",
        backgroundMain: "bg-[#001933]",
        backgroundFooter: "bg-[#007f8e]",
        backgroundCards: "bg-[#007f8e]",
        textColor: "text-[#00fdff]",
        borderCards: "border-[#00aeb8]",
        backgroundButtons: "bg-[#003f51]",
        borderButtons: "border-[#00fdff]",
        image: "logo3.png"
    },

    reducers: {

        changeStyle: ((state)=> {

            state.toggle = !state.toggle

            switch (state.toggle) {

                case true:
                    state.style = "light"
                    state.backgroundHeader = "bg-[#007f8e]"
                    state.backgroundMain = "bg-[#001933]"
                    state.backgroundFooter = "bg-[#007f8e]"
                    state.backgroundCards = "bg-[#007f8e]"
                    state.textColor = "text-[#00fdff]"
                    state.borderCards = "border-[#00aeb8]"
                    state.backgroundButtons = "bg-[#003f51]"
                    state.borderButtons = "border-[#00fdff]"
                    state.image = "logo3.png"
                    break;

                case false: 
                    state.style = "dark"
                    state.backgroundHeader = "bg-[#7d0f1f]"
                    state.backgroundMain = "bg-[#a8141d]"
                    state.backgroundFooter = "bg-[#7d0f1f]"
                    state.backgroundCards = "bg-[#a8141d]"
                    state.textColor = "text-[#d3181c]"
                    state.borderCards = "border-[#7d0f1f]"
                    state.backgroundButtons = "bg-[#3c0921]"
                    state.borderButtons = "border-[#7d0f1f]"
                    state.image = "logo4.png"
                    break;

                default:
                    break;

            }
        })
    }
})

export const {changeStyle} = themeSlice.actions

export default themeSlice.reducer