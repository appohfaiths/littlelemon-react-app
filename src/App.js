import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import { Nav, Footer } from './components';
import Home from './pages/home';
import Bookings from './pages/bookings'

function App() {


  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bookings" element={<Bookings/>} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
