import React from 'react';
import {
  CheckboxContainer,
  CheckboxRadio,
  CheckboxLabel,
  CheckboxDetail,
  CheckboxWrapper,
} from './Checkbox';

const Checkbox = ({ selectedCheckbox, handleCheck, text, type, detail }) => {
  return (
    <CheckboxContainer type={type}>
      <CheckboxWrapper clicked={selectedCheckbox === text}>
        <CheckboxRadio
          clicked={selectedCheckbox === text}
          onClick={() => handleCheck(text)}
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
