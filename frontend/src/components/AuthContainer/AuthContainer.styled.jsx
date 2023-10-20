import styled from 'styled-components';

export const Container = styled.div`
  max-width: 375px;
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;

  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    max-width: 550px;
    padding: 0 100px;
  }
`;
