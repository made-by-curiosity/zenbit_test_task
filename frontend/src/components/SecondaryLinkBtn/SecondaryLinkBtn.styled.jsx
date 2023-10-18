import styled from 'styled-components';

export const Button = styled.a`
  display: inline-flex;
  padding: 10px 24px;
  align-items: center;

  border-radius: 8px;
  border: 1px solid #fff;

  color: #fff;
  font-family: 'Merriweather', serif;
  font-size: 20px;
  font-weight: 700;
  line-height: 1.7;

  cursor: pointer;

  transition: opacity 200ms ease-out;

  &:hover,
  &:focus {
    opacity: 0.7;
  }

  &:active {
    opacity: 0.4;
  }
`;
