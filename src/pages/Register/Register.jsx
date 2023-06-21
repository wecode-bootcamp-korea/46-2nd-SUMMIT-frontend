import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import CalendarFilter from './components/CalendarFilter/CalendarFilter.jsx';
import { RegisterContainer, ResultMessage, RegisterTitle } from './Register';

const Register = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const onSubmit = data => console.log(data);
  const alertSubmit = () => {
    alert('등록이 완료되었습니다.');
    navigate('/main');
  };
  return (
    <RegisterContainer>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <RegisterTitle>작품 등록/제출</RegisterTitle>
        <input {...register('title')} placeholder="작품명" />
        <select {...register('genre')}>
          <option value="로맨스">로맨스</option>
          <option value="드라마">드라마</option>
          <option value="코미디">코미디</option>
          <option value="공포">공포</option>
        </select>
        <div className="theater">
          <select className="region" {...register('region')}>
            <option value="서울">서울</option>
            <option value="경기">경기</option>
            <option value="강원">강원</option>
            <option value="제주">제주</option>
          </select>
          <input
            className="address"
            {...register('address')}
            placeholder="공연장명"
          />
        </div>
        <CalendarFilter />
        <input {...register('price_data')} placeholder="가격 정보" />
        <input {...register('running_time')} placeholder="공연시간" />
        <input {...register('image_url')} placeholder="포스터 url" />
        <input {...register('additional')} placeholder="추가 전달 사항" />
        <ResultMessage>
          최종 작품 등록까지는 약 일주일 소요될 수 있습니다.
        </ResultMessage>
        <input type="submit" className="submit" onClick={alertSubmit} />
      </form>
    </RegisterContainer>
  );
};

export default Register;
