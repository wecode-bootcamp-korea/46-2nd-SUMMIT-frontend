import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const DebateCard = () => {
  return (
    <LinkTo to="/community/7">
      <Card>
        <Img src="https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" />
        <Title>아이돌이 주연배우로 괜찮은가?</Title>
        <Comment>댓글수 1</Comment>
      </Card>
    </LinkTo>
  );
};

export default DebateCard;

const Title = styled.div`
  font-size: 16px;
  margin: 10px 0;
  text-align: center;
`;

const Comment = styled.div`
  color: gray;
  font-size: 14px;
  text-align: center;
`;

const Img = styled.img`
  width: 100%;
`;

const Card = styled.div`
  padding: 30px 0 20px 0;
  width: 280px;
  cursor: pointer;
`;

const LinkTo = styled(Link)`
  text-decoration: none;
  &:visited {
    color: black;
  }
`;
