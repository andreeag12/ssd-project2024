import React, {useState} from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from "./Login"; // Import your login page component
import Register from "./Register"; // Import your registration page component
import Home from './Home';
import Hotels from './Hotels';
import Offers from './Offers';
import Orders from './Orders';
import Account from './Account';
import ImageComponent from './ImageSelector';
import AddImg from './AddImg';
import AdminFlights from "./AdminFlights";
import Flights from "./Flights";
import HotelDetail from "./HotelDetail";
import FlightDetail from "./FlightDetail";
import AdminPannel from "./AdminPannel";
import DeleteFlight from "./DeleteFlight";
import Cart from "./Cart"
import Favorites from './Favorites';

const App = () => {
  const handleLogin = () => {
    // Logic to handle login
    console.log('Logged in'); // Placeholder for login logic
  };

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Hotels" element={<Hotels />} />
        <Route path="/Flights" element={<Flights />} />
        <Route path="/Offers" element={<Offers />} />
        <Route path="/Orders" element={<Orders />} />
        <Route path="/Account" element={<Account />} />
        <Route path="/AddImg" element={<AddImg />} />
        <Route path="/SelectImage" element={<ImageComponent />} />
        <Route path="/AdminFlights" element={<AdminFlights />} />
        <Route path="/hotels/:hotel_name" element={<HotelDetail/>} />
        <Route path="/flight/:flight_number" element={<FlightDetail/>} />
        <Route path="/AdminPannel" element={<AdminPannel/>} />
        <Route path="/DeleteFLights" element={<DeleteFlight/>}/>
        <Route path="/Cart" element={<Cart/>}/>
        <Route path="/Favorites" element={<Favorites/>}/>
        {/* Add more routes for other pages */}
      </Routes>
    </div>
  );
}

export default App;


