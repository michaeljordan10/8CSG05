import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home';
import Login from './components/login';
import Register from './components/register';
import logo from './logo.svg';
import './App.css';
import DownloadCard from './components/downloadcard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/downloadadhaarcard" element={<DownloadCard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
