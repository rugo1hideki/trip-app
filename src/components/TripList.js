import React, { useState } from "react";

const TripList = ({ trips }) => {
  const [selectedTrip, setSelectedTrip] = useState(null);
  const [showWeatherDetails, setShowWeatherDetails] = useState(false);

  const handleTripClick = (trip) => {
    setSelectedTrip(trip);
    setShowWeatherDetails(true);
  };

  return (
    <section className="trip-list">
      <h2>Список поїздок</h2>
      <ul>
        {trips.map((trip, index) => (
          <li
            className="trip-card"
            key={index}
            onClick={() => handleTripClick(trip)}
          >
            {trip.city}
            <div>
              <img
                className="city"
                src={`/City/${trip.city}.png`}
                alt="Погода"
              />
            </div>
            <p></p>
            {trip.startDate} - {trip.endDate}
          </li>
        ))}
      </ul>
      {selectedTrip && showWeatherDetails && (
        <div>
          <h2>Деталі погоди</h2>
          <ul>
            {selectedTrip.weatherData.days.slice(0, 7).map((day, index) => (
              <li key={index}>
                <div>Значок погоди: {day.conditions}</div>
                <div className="weather-icon">
                  <img
                    src={`/weather-icons/${day.conditions.replace(
                      /\s+/g,
                      "_"
                    )}.png`}
                    alt="Погода"
                  />
                </div>
                <div>Мінімальна температура: {day.tempmin}°C</div>
                <div>Максимальна температура: {day.tempmax}°C</div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
};

export default TripList;
