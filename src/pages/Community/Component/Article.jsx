import React from 'react';
import * as A from './Article';

const Article = ({
  review: { id, category, subject, grade, title, content, date, count },
}) => {
  return (
    <div key={subject}>
      <A.LinkTo to={`/community/detail?reviewId=${id}`}>
        <A.FlexBox>
          <A.Flex>
            <A.Category title="flex">{category}</A.Category>
            <A.Category title="flex">|</A.Category>
            <A.Category title="flex">{subject}</A.Category>
            <A.Grade>{'★'.repeat(grade)}</A.Grade>
          </A.Flex>
          <A.Category title="subject">{title}</A.Category>
          <A.Flex title="comment">
            <div>댓글 0</div>
            <div>{date}</div>
          </A.Flex>
        </A.FlexBox>
      </A.LinkTo>
    </div>
  );
};

export default Article;
