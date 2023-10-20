import styled from 'styled-components';

export const LoadingWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  z-index: 999;
  background-color: rgba(10, 10, 10, 0.495);
  width: 100vw;
  height: 100vh;
`;

export const LoadingCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const NotificationWrapper = styled.div`
  max-width: 500px;
  padding: 20px;

  display: flex;
  flex-direction: column;
  gap: 10px;

  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  background-color: rgb(200, 200, 200);

  text-align: center;

  @media (max-width: 767px) {
    width: 270px;
  }
`;
