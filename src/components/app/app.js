import React from 'react';
import {Route, Routes, Switch} from 'react-router-dom';
import './app.css';
import HomePage from "../pages/home-page";
import {CartPage} from "../pages";

const App = () => {
  return (
  <Routes>
    <Route path="/" element={<HomePage />} exact />
    <Route path="expenses" element={<CartPage />} exact />
  </Routes>
  );
}

export default App;