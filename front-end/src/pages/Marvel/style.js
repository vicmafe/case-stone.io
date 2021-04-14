import styled from 'styled-components';

export const Container = styled.div`
  background-color: #f5f3f4;
  height: 100vh;
  display: flex;
  padding: 2%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  margin-top: 20px 0;
  font-size: 20pt;
  color: #9d0208; // color
  justify-content: center;
`;

export const Buttons = styled.div`
  margin-top: 35px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 500px;
`;

export const ButtonA = styled.div`
  display: flex;
  justify-content: space-between;
  width: 40%;
`;

export const ButtonB = styled.div`
  display: flex;
  justify-content: space-between;
  width: 40%;
`;
export const Image = styled.div`
  display: flex;
  width: 80%;
  justify-content: center;
`;
