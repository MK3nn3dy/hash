import { configureStore } from "@reduxjs/toolkit";
import HashSlice from "../slices/HashSlice";
import MainSlice from "../slices/MainSlice";
import CurrentEntrySlice from "../slices/CurrentEntrySlice";

export const store = configureStore({
  reducer: {
    hash: HashSlice,
    main: MainSlice,
    current: CurrentEntrySlice,
  },
});
