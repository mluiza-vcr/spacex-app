import axios from 'axios';

const nextLaunchURL = 'https://api.spacexdata.com/v5/launches/next';

const latestLaunchURL = 'https://api.spacexdata.com/v5/launches/latest';

const showNextLaunch = async () => {
  try {
    const response = await axios.get(nextLaunchURL);
    return response.data;
  } catch (err) {
    return err;
  }
};

const showLatestLaunch = async () => {
  try {
    const response = await axios.get(latestLaunchURL);
    return response.data;
  } catch (err) {
    return err;
  }
};

export default {
  showNextLaunch,
  showLatestLaunch,
};
