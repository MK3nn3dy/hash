import { createSlice } from "@reduxjs/toolkit";

const MainSlice = createSlice({
    name: 'main',
    initialState: {
        error: null,
        mode: "add"
    },
    reducers: {
        toggleMode:(state, action) => {
            state.mode = state.mode == "add" ? "retrieve" : "add";
        },
        setError:(state, action) => {
            state.error = action.payload;
        }
    }
})

export const { toggleMode, setError } = MainSlice.actions;

export default MainSlice.reducer;