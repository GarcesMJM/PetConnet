import React from 'react';
import './css/App.css';
import Profile from './components/Profile';
import Home from './components/Home';
import Contact from './components/Contact';
import Login from './components/Login';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="profile" element={<Profile />} />
      <Route path="contact" element={<Contact />} />
      <Route path="login" element={<Login />} />
    </Routes>
  );
}
export default App;