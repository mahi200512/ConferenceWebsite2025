import React from 'react';
import Navbar from './Components/Navbar';
import Footer from "./Components/Footer";  // Import Footer
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/pages/Home';
import About from './Components/pages/About';
import Commitee from './Components/pages/Commitee';
import ContactUs from './Components/pages/ContactUs';
import Papers from './Components/pages/Papers';
import Schedule from './Components/pages/Schedule';
import Venue from './Components/pages/Venue';
import Speakers from './Components/pages/Speakers';
import PaperSubmit from './Components/pages/PaperSubmit'; // ⬅️ Import PaperSubmit

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Commitee' element={<Commitee />} />
        <Route path='/About' element={<About />} />
        <Route path='/ContactUs' element={<ContactUs />} />
        <Route path='/Papers' element={<Papers />} />
        <Route path='/PaperSubmit' element={<PaperSubmit />} />
        <Route path='/Schedule' element={<Schedule />} /> {/* Removed space */}
        <Route path='/Venue' element={<Venue />} />
        <Route path='/Speakers' element={<Speakers />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
