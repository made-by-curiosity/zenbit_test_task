import styled from 'styled-components';

export const Button = styled.button`
  padding: 10px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;

  font-family: 'Merriweather', serif;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.375;

  color: #ffffff;

  border-radius: 5px;
  border: 1px solid #ffffff;

  transition: opacity 200ms ease-out;

  &:hover,
  &:focus {
    opacity: 0.7;
  }

  &:active {
    opacity: 0.4;
  }

  & > svg {
    width: 20px;
    height: 20px;
  }
`;
