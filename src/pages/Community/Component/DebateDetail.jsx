import React, { useState } from 'react';
import * as Db from './DebateDetail';
import { getDate } from '../util/util';

const DebateDetail = ({ bate }) => {
  const [comment, setComment] = useState('');
  const [commentList, setCommentList] = useState([]);
  const [count, setCount] = useState({
    ok: 0,
    no: 0,
    total: 0,
    okPercent: 0,
    noPercent: 0,
  });
  const [status, setStatus] = useState(null);

  const handlerComment = () => {
    if (status !== null) {
      if (commentList.length === 0) {
        setCommentList(prevList => [...prevList, comment]);
        setComment('');
      } else {
        alert('투표는 1회만 가능합니다.');
      }
    } else {
      alert('투표 후 댓글 작성이 가능합니다.');
    }
  };

  const countUp = () => {
    if (status == null) {
      setCount(prevCount => {
        return {
          ...prevCount,
          ok: prevCount.ok + 1,
          total: prevCount.total + 1,
          okPercent: Math.floor(
            (100 / (prevCount.total + 1)) * (prevCount.ok + 1)
          ),
          noPercent:
            100 -
            Math.floor((100 / (prevCount.total + 1)) * (prevCount.ok + 1)),
        };
      });
      setStatus(true);
    }
  };

  const countDown = () => {
    if (status == null) {
      setCount(prevCount => {
        return {
          ...prevCount,
          no: prevCount.no + 1,
          total: prevCount.total + 1,
          okPercent: Math.floor((100 / (prevCount.total + 1)) * prevCount.ok),
          noPercent:
            100 - Math.floor((100 / (prevCount.total + 1)) * prevCount.ok),
        };
      });

      setStatus(false);
    }
  };

  return (
    <Db.Page>
      <Db.Title>{bate.imgTitle}</Db.Title>
      <Db.Img src={bate.imgUrl} />
      <Db.CustomBar>
        <Db.CustomBar
          variant="success"
          now={count.okPercent}
          label={`찬성${count.okPercent}%`}
        />
        <Db.CustomBar
          variant="danger"
          now={count.noPercent}
          label={`반대${count.noPercent}%`}
        />
      </Db.CustomBar>
      <Db.AgreeButton variant={status} onClick={countUp}>
        찬성 {count.ok}
      </Db.AgreeButton>
      <Db.DisAgreeButton variant={status} onClick={countDown}>
        반대 {count.no}
      </Db.DisAgreeButton>
      <Db.Comment>{`댓글 ${commentList.length}개`}</Db.Comment>
      <Db.Flex>
        <Db.Input
          onChange={e => setComment(e.target.value)}
          placeholder="댓글을 입력해주세요"
          value={comment}
        />
        <Db.Click onClick={handlerComment} disabled={comment === ''}>
          등록
        </Db.Click>
      </Db.Flex>
      {commentList.map((commentItem, index) => (
        <Db.CommentFlex key={index} title="user">
          <Db.CommentFlex>
            <Db.CommentEl>조수진</Db.CommentEl>
            <Db.Agree title={status}>{status ? '찬성' : '반대'}</Db.Agree>
            <Db.CommentEl title="time">{getDate()}</Db.CommentEl>
          </Db.CommentFlex>
          <div>{commentItem}</div>
        </Db.CommentFlex>
      ))}
    </Db.Page>
  );
};

export default DebateDetail;
