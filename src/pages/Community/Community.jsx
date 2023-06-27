import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Category } from './Component/Category.jsx';
import Article from './Component/Article.jsx';
import Detail from './Component/Detail.jsx';
import Writing from './Component/Writing.jsx';
import Debate from './Component/Debate.jsx';
import DebateDetail from './Component/DebateDetail.jsx';
import Button from '../../components/Button/Button.jsx';

import * as Com from './Community.js';
import { useSearchParams } from 'react-router-dom';
import { commentBoxAtom, debateBox } from '../../Recoil/CommunityAtom.jsx';
import { useRecoilState } from 'recoil';

const Community = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);
  const articleIds = ['total', 'concert', 'hall', 'ad'];
  const [searchParams, setSearchParams] = useSearchParams();
  const [detail, setDetail] = useState({});
  const [bate, setBate] = useState({});

  const [write, setWrite] = useRecoilState(commentBoxAtom);
  const [debate, setDebate] = useRecoilState(debateBox);

  const reviewId = searchParams.get('reviewId');
  const debateId = searchParams.get('debateId');

  useEffect(() => {
    if (id === 'total') {
      setReviews(write);
    } else if (id === 'concert') {
      setReviews(() => {
        return write.filter(item => item.category === '공연리뷰');
      });
    } else if (id === 'hall') {
      setReviews(() => {
        return write.filter(item => item.category === '공연장리뷰');
      });
    } else if (id === 'ad') {
      setReviews(() => {
        return write.filter(item => item.category === '공연홍보');
      });
    }

    if (reviewId) {
      setDetail(write.filter(item => item.id === reviewId)[0]);
    }
  }, [id, reviewId]);

  useEffect(() => {
    if (debateId) {
      setBate(debate.filter(item => item.id === debateId)[0]);
    }
  }, [debateId]);

  const articleObj = {
    debate: <Debate />,
    writing: <Writing />,
    updating: <Writing detail={detail} />,
    debateDetail: <DebateDetail bate={bate} />,
    detail: <Detail reviews={write} detail={detail} />,
  };
  return (
    <Com.Page>
      <Com.Flex title="subject">
        <Com.Title>커뮤니티</Com.Title>
        <Com.ButtonBox>
          <Link to="/community/writing">
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
          {articleIds.includes(id) &&
            reviews.map((review, index) => {
              return <Article review={review} key={index} />;
            })}
          {articleObj[id]}
        </Com.Flex>
      </Com.Flex>
    </Com.Page>
  );
};

export default Community;
