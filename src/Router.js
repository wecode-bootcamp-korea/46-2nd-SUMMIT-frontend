import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login.jsx';
import Main from './pages/Main/Main.jsx';
import ShowDetail from './pages/ShowDetail/ShowDetail.jsx';
import ShowList from './pages/ShowList/ShowList.jsx';
import Reservation from './pages/Reservation/Reservation.jsx';
import Checkout from './pages/Checkout/Checkout.jsx';
import Community from './pages/Community/Community.jsx';
import Container from './Container.js';
import Oauth from './pages/Login/Oauth/Oauth.jsx';
import Register from './pages/Register/Register.jsx';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Container />}>
          <Route path="/" element={<Main />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/community/:id" element={<Community />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/showDetail/:showId" element={<ShowDetail />} />
          <Route path="/showList" element={<ShowList />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/oauth" element={<Oauth />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
