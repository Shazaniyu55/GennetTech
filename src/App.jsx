import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import './App.css'
import Home from './components/home';
import BookingSection from './components/booking';
import AboutSection from './components/about';
import ContactSection from './components/contact';
import TeamSection from './components/team';

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/book" element={<BookingSection/>} />
      {/* <Route path="/about" element={<AboutSection/>} />
      <Route path="/contact" element={<ContactSection/>} />
      <Route path="/team" element={<TeamSection/>} /> */}

    </Routes>
    </>
  )
}

export default App
