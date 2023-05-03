import { createSlice } from "@reduxjs/toolkit";

const CurrentEntrySlice = createSlice({
  name: "current",
  initialState: {
    currentIndex: null,
    currentKey: null,
    currentLetters: null,
    currentASCII: null,
    currentASCIITotal: null,
  },
  reducers: {
    updateCurrentEntry: (state, action) => {
      state.currentIndex = action.payload.currentIndex;
      state.currentKey = action.payload.currentKey;
      state.currentLetters = action.payload.currentLetters;
      state.currentASCII = action.payload.currentASCII;
      state.currentASCIITotal = action.payload.currentASCIITotal;
    },
  },
});

export const { updateCurrentEntry } = CurrentEntrySlice.actions;

export default CurrentEntrySlice.reducer;
