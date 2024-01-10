// services/api.js

export const fetchLaunchData = async () => {
    try {
      const response = await fetch('https://api.spacexdata.com/v3/launches');
      const data = await response.json();
    //   console.log(data);
      return data;
    } catch (error) {
      console.error('Error fetching launch data:', error);
      throw error;
    }
  };
  