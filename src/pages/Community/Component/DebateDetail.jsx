import React, { useState } from 'react';
import * as Db from './DebateDetail';
const DebateDetail = () => {
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
    <Db.Page>
      <Db.Title>아이돌이 주연배우로 괜찮은가?</Db.Title>
      <Db.Img src="https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" />
      <Db.CustomBar>
        <Db.CustomBar variant="success" now={80} label={`찬성${80}%`} />
        <Db.CustomBar variant="danger" now={20} label={`반대${20}%`} />
      </Db.CustomBar>
      <Db.CustomButton variant="outline-success">찬성 2</Db.CustomButton>
      <Db.CustomButton variant="outline-danger">반대 2</Db.CustomButton>
      <Db.Comment>댓글 2개</Db.Comment>
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
            <Db.CommentEl title="small">찬성</Db.CommentEl>
            <Db.CommentEl title="time">3분전</Db.CommentEl>
          </Db.CommentFlex>
          <div>{commentItem}</div>
        </Db.CommentFlex>
      ))}
    </Db.Page>
  );
};

export default DebateDetail;
