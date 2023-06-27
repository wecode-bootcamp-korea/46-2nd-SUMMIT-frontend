import { atom } from 'recoil';

export const commentBoxAtom = atom({
  key: 'commentBoxAtom',
  default: [
    {
      id: '1',
      category: '공연리뷰',
      subject: '레미제라블',
      grade: 4,
      title: '정말 재밌어요! 강.추!',
      content: '여자친구랑 봤는데, 정말 재밌었어요! \n \n몰입감 최고입니다.',
      date: '5월 29일',
      count: '4',
      user: 'RM',
    },
    {
      id: '2',
      category: '공연장리뷰',
      subject: '예술의전당',
      title: '3층에서는 보지마세요!',
      content:
        '1,2층 좌석이 매진이라 어쩔 수 없이 3층 예매했습니다.\n\n배우들 얼굴 안보이는 것 까지는 예상했지만,\n\n소리도 잘 안들리더군요.',
      date: '5월 28일',
      count: '2',
      user: '정국',
    },
    {
      id: '3',
      category: '공연리뷰',
      subject: '오페라의 유령',
      grade: 5,
      title: '조승우 연기력 ... 미쳤습니다.',
      content:
        '1,2층 좌석이 매진이라 어쩔 수 없이 3층 예매했습니다.\n\n배우들 얼굴 안보이는 것 까지는 예상했지만,\n\n소리도 잘 안들리더군요.',
      date: '5월 28일',
      count: '3',
      user: '슈가',
    },
    {
      id: '4',
      category: '공연홍보',
      subject: '사랑은 향기를 남기고',
      title: '첫사랑의 풋풋함을 느끼실 수 있는 뮤지컬!',
      content: (
        <>
          무대는 그리스 지중해의 외딴섬...
          <br />
          <br />
          젊은 날 한때 꿈 많던 아마추어 그룹 리드 싱어였으나 지금은 작은 모텔의
          여주인이 된 도나(Donna)와 그녀의 스무 살 난 딸 소피(Sophie)가
          주인공이다.
          <br />
          <br />
          도나의 보살핌 아래 홀로 성장해온 소피는 약혼자 스카이(Sky)와의 결혼을
          앞두고 아빠를 찾고 싶어 하던 중 엄마가 처녀시절 쓴 일기장을 몰래
          훔쳐보게 된다.
          <br />
          <br />
          그리고 그 안에서 찾은, 자신의 아버지일 가능성이 있는 세 명의 남자,
          샘(Sam Carnichael), 빌(Bill Austin), 해리(Harry Bright)에게 어머니의
          이름으로 초청장을 보내는데...
        </>
      ),
      date: '5월 27일',
      count: '5',
      user: '뷔',
    },
    {
      id: '5',
      category: '공연장리뷰',
      subject: '세종문화회관',
      title: '시설은 좋지만, 뮤지컬을 보기에는 적합하지 않은 장소!',
      content:
        '와... 이번에 3열 중앙에서 공연관람했는데, 오랜만에 정말 너무좋았습니다. 함께 갔던 여자친구도 너무 좋아하고 ...',
      date: '5월 26일',
      count: '7',
      user: 'RM',
    },
    {
      id: '6',
      category: '공연리뷰',
      subject: '레미제라블',
      grade: 2,
      title: '오페라의 유령 조승우 완전 멋있어요!!',
      content: (
        <>
          무대는 그리스 지중해의 외딴섬...
          <br />
          <br />
          젊은 날 한때 꿈 많던 아마추어 그룹 리드 싱어였으나 지금은 작은 모텔의
          여주인이 된 도나(Donna)와 그녀의 스무 살 난 딸 소피(Sophie)가
          주인공이다.
          <br />
          <br />
          도나의 보살핌 아래 홀로 성장해온 소피는 약혼자 스카이(Sky)와의 결혼을
          앞두고 아빠를 찾고 싶어 하던 중 엄마가 처녀시절 쓴 일기장을 몰래
          훔쳐보게 된다.
          <br />
          <br />
          그리고 그 안에서 찾은, 자신의 아버지일 가능성이 있는 세 명의 남자,
          샘(Sam Carnichael), 빌(Bill Austin), 해리(Harry Bright)에게 어머니의
          이름으로 초청장을 보내는데...
        </>
      ),
      date: '5월 25일',
      count: '2',
      user: '정국',
    },
    {
      id: '7',
      category: '공연장리뷰',
      subject: 'LG아트센터',
      title: '배우들의 얼굴이 잘 보일 수 있는 공연장 구조 짱!',
      content: (
        <>
          무대는 그리스 지중해의 외딴섬...
          <br />
          <br />
          젊은 날 한때 꿈 많던 아마추어 그룹 리드 싱어였으나 지금은 작은 모텔의
          여주인이 된 도나(Donna)와 그녀의 스무 살 난 딸 소피(Sophie)가
          주인공이다.
          <br />
          <br />
          도나의 보살핌 아래 홀로 성장해온 소피는 약혼자 스카이(Sky)와의 결혼을
          앞두고 아빠를 찾고 싶어 하던 중 엄마가 처녀시절 쓴 일기장을 몰래
          훔쳐보게 된다.
          <br />
          <br />
          그리고 그 안에서 찾은, 자신의 아버지일 가능성이 있는 세 명의 남자,
          샘(Sam Carnichael), 빌(Bill Austin), 해리(Harry Bright)에게 어머니의
          이름으로 초청장을 보내는데...
        </>
      ),
      date: '5월 24일',
      count: '1',
      user: '전지현',
    },
    {
      id: '8',
      category: '공연홍보',
      subject: '맘마이아',
      title: '영화보다 더 감동적인 뮤지컬 맘마미아!',
      content: (
        <>
          무대는 그리스 지중해의 외딴섬...
          <br />
          <br />
          젊은 날 한때 꿈 많던 아마추어 그룹 리드 싱어였으나 지금은 작은 모텔의
          여주인이 된 도나(Donna)와 그녀의 스무 살 난 딸 소피(Sophie)가
          주인공이다.
          <br />
          <br />
          도나의 보살핌 아래 홀로 성장해온 소피는 약혼자 스카이(Sky)와의 결혼을
          앞두고 아빠를 찾고 싶어 하던 중 엄마가 처녀시절 쓴 일기장을 몰래
          훔쳐보게 된다.
          <br />
          <br />
          그리고 그 안에서 찾은, 자신의 아버지일 가능성이 있는 세 명의 남자,
          샘(Sam Carnichael), 빌(Bill Austin), 해리(Harry Bright)에게 어머니의
          이름으로 초청장을 보내는데...
        </>
      ),
      date: '5월 23일',
      count: '3',
      user: '송중기',
    },
    {
      id: '9',
      category: '공연홍보',
      subject: '드림하이',
      title: '1년만에 다시 돌아온 청춘뮤지컬 드림하이!',
      content: (
        <>
          무대는 그리스 지중해의 외딴섬...
          <br />
          <br />
          젊은 날 한때 꿈 많던 아마추어 그룹 리드 싱어였으나 지금은 작은 모텔의
          여주인이 된 도나(Donna)와 그녀의 스무 살 난 딸 소피(Sophie)가
          주인공이다.
          <br />
          <br />
          도나의 보살핌 아래 홀로 성장해온 소피는 약혼자 스카이(Sky)와의 결혼을
          앞두고 아빠를 찾고 싶어 하던 중 엄마가 처녀시절 쓴 일기장을 몰래
          훔쳐보게 된다.
          <br />
          <br />
          그리고 그 안에서 찾은, 자신의 아버지일 가능성이 있는 세 명의 남자,
          샘(Sam Carnichael), 빌(Bill Austin), 해리(Harry Bright)에게 어머니의
          이름으로 초청장을 보내는데...
        </>
      ),
      date: '5월 22일',
      count: '1',
      user: '이나영',
    },
  ],
});

export const debateBox = atom({
  key: 'debateBox',
  default: [
    {
      id: '1',
      imgUrl:
        'https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      imgTitle: '뮤지컬 주연배우로 아이돌이 괜찮은가?',
    },
    {
      id: '2',
      imgUrl:
        'https://images.unsplash.com/photo-1517230878791-4d28214057c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1738&q=80',
      imgTitle: '뮤지컬을 보기에 가장 좋은 좌석은 맨 앞좌석이다?',
    },
    {
      id: '3',
      imgUrl:
        'https://images.unsplash.com/photo-1621976498727-9e5d56476276?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
      imgTitle: '뮤지컬 내한공연은 생각보다 별로다?',
    },
    {
      id: '4',
      imgUrl:
        'https://images.unsplash.com/photo-1499364615650-ec38552f4f34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1544&q=80',
      imgTitle: '뮤지컬의 퀄리티는 티켓값과 비례한다?',
    },
  ],
});
