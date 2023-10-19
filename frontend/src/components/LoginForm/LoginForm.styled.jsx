import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const FormWrapper = styled.form`
  width: 350px;

  display: flex;
  flex-direction: column;
`;

export const FormTitle = styled.p`
  margin-bottom: 20px;

  font-family: 'Merriweather', serif;
  font-size: 28px;
  font-weight: 700;
  line-height: 1.21;

  color: #172234;
`;

export const InputsWrapper = styled.div`
  margin-bottom: 10px;

  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const LabelWrapper = styled.label`
  position: relative;

  display: flex;
  flex-direction: column;
  gap: 3px;

  cursor: pointer;
`;

export const InputLabel = styled.span`
  font-family: 'Merriweather', serif;
  font-size: 14px;
  font-weight: 700;
  line-height: 1.43;

  color: #000;
`;

export const Input = styled.input`
  width: 350px;
  padding: 14px 20px 12px 20px;

  border-radius: 5px;
  border: 2px solid #e0e0e0;
  background: #e0e0e0;

  cursor: pointer;

  border-color: ${props => (props.$isValid ? '#e0e0e0' : 'red')};
`;

export const PasswordLink = styled(Link)`
  margin-bottom: 30px;
  margin-left: auto;

  text-align: right;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.57;

  color: #b29f7e;

  transition: opacity 200ms ease-out;

  &:hover,
  &:focus {
    opacity: 0.7;
  }

  &:active {
    opacity: 0.9;
  }
`;

export const NoAccountText = styled.p`
  margin-top: 10px;

  text-align: center;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.57;

  color: #172234;
`;

export const AuthLink = styled(Link)`
  color: #b29f7e;

  transition: opacity 200ms ease-out;

  &:hover,
  &:focus {
    opacity: 0.7;
  }

  &:active {
    opacity: 0.9;
  }
`;
