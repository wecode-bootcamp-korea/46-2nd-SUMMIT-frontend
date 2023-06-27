import React from 'react';
import DebateCard from './DebateCard';
import styled from 'styled-components';

const Debate = () => {
  return (
    <Flex>
      <DebateCard />
    </Flex>
  );
};

export default Debate;

const Flex = styled.div`
  display: flex;
  flex-direction: column;
`;
