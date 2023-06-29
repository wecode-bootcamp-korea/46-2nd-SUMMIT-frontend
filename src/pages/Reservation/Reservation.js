import styled from 'styled-components';

export const ReservationContainer = styled.div`
  padding: 10px 100px;
  height: 100%;
  margin-top: 90px;
  margin-left: 600px;
`;

export const MainTitle = styled.h1`
  font-size: 2rem;
  font-weight: 600;
  width: 130px;
  border-bottom: 2px solid #dfdfdf;
  padding-bottom: 10px;
`;

export const SubCategory = styled.h2`
  font-size: 1.5rem;
  font-weight: 500;
  width: 450px;
  margin: 40px 0px 20px 0px;
  border-bottom: 2px solid #dfdfdf;
  padding-bottom: 5px;
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
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const ButtontoCheckout = styled.div`
  position: relative;
  padding: 20px 0;
  margin: 20px 0px 100px 300px;
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
`;

export const Input = styled.input`
  border: #881010 1px solid;
  margin-left: 5px;
`;
