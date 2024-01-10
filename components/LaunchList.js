// components/LaunchList.js

import { fetchAndSetLaunches } from '@/provider/redux/action';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { fetchAndSetLaunches } from '../store/actions';

const LaunchList = () => {
  const dispatch = useDispatch();
  const launches = useSelector((state) => state.launch.launches);

  useEffect(() => {
    dispatch(fetchAndSetLaunches());
  }, [dispatch]);
  // console.log(launches);
  return (
    <div>
      <h2>Launch List</h2>
      <ul>
        {launches.map((launch) => (
          <li key={launch.id}>{launch.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default LaunchList;
