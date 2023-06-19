import React from 'react';
import Carousel from './components/Carousel';
import Categorytransfer from './components/Categorytransfer';
import Bestonboard from './components/Bestonboard';
import Theathersituation from './components/Theathersituation';
import Bestonreview from './components/Bestonreview';
import Bestonmanager from './components/Bestonmanager';
import styled from 'styled-components';

const Main = () => {
  return (
    <Wrap>
      <Carousel />
      <Categorytransfer />
      <Bestonboard />
      <Bestonreview />
      <Bestonmanager />
      <Theathersituation />
    </Wrap>
  );
};
export default Main;

const Wrap = styled.div`
  position: relative;
  min-width: 1300px;
  width: 100%;
  align-items: center;
  background-color: black;
`;
