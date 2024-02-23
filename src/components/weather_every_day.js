<div className="weather-info">
  <h3>Прогноз погоди:</h3>
  {trip.weatherData ? (
    <ul>
      {trip.weatherData.days.map((day, index) => (
        <li key={index}>
          <p>{day.datetime}</p>
          <p>Температура: {day.temp}</p>
          <p>Опис: {day.conditions}</p>
        </li>
      ))}
    </ul>
  ) : (
    <p>Прогноз погоди не доступний</p>
  )}
</div>;
