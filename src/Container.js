import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from './components/Nav/Nav.jsx';
//import Footer from './components/Footer/Footer.jsx';

const Container = () => {
  return (
    <>
      <Nav />
      <Outlet />
      {/* <Footer /> */}
    </>
  );
};

export default Container;
