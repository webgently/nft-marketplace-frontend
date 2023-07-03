import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NotificationContainer } from 'react-notifications';
import Home from './pages/Home';
import Marketplace from './pages/Marketplace';
import 'react-notifications/lib/notifications.css';

export const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/marketplace" element={<Marketplace />} />
      </Routes>
      <NotificationContainer />
    </BrowserRouter>
  );
};
