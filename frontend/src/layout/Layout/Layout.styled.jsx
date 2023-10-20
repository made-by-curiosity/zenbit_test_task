import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const Logo = styled(Link)`
  margin-right: auto;

  align-self: center;

  font-family: 'Merriweather', serif;
  font-size: 16px;
  line-height: 1.21;

  color: #fff;

  @media screen and (min-width: 768px) {
    font-size: 28px;
  }
`;
