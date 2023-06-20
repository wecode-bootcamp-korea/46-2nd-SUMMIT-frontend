import React, { useState } from 'react';
import * as T from './Detail';
import * as Db from './DebateDetail';

const Detail = () => {
  const [comment, setComment] = useState('');
  const [commentList, setCommentList] = useState([]);

  const handlerComment = () => {
    setCommentList(prevList => [...prevList, comment]);
    setComment('');
  };

  const handleKeyDown = e => {
    if (e.key === 'Enter') {
      handlerComment();
    }
  };

  return (
    <>
      <T.FlexBox>
        <T.Flex>
          <T.Category>공연리뷰</T.Category>
          <T.Category>레미제라블</T.Category>
        </T.Flex>
        <T.Category>★★★★★</T.Category>
        <T.Category title="subject">
          오페라의 유령 조승우 완전 멋있어요!
        </T.Category>
        <T.Flex title="user">
          <T.Flex>
            <T.Category>조수진</T.Category>
            <T.Category>3일전</T.Category>
          </T.Flex>
          <T.Flex>
            <T.Category>수정</T.Category>
            <T.Category>삭제</T.Category>
          </T.Flex>
        </T.Flex>
        <T.Content>
          와... 이번에 3열 중앙에서 공연관람했는데, 오랜만에 정말
          너무좋았습니다. <br />
          함께 갔던 여자친구도 너무 좋아하고 ... <br />
          함께 갔던 여자친구도 너무 좋아하고 ... <br />
          함께 갔던 여자친구도 너무 좋아하고 ... <br />
          함께 갔던 여자친구도 너무 좋아하고 ... <br />
          함께 갔던 여자친구도 너무 좋아하고 ... <br />
        </T.Content>
        <T.Category>댓글 3개</T.Category>
      </T.FlexBox>
      <Db.Flex>
        <Db.Input
          onChange={e => setComment(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="댓글을 입력해주세요"
          value={comment}
        />
        <Db.Click onClick={handlerComment}>등록</Db.Click>
      </Db.Flex>
      {commentList.map((commentItem, index) => (
        <Db.CommentFlex key={index} title="user">
          <Db.CommentFlex>
            <Db.CommentEl>조수진</Db.CommentEl>
            <Db.CommentEl title="time">3분전</Db.CommentEl>
          </Db.CommentFlex>
          <div>{commentItem}</div>
        </Db.CommentFlex>
      ))}
    </>
  );
};

export default Detail;
