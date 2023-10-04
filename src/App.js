import React from 'react';
import './css/App.css';
import Profile from './components/Profile';
import Home from './components/Home';
import Contact from './components/Contact';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="profile" element={<Profile />} />
      <Route path="contact" element={<Contact />} />
    </Routes>
  );
}
export default App;