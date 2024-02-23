import axios from "axios";

const getWeatherForecast = async (location, startDate, endDate) => {
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/${startDate}/${endDate}?key=XDQ7ACYJPZCXB3B2WUVHGDSMF`;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("Error fetching weather forecast:", error);
    return null;
  }
};

export default getWeatherForecast;
