import React, { useState } from 'react';
import {v4 as uuidv4} from 'uuid'
import 'bootstrap/dist/css/bootstrap.css';

function HotelList() {
  const [hotels, setHotels] = useState([
    {id:uuidv4(),nom:'sport'},
        {id:uuidv4(),nom:'film'},
        {id:uuidv4(),nom:'coder en react'}
  ]);

  function handleBook(hotel) {
    console.log(`Booking hotel: ${hotel.name}`);
  }

  return (
    <div>
      <h2>Hotels</h2>
      <ul className="list-group">
        {hotels.map(hotel => (
          <li className="list-group-item" key={hotel.id}>
            {hotel.name}
            <button
              className="btn btn-primary float-right"
              onClick={() => handleBook(hotel)}
            >
              Book
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

function FlightList() {
  const [flights, setFlights] = useState([]);

  function handleBook(flight) {
    console.log(`Booking flight: ${flight.id}`);
  }

  return (
    <div>
      <h2>Flights</h2>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Departure</th>
            <th>Arrival</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {flights.map(flight => (
            <tr key={flight.id}>
              <td>{flight.id}</td>
              <td>{flight.departure}</td>
              <td>{flight.arrival}</td>
              <td>
                <button
                  className="btn btn-primary float-right"
                  onClick={() => handleBook(flight)}
                >
                  Book
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function App() {
  return (
    <div className="container">
      <HotelList />
      <FlightList />
    </div>
  );
}

export default App;