import { createSlice } from "@reduxjs/toolkit";

const CurrentEntrySlice = createSlice({
  name: "current",
  initialState: {
    currentIndex: null,
    currentKey: null,
    currentLetters: null,
    currentASCII: null,
    currentASCIITotal: null,
    isShared: false,
  },
  reducers: {
    updateCurrentEntry: (state, action) => {
      state.currentIndex = action.payload.currentIndex;
      state.currentKey = action.payload.currentKey;
      state.currentLetters = action.payload.currentLetters;
      state.currentASCII = action.payload.currentASCII;
      state.currentASCIITotal = action.payload.currentASCIITotal;
    },
    setIsShared: (state, action) => {
      state.isShared = action.payload;
    },
  },
});

export const { updateCurrentEntry, setIsShared } = CurrentEntrySlice.actions;

export default CurrentEntrySlice.reducer;
