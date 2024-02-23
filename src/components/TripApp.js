import React, { useState, useEffect } from "react";
import TripList from "./TripList";
import Modal from "./Modal";
import axios from "axios";

const TripApp = () => {
  const [showModal, setShowModal] = useState(false);
  const [trips, setTrips] = useState([]);
  const [plannedCities, setPlannedCities] = useState([]);

  useEffect(() => {
    const savedTrips = localStorage.getItem("trips");
    if (savedTrips) {
      setTrips(JSON.parse(savedTrips));
    }

    const cities = ["Berlin", "Paris", "London"];
    setPlannedCities(cities);
  }, []);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const addTrip = async (city, startDate, endDate) => {
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/${startDate}/${endDate}?key=XDQ7ACYJPZCXB3B2WUVHGDSMF`;

    try {
      const response = await axios.get(url);
      console.log(response.data);

      setTrips((prevTrips) => [
        ...prevTrips,
        { city, startDate, endDate, weatherData: response.data },
      ]);

      localStorage.setItem(
        "trips",
        JSON.stringify([
          ...trips,
          { city, startDate, endDate, weatherData: response.data },
        ])
      );
    } catch (error) {
      console.error("Error fetching weather forecast:", error);
    }
  };

  return (
    <div className="trip-app">
      <header>
        <h1>Прогноз погоди</h1>
        <button onClick={openModal}>Додати подорож</button>
        <form action="#">
          <input type="text" placeholder="Введіть місто" />
          <button type="submit">Пошук</button>
        </form>
      </header>
      <main>
        <TripList trips={trips} />
      </main>
      {showModal && (
        <Modal
          closeModal={closeModal}
          addTrip={addTrip}
          plannedCities={plannedCities}
        />
      )}
    </div>
  );
};

export default TripApp;
