import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

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
import { ValidationMessage } from 'components/ValidationMessage/ValidationMessage';

import { logIn } from 'redux/auth/operations';

const emailRegex = /^\w+(\.?\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

const defaultValues = {
  email: '',
  password: '',
};

const schema = yup
  .object({
    email: yup
      .string()
      .matches(emailRegex, 'Invalid email format')
      .required('Email is required'),
    password: yup
      .string()
      .min(6, 'Must be at least 6 characters')
      .max(16, `Can't be longer than 16 characters`)
      .required('Password is required'),
  })
  .required();

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: defaultValues,
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const dispatch = useDispatch();

  const onSubmit = data => {
    dispatch(logIn(data));
    reset();
  };

  return (
    <FormWrapper onSubmit={handleSubmit(onSubmit)}>
      <FormTitle>Login</FormTitle>
      <InputsWrapper>
        <LabelWrapper>
          <InputLabel>Email</InputLabel>
          <Input
            type="text"
            placeholder="Email"
            {...register('email')}
            $isValid={!errors.email}
            autoFocus
            autoComplete="off"
          />
          {errors.email && (
            <ValidationMessage role="alert">
              {errors.email.message}
            </ValidationMessage>
          )}
        </LabelWrapper>
        <LabelWrapper>
          <InputLabel>Password</InputLabel>
          <Input
            type="password"
            placeholder="Password"
            {...register('password')}
            $isValid={!errors.password}
            autoComplete="off"
          />
          {errors.password && (
            <ValidationMessage role="alert">
              {errors.password.message}
            </ValidationMessage>
          )}
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
