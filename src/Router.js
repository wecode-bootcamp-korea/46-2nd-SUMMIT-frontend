import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import Main from './pages/Main/Main';
import ShowDetail from './pages/ShowDetail/ShowDetail';
import ShowList from './pages/ShowList/ShowList';
import Reservation from './pages/Reservation/Reservation';
import Checkout from './pages/Checkout/Checkout';
import Community from './pages/Community/Community';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/main" element={<Main />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/community" element={<Community />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/showDetail" element={<ShowDetail />} />
        <Route path="/showList" element={<ShowList />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
