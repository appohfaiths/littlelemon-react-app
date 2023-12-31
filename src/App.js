import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import { Nav, Footer } from './components';
import Home from './pages/home';
import Bookings from './pages/bookings'

function App() {
    const [availableTimes, setAvailableTimes] = useState([
    '17:00', '18:00', '19:00', '20:00', '21:00', '22:00'
    ]);

  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home availableTimes={availableTimes} setAvailableTimes={setAvailableTimes}/>} />
          <Route path="/bookings" element={<Bookings availableTimes={availableTimes} setAvailableTimes={setAvailableTimes}/>} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
