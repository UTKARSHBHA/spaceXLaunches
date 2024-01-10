export const fetchLaunchData = async () => {
  try {
    const response = await fetch("https://api.spacexdata.com/v4/launches");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching launch data:", error);
    throw error;
  }
};
