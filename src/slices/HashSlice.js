import { createSlice } from "@reduxjs/toolkit";

const HashSlice = createSlice({
  name: "hash",
  initialState: [],
  reducers: {
    addValue: (state, action) => {
      let currentIndex = action.payload.index;
      if (state[currentIndex] !== undefined) {
        if (Array.isArray(state[currentIndex])) {
          state[currentIndex].push(action.payload);
        } else {
          let newItem = [state[currentIndex], action.payload];
          state[currentIndex] = newItem;
        }
      } else {
        state[currentIndex] = action.payload;
      }
    },
  },
});

export const { addValue } = HashSlice.actions;

export default HashSlice.reducer;
