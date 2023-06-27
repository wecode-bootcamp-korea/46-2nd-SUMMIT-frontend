import React, { useEffect, useState } from 'react';
import * as De from './Writing';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { commentBoxAtom } from '../../../Recoil/CommunityAtom.jsx';
import { useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { getDate } from '../util/util';

const Writing = ({ detail }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [reviews, setReviews] = useRecoilState(commentBoxAtom);
  const [write, setWrite] = useState({
    category: '',
    subject: '',
    title: '',
    content: '',
    grade: '',
  });
  const setCommentBox = useSetRecoilState(commentBoxAtom);

  useEffect(() => {
    if (id === 'updating')
      setWrite({
        category: detail.category,
        subject: detail.subject,
        title: detail.title,
        content: detail.content,
        grade: detail.grade,
      });
  }, [id]);

  const register = () => {
    if (id === 'updating') {
      setReviews(prev =>
        prev.map(item => {
          if (item.id === detail.id) {
            return {
              ...write,
              id: detail.id,
              date: getDate(),
            };
          } else {
            return item;
          }
        })
      );
    } else {
      setCommentBox(prev => [
        { ...write, id: (prev.length + 1).toString(), date: getDate() },
        ...prev,
      ]);
    }

    navigate('/community/total');
  };

  const handleInputChange = e => {
    const { name, value } = e.target;
    setWrite(prev => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <De.Flex>
        <De.Select
          name="category"
          onChange={handleInputChange}
          value={write.category}
        >
          <option>주제선택</option>
          <option value="공연리뷰">공연리뷰</option>
          <option value="공연장리뷰">공연장리뷰</option>
          <option value="공연홍보">공연홍보</option>
        </De.Select>
        <De.Click onClick={register}>등록</De.Click>
      </De.Flex>
      <De.Input
        name="subject"
        type="text"
        placeholder="작품명을 입력해주세요"
        onChange={handleInputChange}
        value={write.subject}
      />
      {write.category === '공연리뷰' && (
        <De.CustomRate
          name="grade"
          allow
          defaultValue={0}
          onChange={e => setWrite(prev => ({ ...prev, grade: e }))}
        />
      )}

      <De.Input
        name="title"
        type="text"
        placeholder="제목을 입력해주세요"
        onChange={handleInputChange}
        value={write.title}
      />
      <De.Text
        name="content"
        placeholder="공연후기 등 함께 나누고 싶었던 모든것을 공유해주세요."
        onChange={handleInputChange}
        value={write.content}
      />
    </>
  );
};

export default Writing;
