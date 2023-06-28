import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Bootpay } from '@bootpay/client-js';
import { APIS } from '../../config.js';
import { useRecoilState } from 'recoil';
import checkoutInfoState from '../../atom.js';
import { Subject } from './Subject.jsx';
import Modal from '../../components/Modal/Modal.jsx';
import TermList from './TermList.jsx';
import * as S from './Checkout.js';

const Checkout = () => {
  const navigate = useNavigate();
  const [checked, setChecked] = useState('');
  const [point, setPoint] = useState(0);
  const [userPoint, setUserPoint] = useState(0);
  const [isClickUseBtn, setIsClickUseBtn] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [sucModalOpen, setSucModalOpen] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const checkoutInfo = useRecoilState(checkoutInfoState);
  const token = localStorage.getItem('token');

  useEffect(() => {
    let receivePrice = 0;
    if (checkoutInfo[0].totalPrice !== undefined) {
      receivePrice = checkoutInfo[0].totalPrice;
    }

    if (isClickUseBtn) {
      setTotalPrice(receivePrice - point + 1000);
    } else {
      setTotalPrice(receivePrice + 1000);
    }
  }, [isClickUseBtn]);

  useEffect(() => {
    fetch(`${APIS.getPoint}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: token,
      },
    })
      .then(response => response.json())
      .then(response => {
        setUserPoint(Math.floor(response.point));
      });
  }, []);

  const handleCheck = checkBoxNum => {
    setChecked(checkBoxNum);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSucModalOpen(prevState => {
      if (prevState) {
        navigate('/');
      }
      return false;
    });
  };

  const payHandler = async () => {
    try {
      const response = await Bootpay.requestPayment({
        application_id: process.env.REACT_APP_PAY_APPLICATION_ID,
        price: totalPrice,
        order_name: '조수진',
        order_id: 'TEST_ORDER_ID',
        pg: '카카오페이',
        method: '간편',
        tax_free: 0,
        user: {
          id: '회원아이디',
          username: '회원이름',
          phone: '01000000000',
          email: 'test@test.com',
        },
        items: [
          {
            id: 'item_id',
            name: '테스트아이템',
            qty: 1,
            price: totalPrice,
          },
        ],
        extra: {
          open_type: 'iframe',
          card_quota: '0,2,3',
          escrow: false,
        },
      });
      if (response.event === 'done') {
        fetch(`${APIS.checkout}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json;charset=utf-8',
            Authorization: token,
          },
          body: JSON.stringify({
            seatsId: 28,
            quantity: 2,
            point: point,
            totalPrice: totalPrice,
          }),
        })
          .then(res => {
            return res.json();
          })
          .then(res => {
            setSucModalOpen(true);
          });
      }
    } catch (error) {
      setIsModalOpen(true);
    }
  };

  return (
    <S.Page title="checkout">
      <S.Title size="big">결제하기</S.Title>
      <S.Title>예매정보</S.Title>
      <Subject />
      <S.Title>티켓수령방법</S.Title>
      <S.InfBox>
        <S.CheckBox
          checked={checked === 'checkBoxOne'}
          onChange={() => {
            handleCheck('checkBoxOne');
          }}
        />
        <S.TicketCheck>현장수령</S.TicketCheck>
        <S.CheckBox
          checked={checked === 'checkBoxTwo'}
          onChange={() => {
            handleCheck('checkBoxTwo');
          }}
        />
        <S.TicketCheck>Email</S.TicketCheck>
      </S.InfBox>
      <S.Title>결제수단</S.Title>
      <S.InfBox>
        <S.InfTitle title="first">포인트</S.InfTitle>
        <S.PointInput
          onChange={e => {
            setPoint(e.target.value);
            setIsClickUseBtn(false);
          }}
        />
        <S.AgreeBtn
          type="point"
          onClick={() => {
            setIsClickUseBtn(true);
          }}
        >
          사용
        </S.AgreeBtn>
        <S.InfTitle>
          {`(잔여포인트: ${isClickUseBtn ? userPoint - point : userPoint}P)`}
        </S.InfTitle>
      </S.InfBox>
      <S.InfBox>
        <S.CheckBox />
        <S.InfTitle>카카오페이</S.InfTitle>
      </S.InfBox>
      <S.Title>결제금액</S.Title>
      <S.InfBox>
        <S.InfTitle title="first">티켓금액</S.InfTitle>
        <S.InfTitle>{checkoutInfo[0].totalPrice} 원</S.InfTitle>
      </S.InfBox>
      <S.InfBox>
        <S.InfTitle title="first">포인트사용</S.InfTitle>
        <S.InfTitle>- {isClickUseBtn ? point : 0} P</S.InfTitle>
      </S.InfBox>
      <S.InfBox>
        <S.InfTitle title="first">수수료</S.InfTitle>
        <S.InfTitle>1,000 원</S.InfTitle>
      </S.InfBox>
      <S.InfBox>
        <S.InfTitle title="first">총결제금액</S.InfTitle>
        <S.InfTitle>{totalPrice.toLocaleString()} 원</S.InfTitle>
      </S.InfBox>
      <S.Title>이용동의</S.Title>
      <TermList />
      <S.Flex>
        <S.Button onClick={payHandler}>결제하기</S.Button>
      </S.Flex>
      {isModalOpen && (
        <Modal
          title="결제 실패"
          message="다시 시도해주세요."
          onClose={closeModal}
        />
      )}
      {sucModalOpen && (
        <Modal
          title="결제 성공"
          message="등록하신 메일로 예약정보 전송됩니다."
          onClose={closeModal}
        />
      )}
    </S.Page>
  );
};

export default Checkout;
