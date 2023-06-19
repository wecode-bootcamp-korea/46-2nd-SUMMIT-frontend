import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav.jsx';
import Login from './pages/Login/Login.jsx';
import Main from './pages/Main/Main.jsx';
import ShowDetail from './pages/ShowDetail/ShowDetail.jsx';
import ShowList from './pages/ShowList/ShowList.jsx';
import Reservation from './pages/Reservation/Reservation.jsx';
import Checkout from './pages/Checkout/Checkout.jsx';
import Community from './pages/Community/Community.jsx';
import Footer from './components/Footer/Footer.jsx';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/community/:id" element={<Community />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/showDetail" element={<ShowDetail />} />
        <Route path="/showList" element={<ShowList />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
export default Router;
