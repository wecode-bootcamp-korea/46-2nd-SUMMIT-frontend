import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Category = () => {
  const CATEGORY = [
    { id: 'total', title: '전체' },
    { id: 'concert', title: '공연리뷰' },
    { id: 'hall', title: '공연장리뷰' },
    { id: 'ad', title: '공연홍보' },
    { id: 'debate', title: '토론' },
  ];
  return (
    <>
      {CATEGORY.map(({ title, id }) => {
        return (
          <LinkTo to={`/community/${id}`} key={title}>
            <List>
              <li>{title}</li>
            </List>
          </LinkTo>
        );
      })}
    </>
  );
};

const List = styled.ul`
  width: 200px;
  padding: 17px 20px;
  margin: 20px 0px;
  cursor: pointer;
  border-radius: 8px;
  color: white;
  background-color: #831010;
  transition: background-color 1s ease-in;
  &:hover {
    background-color: white;
    color: #831010;
    border: 1px solid #831010;
    opacity: 0.8;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    cursor: pointer;
  }
`;

const LinkTo = styled(Link)`
  text-decoration: none;
`;
