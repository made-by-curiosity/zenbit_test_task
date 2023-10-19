import {
  AuthLink,
  FormTitle,
  FormWrapper,
  Input,
  InputLabel,
  LabelWrapper,
  NoAccountText,
} from 'components/LoginForm/LoginForm.styled';
import { PasswordInputsWrapper } from './SignUpForm.styled';
import { MainButton } from 'components/MainButton/MainButton';

export const SignUpForm = () => {
  return (
    <FormWrapper>
      <FormTitle>Sign Up</FormTitle>
      <PasswordInputsWrapper>
        <LabelWrapper>
          <InputLabel>Name</InputLabel>
          <Input type="text" placeholder="Name" />
        </LabelWrapper>
        <LabelWrapper>
          <InputLabel>Email</InputLabel>
          <Input type="text" placeholder="Email" />
        </LabelWrapper>
        <LabelWrapper>
          <InputLabel>Password</InputLabel>
          <Input type="text" placeholder="Password" />
        </LabelWrapper>
      </PasswordInputsWrapper>
      <MainButton text="Sign Up" type="submit" />
      <NoAccountText>
        Already have an account? <AuthLink to="/login">Log In</AuthLink>
      </NoAccountText>
    </FormWrapper>
  );
};
