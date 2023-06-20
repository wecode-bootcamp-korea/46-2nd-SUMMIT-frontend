import React from 'react';
import * as De from './Writing';

const Writing = () => {
  return (
    <>
      <De.Flex>
        <De.Select>
          <option disabled="disabled">주제선택</option>
          <option>공연리뷰</option>
          <option>공연장리뷰</option>
          <option>공연홍보</option>
          <option>토론</option>
        </De.Select>
        <De.Click>등록</De.Click>
      </De.Flex>
      <De.Input type="text" placeholder="작품명을 입력해주세요" />
      <De.CustomRate allowHalf defaultValue={4.5} />
      <De.Input type="text" placeholder="제목을 입력해주세요" />
      <De.Text placeholder="공연후기 등 함께 나누고 싶었던 모든것을 공유해주세요." />
    </>
  );
};

export default Writing;
