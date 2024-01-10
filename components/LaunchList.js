import { fetchAndSetLaunches } from "@/provider/redux/action";
import { setCustomFilter, setFilter } from "@/provider/redux/launchReducer";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LaunchListItem from "./LaunchListItem";
import styles from "./LaunchList.module.css";

const LaunchList = () => {
  const dispatch = useDispatch();
  const launches = useSelector((state) => state.launch.launches);
  const filter = useSelector((state) => state.launch.filter);
  const startDate = useSelector((state) => state.launch.startDate);
  const endDate = useSelector((state) => state.launch.endDate);

  const [customStartDate, setCustomStartDate] = useState(startDate || "");
  const [customEndDate, setCustomEndDate] = useState(endDate || "");

  useEffect(() => {
    dispatch(fetchAndSetLaunches(filter, startDate, endDate));
  }, [dispatch, filter, startDate, endDate]);

  const handleFilterChange = (newFilter) => {
    dispatch(setFilter(newFilter));
  };

  const handleCustomFilter = () => {
    dispatch(
      setCustomFilter({ startDate: customStartDate, endDate: customEndDate })
    );
  };

  return (
    <div className={styles.launchListContainer}>
      <h2 className={styles.customHeading}>Launch List</h2>
      <div className={styles["filter-bar"]}>
        <div className={styles["filter-buttons"]}>
          <button onClick={() => handleFilterChange("all")}>
            All Launches
          </button>
          <button onClick={() => handleFilterChange("upcoming")}>
            Upcoming Launches
          </button>
          <button onClick={() => handleFilterChange("past")}>
            Past Launches
          </button>
        </div>
        <div className={styles["date-inputs"]}>
          <div>
            <label>Start Date: </label>
            <input
              type="date"
              value={customStartDate}
              onChange={(e) => setCustomStartDate(e.target.value)}
            />
          </div>
          <div>
            <label>End Date: </label>
            <input
              type="date"
              value={customEndDate}
              onChange={(e) => setCustomEndDate(e.target.value)}
            />
          </div>
          <button
            className={styles["apply-custom-filter-button"]}
            onClick={handleCustomFilter}
          >
            Apply Custom Filter
          </button>
        </div>
      </div>
      <div className={styles["launch-list"]}>
        {launches && launches.map((launch) => (
          <LaunchListItem key={launch.id} launch={launch} />
        ))}
      </div>
    </div>
  );
};

export default LaunchList;
