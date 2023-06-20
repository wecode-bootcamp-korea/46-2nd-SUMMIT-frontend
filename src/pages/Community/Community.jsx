import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Category } from './Component/Category.jsx';
import Article from './Component/Article.jsx';
import Detail from './Component/Detail.jsx';
import Writing from './Component/Writing.jsx';
import Debate from './Component/Debate.jsx';
import DebateDetail from './Component/DebateDetail.jsx';
import Button from '../../components/Button/Button.jsx';
import Dummy from './Component/Dummy.jsx';
import * as Com from './Community.js';

const Community = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);
  const articleIds = ['1', '2', '3', '4'];
  const articleObj = {
    5: <Debate />,
    6: <Writing />,
    7: <DebateDetail />,
    8: <Detail />,
  };

  useEffect(() => {
    if (id === '1') {
      setReviews(Dummy);
    } else if (id === '2') {
      setReviews(() => {
        return Dummy.filter(dummy => dummy.category === '공연리뷰');
      });
    } else if (id === '3') {
      setReviews(() => {
        return Dummy.filter(dummy => dummy.category === '공연장리뷰');
      });
    } else if (id === '4') {
      setReviews(() => {
        return Dummy.filter(dummy => dummy.category === '공연홍보');
      });
    }
  }, [id]);

  return (
    <Com.Page>
      <Com.Flex title="subject">
        <Com.Title>커뮤니티</Com.Title>
        <Com.ButtonBox>
          <Link to="/community/6">
            <Button size="medium" text="글쓰기" />
          </Link>
        </Com.ButtonBox>
      </Com.Flex>
      <Com.Flex>
        <Com.ExtraFlex title="article">
          <Category />
        </Com.ExtraFlex>
        <Com.Flex title="article">
          <Com.InputBox>
            <Com.Input type="text" placeholder="작품명을 입력해주세요" />
            <Com.Click>검색</Com.Click>
          </Com.InputBox>
          {articleIds.includes(id) && <Article reviews={reviews} />}
          {articleObj[id]}
        </Com.Flex>
      </Com.Flex>
    </Com.Page>
  );
};

export default Community;
