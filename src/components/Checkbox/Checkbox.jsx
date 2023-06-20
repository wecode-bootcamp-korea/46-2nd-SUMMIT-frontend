import React from 'react';
import { useRecoilState } from 'recoil';
import { ReservationAtom } from '../../Recoil/ReservationAtom.jsx';
import {
  CheckboxContainer,
  CheckboxRadio,
  CheckboxLabel,
  CheckboxDetail,
  CheckboxWrapper,
} from './Checkbox';

const Checkbox = ({ selectedCheckbox, handleCheck, text, type, detail }) => {
  const [reservationData, setReservationData] = useRecoilState(ReservationAtom);
  return (
    <CheckboxContainer type={type}>
      <CheckboxWrapper clicked={selectedCheckbox === text}>
        <CheckboxRadio
          clicked={selectedCheckbox === text}
          onClick={() => {
            handleCheck(text);
            setReservationData(prev => ({
              ...prev,
              time: text,
            }));
          }}
        />
        <CheckboxLabel clicked={selectedCheckbox === text}>
          {text}
        </CheckboxLabel>
      </CheckboxWrapper>
      <CheckboxDetail clicked={selectedCheckbox === text}>
        {detail}
      </CheckboxDetail>
    </CheckboxContainer>
  );
};

export default Checkbox;
