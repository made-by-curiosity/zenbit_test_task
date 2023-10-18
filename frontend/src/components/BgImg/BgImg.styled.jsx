import styled from 'styled-components';

import bg_img from 'assets/images/hero_bg.png';

export const Background = styled.div`
  min-height: 500px;

  height: 100vh;

  background: linear-gradient(
      to right,
      rgba(23, 34, 52, 0.6),
      rgba(23, 34, 52, 0.6)
    ),
    url(${bg_img});

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;
