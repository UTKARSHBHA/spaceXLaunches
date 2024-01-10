// store/launchReducer.js

import { createSlice } from '@reduxjs/toolkit';

const launchSlice = createSlice({
  name: 'launch',
  initialState: {
    launches: [],
    filter: 'all', // 'all', 'upcoming', 'past', 'custom'
    startDate: null,
    endDate: null,
  },
  reducers: {
    setLaunches: (state, action) => {
      state.launches = action.payload;
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    setCustomFilter: (state, action) => {
      state.filter = 'custom'; // Set the filter to 'custom'
      state.startDate = action.payload.startDate;
      state.endDate = action.payload.endDate;
    },
  },
});

export const { setLaunches, setFilter, setCustomFilter } = launchSlice.actions;
export default launchSlice.reducer;
