import styled from 'styled-components';

export const ReservationContainer = styled.div`
  padding: 10px 100px;
  width: 100%;
  margin-left: 500px;
  height: 100%;
`;

export const MainTitle = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  margin: 20px auto 40px auto;
`;

export const SubCategory = styled.h2`
  font-size: 1.5rem;
  font-weight: 500;
  margin: 30px auto 20px auto;
`;

export const Category = styled.div`
  display: flex;
  margin: 10px auto;
  align-items: center;
`;

export const CategoryTitle = styled.div`
  font-size: 1rem;
  font-weight: 500;
`;

export const CategoryItem = styled.div`
  font-size: 1rem;
  font-weight: 300;
  margin-left: 5px;
`;

export const CategoryKey = styled.div`
  font-size: 1rem;
  font-weight: 500;
  margin-left: 5px;
`;

export const CategoryValue = styled.div`
  font-size: 1rem;
  font-weight: 300;
  margin: 0 4px;
`;

export const CheckboxSection = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const ButtontoCheckout = styled.div`
  position: relative;
  left: 300px;
  padding: 20px 0;
`;

export const ResetBtn = styled.button`
  background-color: #831010;
  color: white;
  border: none;
  border-radius: 2px;
  transition: background-color 1s ease-in;
  width: 90px;
  height: 25px;
  margin-left: 10px;
  align-self: flex-end;
`;

export const Input = styled.input`
  border: #881010 1px solid;
  margin-left: 5px;
`;
