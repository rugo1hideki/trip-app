import React, { useState, useEffect } from "react";
import getWeatherForecast from "./getWeatherForecast";

const Trip = ({ city, startDate, endDate }) => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      const weatherData = await getWeatherForecast(city, startDate, endDate);
      setWeather(weatherData);
    };

    fetchWeather();
  }, [city, startDate, endDate]);

  return (
    <div className="trip-card">
      <div className="city-name">{city}</div>
      <div className="date-range">
        {startDate} - {endDate}
      </div>
      {weather && (
        <div className="weather-details">
          <h4>Today's Weather</h4>
          <p>Temperature: {weather.days[0].temp}</p>
          <p>Description: {weather.days[0].conditions}</p>
        </div>
      )}
    </div>
  );
};

export default Trip;
