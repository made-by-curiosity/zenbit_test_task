import {
  AuthLink,
  FormTitle,
  FormWrapper,
  Input,
  InputLabel,
  InputsWrapper,
  LabelWrapper,
  NoAccountText,
  PasswordLink,
} from './LoginForm.styled';

import { MainButton } from 'components/MainButton/MainButton';

export const LoginForm = () => {
  return (
    <FormWrapper>
      <FormTitle>Login</FormTitle>
      <InputsWrapper>
        <LabelWrapper>
          <InputLabel>Email</InputLabel>
          <Input type="text" placeholder="Email" />
        </LabelWrapper>
        <LabelWrapper>
          <InputLabel>Password</InputLabel>
          <Input type="text" placeholder="Password" />
        </LabelWrapper>
      </InputsWrapper>
      <PasswordLink to="/signup">Forgot password?</PasswordLink>
      <MainButton text="Sign In" type="submit" />
      <NoAccountText>
        Don’t have account? <AuthLink to="/signup">Sign Up</AuthLink>
      </NoAccountText>
    </FormWrapper>
  );
};
