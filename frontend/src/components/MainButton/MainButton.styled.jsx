import styled from 'styled-components';

export const Button = styled.button`
  padding: 11px;

  text-align: center;
  font-family: 'Merriweather', serif;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.38;

  color: #fff;
  border-radius: 5px;
  background-color: #b29f7e;

  transition: opacity 200ms ease-out;

  &:hover,
  &:focus {
    opacity: 0.7;
  }

  &:active {
    opacity: 0.9;
  }
`;
