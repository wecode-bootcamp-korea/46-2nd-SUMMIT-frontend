import styled from 'styled-components';

export const RegisterContainer = styled.div`
  height: 100vh;
  background: url(image/seats.jpg);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  text-align: center;
  position: relative;

  &:before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: 0.2;
  }

  .form {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 40%;
    margin: auto;
    gap: 10px;
    background-color: transparent;
  }

  input,
  select {
    background-color: rgba(0, 0, 0, 0.3);
    border: none;
    color: white;
    padding: 4px;
    border-radius: 10px;
    text-align: center;
    height: 35px;
    font-size: 15px;
  }

  input::placeholder {
    color: white;
    font-size: 15px;
  }

  .theater {
    display: flex;
    justify-content: space-around;
  }

  .region,
  .address {
    width: 50%;
    display: inline-block;
  }

  .submit {
    background-color: #831010;
    color: white;
    border: none;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    border-radius: 2px;
    transition: background-color 1s ease-in;

    &:hover {
      background-color: white;
      opacity: 0.8;
      color: #831010;
      border: 1px solid #831010;
      cursor: pointer;
    }
  }

  .showDetail {
    height: 70px;
  }

  .additional {
    height: 40px;
  }
`;

export const RegisterTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: 500;
  color: white;
  margin-bottom: 15px;
`;

export const ResultMessage = styled.div`
  font-size: 1rem;
  color: white;
  font-style: italic;
  margin-top: 20px;
`;
