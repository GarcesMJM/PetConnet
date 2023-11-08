import React from 'react';
import './css/App.css';
import Profile from './pages/Profile';
import Home from './pages/Home';
import Posts from './pages/Posts';
import Login from './pages/Login';
import Mascota from './pages/Mascota';
import Prueba from './pages/Prueba';
import ForgotPwd from './pages/ForgotPwd';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="profile/:id" element={<Profile />} />
      <Route path="posts" element={<Posts />} />
      <Route path="login" element={<Login />} />
      <Route path="mascota/:id" element={<Mascota />} />
      <Route path="prueba" element={<Prueba />} />
      <Route path='olvidocontraseña' element={<ForgotPwd/>}/>
    </Routes>
  );
}
export default App;