import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const LinkBtn = styled(Link)`
  width: 100px;
  padding: 10px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-family: 'Merriweather', serif;
  font-size: 12px;
  font-weight: 700;
  line-height: 1.375;

  color: #b29f7e;

  border-radius: 5px;
  border: 1px solid #b29f7e;

  ${props =>
    props.filled &&
    `
  color: #ffffff;
	background-color: #B29F7E;
	`}

  transition: opacity 200ms ease-out;

  &:hover,
  &:focus {
    opacity: 0.7;
  }

  &:active {
    opacity: 0.4;
  }

  @media screen and (min-width: 768px) {
    width: 160px;
    padding: 10px;

    font-size: 16px;
  }
`;
