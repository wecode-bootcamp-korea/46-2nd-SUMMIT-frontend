import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { APIS } from '../../config.js';
import Modal from '../../components/Modal/Modal.jsx';
import CalendarFilter from './components/CalendarFilter/CalendarFilter.jsx';
import { handleDateForm } from './handleDateForm.jsx';
import { RegisterContainer, ResultMessage, RegisterTitle } from './Register';

const Register = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const { register, handleSubmit } = useForm();
  const dateNow = new Date();
  const [startDate, setStartDate] = useState(dateNow);
  const [endDate, setEndDate] = useState(dateNow);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onSubmit = data => {
    fetch(APIS.register, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: token,
      },
      body: JSON.stringify({
        ...data,
        startDate: handleDateForm(startDate),
        endDate: handleDateForm(endDate),
      }),
    })
      .then(res => res.json())
      .then(res => {
        if (res.message === 'Create Complete') {
          navigate('/');
        }
      });
  };

  const alertSubmit = () => {
    setIsModalOpen(prev => !prev);
  };

  return (
    <RegisterContainer>
      {isModalOpen && (
        <div className="modalLayout">
          <div className="modalLayer" />
          <Modal
            title="작품 등록"
            message="작품 등록이 완료되었습니다."
            onClose={() => {
              setIsModalOpen(false);
            }}
          />
        </div>
      )}
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <RegisterTitle>작품 등록 페이지</RegisterTitle>
        <input {...register('title')} placeholder="작품명" />
        <input
          {...register('content')}
          placeholder="작품 상세정보"
          className="showDetail"
        />
        <input {...register('imageUrl')} placeholder="포스터 url" />
        <input
          {...register('runningTime')}
          placeholder="공연시간 (ex. 120분)"
        />
        <select {...register('genreId')}>
          <option value={1}>로맨스</option>
          <option value={2}>코미디</option>
          <option value={3}>공포</option>
          <option value={4}>드라마</option>
        </select>
        <CalendarFilter
          startDate={startDate}
          setStartDate={setStartDate}
          endDate={endDate}
          setEndDate={setEndDate}
        />
        <div className="theater">
          <select className="region">
            <option value="서울">서울</option>
            <option value="경기">경기</option>
            <option value="강원">강원</option>
            <option value="제주">제주</option>
          </select>
          <input className="address" placeholder="공연장명" />
        </div>
        <input
          type="text"
          className="additional"
          placeholder="추가 제출 사항"
        />
        <input type="submit" className="submit" onClick={alertSubmit} />
        <ResultMessage>
          최종 작품 등록까지는 약 일주일 소요될 수 있습니다.
        </ResultMessage>
      </form>
    </RegisterContainer>
  );
};

export default Register;
