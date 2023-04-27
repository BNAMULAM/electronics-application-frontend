import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
// import Home from "./components/Home";
import Login from "./components/Login";
import AdminHome from './components/AdminHome';
import CustomerHome from "./components/CustomerHome";
// import ApplicantHome from './components/ApplicantHome';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Login/>} />
        <Route path="/admin-home" element={<AdminHome />} />
        <Route path="/customer-home" element={<CustomerHome />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
