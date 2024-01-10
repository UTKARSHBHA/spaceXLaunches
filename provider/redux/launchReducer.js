// store/launchReducer.js

import { createSlice } from '@reduxjs/toolkit';

const launchSlice = createSlice({
  name: 'launch',
  initialState: {
    launches: [],
  },
  reducers: {
    setLaunches: (state, action) => {
      state.launches = action.payload;
    },
  },
});

export const { setLaunches } = launchSlice.actions;
export default launchSlice.reducer;
