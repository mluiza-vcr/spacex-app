import axios from 'axios';

const launchURL = (param) => `https://api.spacexdata.com/v5/launches/${param}`;

const showLaunches = async (param) => {
  try {
    const response = await axios.get(launchURL(param));
    return response.data;
  } catch (err) {
    return err;
  }
};

export default {
  showLaunches,
};
