import React, { useState } from 'react';
import * as S from './Checkout';

export const TermList = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <S.InfBox type="btn">
        <S.InfBox>
          <S.CheckBox />
          <S.InfTitle title="first">{title}</S.InfTitle>
        </S.InfBox>
        <S.AgreeBtn
          onClick={() => {
            setIsOpen(prev => !prev);
          }}
        >
          보기
        </S.AgreeBtn>
      </S.InfBox>
      {isOpen && <S.Textarea>{content}</S.Textarea>}
    </>
  );
};

const TermsSection = () => {
  return (
    <>
      <TermList
        title="개인정보 수집 및 이용 동의(필수)"
        content={TERMS_BOX[0].content}
      />
      <TermList
        title="제 3자 정보 공유 동의(필수)"
        content={TERMS_BOX[1].content}
      />
    </>
  );
};

export default TermsSection;

const TERMS_BOX = [
  {
    content: `숨 회원 계정으로 상품을 구매하는 경우, 주식회사 써밋(이하 “회사”)은 사이트 이용을 위해 필요한 최소한의 범위로 개인정보를 수집합니다. 회사는 이용자의 사전 동의 없이는 이용자의 개인 정보를 공개하지 않으며, 다음과 같은 목적을 위하여 개인정보를 수집하고 이용합니다.
    \n1) 개인정보의 수집 및 이용 목적 : 상품 구매 중개, 구매 및 요금 결제, 상담 및 불만 처리, 상품 구매에 따른 혜택 제공
\n2) 수집하는 개인정보 항목 : 상품 구매정보, 결제수단
\n3) 개인정보의 보유 및 이용기간 : 개인정보 이용목적 달성 시까지 보관하며, 관계 법령의 규정에 의하여 일정 기간 보존이 필요한 경우에는 해당 기간만큼 보관 후 파기합니다. 
\n[전자상거래 등에서 소비자 보호에 관한 법률]
\n-계약 또는 청약철회 등에 관한 기록 : 5년 보관\n-대금결제 및 재화 등의 공급에 관한 기록 : 5년 보관 \n-소비자의 불만 또는 분쟁처리에 관한 기록 : 3년 보관
\n사용자는 개인정보 수집 및 이용에 대한 동의를 거부할 수 있으며, 동의 거부 시 마켓 상품 구매가 제한됩니다. 그밖의 내용은 회사의 이용약관 및 개인정보처리방침에 따릅니다.`,
  },
  {
    content: `숨 회원 계정으로 상품을 구매하는 경우, 주식회사 써밋(이하 “회사”)은 거래 당사자 간 원활한 의사소통, 상담, 서비스 제공 등 거래 이행을 위하여 필요한 최소한의 개인정보를 아래와 같이 제공합니다.
    \n개인정보를 제공받는 자 : 상품 판매자\n제공하는 개인정보 항목 : 이름, 상품 구매정보, 결제수단\n개인정보를 제공받는 자의 이용 목적 : 판매자와 구매자 간의 원활한 거래 진행, 본인의사의 확인, 상담 및 불만 처리, 서비스 제공, 상품 구매에 따른 혜택 제공\n개인정보를 제공받는 자의 개인정보 보유 및 이용기간 : 개인정보 이용목적 달성 시까지 보관하며, 관계 법령의 규정에 의하여 일정 기간 보존이 필요한 경우에는 해당 기간만큼 보관 후 파기합니다.\n사용자는 개인정보 제공에 대한 동의를 거부할 수 있으며, 동의 거부 시 마켓 상품 구매가 제한됩니다. 그밖의 내용은 회사의 이용약관 및 개인정보처리방침에 따릅니다.`,
  },
];
