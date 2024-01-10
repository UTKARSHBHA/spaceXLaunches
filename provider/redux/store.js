import { configureStore } from "@reduxjs/toolkit";
import launchReducer from "./launchReducer";

const store = configureStore({
  reducer: {
    launch: launchReducer,
  },
});

export default store;
