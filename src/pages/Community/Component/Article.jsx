import React from 'react';
import * as A from './Article';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Ariticle = ({ reviews }) => {
  return (
    <>
      {reviews.map(
        ({ category, subject, grade, title, cotent, date, count }) => {
          return (
            <div key={subject}>
              <LinkTo to="/community/8">
                <A.FlexBox>
                  <A.Category>{category}</A.Category>
                  <A.Flex>
                    <A.Category title="flex">{subject}</A.Category>
                    <div>{grade}</div>
                  </A.Flex>
                  <A.Category title="subject">{title}</A.Category>
                  <div>{cotent}</div>
                  <A.Flex title="comment">
                    <div>댓글수{count}</div>
                    <div>{date}</div>
                  </A.Flex>
                </A.FlexBox>
              </LinkTo>
            </div>
          );
        }
      )}
    </>
  );
};

export default Ariticle;

const LinkTo = styled(Link)`
  text-decoration: none;
  &:visited {
    color: black;
  }
`;
