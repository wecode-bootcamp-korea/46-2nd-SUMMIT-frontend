import styled from 'styled-components';

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 11;
`;

export const ModalContent = styled.div`
  width: 300px;
  background-color: #fff;
  padding: 20px;
  border-radius: 4px;
`;

export const ModalTitle = styled.h2`
  font-size: 18px;
  margin-bottom: 10px;
  text-align: center;
`;

export const ModalMessage = styled.p`
  text-align: center;
  font-size: 16px;
  margin-bottom: 20px;
`;

export const ModalButton = styled.button`
  padding: 10px 20px;
  width: 100%;
  background-color: ${props => props.theme.mainColor};
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;
