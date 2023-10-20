import styled from 'styled-components';

export const MainContainer = styled.div`
  max-width: 375px;
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;

  display: flex;
  flex-direction: column;
  gap: 20px;

  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding: 0 40px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1440px;
    padding: 0 80px;
  }
`;
