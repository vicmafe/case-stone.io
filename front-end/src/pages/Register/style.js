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
  margin: 20px 0;
  font-size: 30pt;
  color: #9d0208; // color
`;

export const Buttons = styled.div`
  margin-top: 35px;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
`;

export const Status = styled.p`
  position: absolute;
  left: 0;
  top: 25%;
  padding: 2%;
  border-top-right-radius: 10px;
  color: white; // color
  background-color: #9d0208; // color
  transition: 450ms;
  transform: translateX(${({ status }) => (status === '' ? '-101%' : '0')});
`;