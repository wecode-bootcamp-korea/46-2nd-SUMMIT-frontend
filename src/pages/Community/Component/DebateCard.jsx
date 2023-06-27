import React from 'react';
import { Link } from 'react-router-dom';
import { debateBox } from '../../../Recoil/CommunityAtom.jsx';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

const DebateCard = () => {
  const debateValue = useRecoilValue(debateBox);
  return debateValue.map(({ imgUrl, imgTitle, id }, index) => {
    return (
      <LinkTo to={`/community/debateDetail?debateId=${id}`} key={index}>
        <Card>
          <Img src={imgUrl} />
          <Title>{imgTitle}</Title>
        </Card>
      </LinkTo>
    );
  });
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
  width: 100%;
  cursor: pointer;
`;

const LinkTo = styled(Link)`
  text-decoration: none;
  &:visited {
    color: black;
  }
`;
