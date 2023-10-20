import styled from 'styled-components';

export const CardsList = styled.ul`
  display: flex;

  flex-wrap: wrap;
  justify-content: center;
  row-gap: 20px;

  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1440px) {
    justify-content: space-between;
  }
`;
