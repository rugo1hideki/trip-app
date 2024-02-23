import React, { useState } from "react";

const Modal = ({ closeModal, addTrip, plannedCities, showModal }) => {
  const [city, setCity] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTrip(city, startDate, endDate);
    closeModal();
  };

  return (
    <div className={`modal ${showModal ? "show" : ""}`}>
      <div className="modal-content">
        <span className="close" onClick={closeModal}>
          &times;
        </span>
        <h2>Create trip</h2>
        <hr />
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="city">City:</label>
            <select
              id="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
            >
              <option value="">Choose city</option>
              {plannedCities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>
          <div className="input-group">
            <label htmlFor="start-date">Start date:</label>
            <input
              id="start-date"
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="end-date">End date:</label>
            <input
              id="end-date"
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              required
            />
          </div>
          <div className="button-group">
            <button type="button" onClick={closeModal}>
              Cancel
            </button>
            <button type="submit">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Modal;
