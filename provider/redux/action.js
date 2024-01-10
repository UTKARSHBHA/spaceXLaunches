// store/actions.js

import { fetchLaunchData } from "@/services/api";

// import { setLaunches } from './launchReducer';
// import { fetchLaunchData } from '../services/api';

export const fetchAndSetLaunches = () => async (dispatch) => {
  try {
    const launches = await fetchLaunchData();
    console.log(launches[0]);
    dispatch(fetchAndSetLaunches(launches));
  } catch (error) {
    console.error('Error fetching and setting launch data:', error);
  }
};
