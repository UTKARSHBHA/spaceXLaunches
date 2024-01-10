// store/actions.js

import { fetchLaunchData } from "@/services/api";
import { setLaunches } from "./launchReducer";

export const fetchAndSetLaunches =
  (filter = "all", startDate = null, endDate = null) =>
  async (dispatch) => {
    try {
      const launches = await fetchLaunchData();

      // Apply filtering based on the 'filter' parameter
      const filteredLaunches = filterLaunches(
        launches,
        filter,
        startDate,
        endDate
      );

      dispatch(setLaunches(filteredLaunches));
    } catch (error) {
      console.error("Error fetching and setting launch data:", error);
    }
  };

const filterLaunches = (launches, filter, startDate, endDate) => {
  const now = new Date();

  if (filter === "upcoming") {
    return launches.filter((launch) => new Date(launch.date_utc) > now);
  } else if (filter === "past") {
    return launches.filter((launch) => new Date(launch.date_utc) <= now);
  } else if (filter === "custom") {
    console.log(startDate , endDate);
    if (startDate && endDate) {
      const start = new Date(startDate);
      const end = new Date(endDate);
      return launches.filter(
        (launch) =>
          new Date(launch.date_utc) >= start && new Date(launch.date_utc) <= end
      );
    }
  } else {
    return launches;
  }
};
