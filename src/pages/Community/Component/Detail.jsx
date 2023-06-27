import React, { useState } from 'react';
import * as T from './Detail';
import * as Db from './DebateDetail';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { commentBoxAtom } from '../../../Recoil/CommunityAtom.jsx';

const Detail = ({ detail }) => {
  const navigate = useNavigate();
  const [comment, setComment] = useState('');
  const [commentList, setCommentList] = useState([]);
  const [write, setWrite] = useRecoilState(commentBoxAtom);

  const todayDate = new Date();
  const todayOptions = { month: 'long', day: 'numeric' };
  const formattedDate = todayDate.toLocaleDateString(undefined, todayOptions);

  const handlerComment = () => {
    setCommentList(prevList => [...prevList, comment]);
    setComment('');
  };

  const deleteArticle = () => {
    setWrite(prev => prev.filter(item => item.id !== detail.id));
    navigate(-1);
  };

  const correction = () => {
    navigate('/community/updating');
  };

  return (
    <>
      <T.FlexBox>
        <T.Flex>
          <T.Category>{detail.category}</T.Category>
          <T.Category>|</T.Category>
          <T.Category>{detail.subject}</T.Category>
        </T.Flex>
        <T.Category>{'★'.repeat(detail.grade)}</T.Category>
        <T.Category title="subject">{detail.title}</T.Category>
        <T.Flex title="user">
          <T.Flex>
            <T.Category>{detail.user}</T.Category>
            <T.Category>{detail.date}</T.Category>
          </T.Flex>
          <T.Flex>
            <T.Category onClick={correction}>수정</T.Category>
            <T.Category onClick={deleteArticle}>삭제</T.Category>
          </T.Flex>
        </T.Flex>
        <T.Content>{detail.content}</T.Content>
        <T.Category>댓글 0개</T.Category>
      </T.FlexBox>
      <Db.Flex>
        <Db.Input
          onChange={e => setComment(e.target.value)}
          placeholder="댓글을 입력해주세요"
          value={comment}
        />
        <Db.Click onClick={handlerComment}>등록</Db.Click>
      </Db.Flex>
      {commentList.map((commentItem, index) => (
        <Db.CommentFlex key={index} title="user">
          <Db.CommentFlex>
            <Db.CommentEl>조수진</Db.CommentEl>
            <Db.CommentEl title="time">{formattedDate}</Db.CommentEl>
          </Db.CommentFlex>
          <div>{commentItem}</div>
        </Db.CommentFlex>
      ))}
    </>
  );
};

export default Detail;
