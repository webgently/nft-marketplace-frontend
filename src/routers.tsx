import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NotificationContainer } from 'react-notifications';
import Home from './pages/Home';
import Marketplace from './pages/Marketplace';
import Collection from './pages/Collection';
import Profile from './pages/Profile';
import 'react-notifications/lib/notifications.css';

export const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/rankings" element={<Collection />} />
        <Route path="/connect-wallet" element={<Profile />} />
      </Routes>
      <NotificationContainer />
    </BrowserRouter>
  );
};
