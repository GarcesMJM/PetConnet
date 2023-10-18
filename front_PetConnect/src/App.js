import React from 'react';
import './css/App.css';
import Profile from './pages/Profile';
import Home from './pages/Home';
import Posts from './pages/Posts';
import Login from './pages/Login';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="profile" element={<Profile />} />
      <Route path="posts" element={<Posts />} />
      <Route path="login" element={<Login />} />
    </Routes>
  );
}
export default App;