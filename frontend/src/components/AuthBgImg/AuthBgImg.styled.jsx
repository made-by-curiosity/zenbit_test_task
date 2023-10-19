import styled from 'styled-components';

import bg_img from 'assets/images/auth_bg_img.png';

export const Background = styled.div`
  min-height: 500px;
  width: 890px;

  height: calc(100vh - 80px);

  background-color: rgba(211, 211, 211, 0.5);
  background-image: url(${bg_img});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;
