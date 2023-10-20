import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import {
  AuthLink,
  FormTitle,
  FormWrapper,
  Input,
  InputLabel,
  LabelWrapper,
  NoAccountText,
} from 'components/LoginForm/LoginForm.styled';
import { PasswordInputsWrapper, Required } from './SignUpForm.styled';

import { MainButton } from 'components/MainButton/MainButton';
import { ValidationMessage } from 'components/ValidationMessage/ValidationMessage';

import { signUp } from 'redux/auth/operations';

const emailRegex = /^\w+(\.?\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

const defaultValues = {
  name: '',
  email: '',
  password: '',
};

const schema = yup
  .object({
    name: yup.string().required('Name is required'),
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

export const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: defaultValues,
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const dispatch = useDispatch();

  const onSubmit = data => {
    dispatch(signUp(data));
    reset();
  };

  return (
    <FormWrapper onSubmit={handleSubmit(onSubmit)}>
      <FormTitle>Sign Up</FormTitle>
      <PasswordInputsWrapper>
        <LabelWrapper>
          <InputLabel>
            Name <Required>*</Required>
          </InputLabel>
          <Input
            type="text"
            placeholder="Name"
            {...register('name')}
            $isValid={!errors.name}
            autoFocus
            autoComplete="off"
          />
          {errors.name && (
            <ValidationMessage role="alert">
              {errors.name.message}
            </ValidationMessage>
          )}
        </LabelWrapper>
        <LabelWrapper>
          <InputLabel>
            Email <Required>*</Required>
          </InputLabel>
          <Input
            type="text"
            placeholder="Email"
            {...register('email')}
            $isValid={!errors.email}
            autoComplete="off"
          />
          {errors.email && (
            <ValidationMessage role="alert">
              {errors.email.message}
            </ValidationMessage>
          )}
        </LabelWrapper>
        <LabelWrapper>
          <InputLabel>
            Password <Required>*</Required>
          </InputLabel>

          <Input
            type="password"
            placeholder="Password"
            {...register('password')}
            $isValid={!errors.password}
          />
          {errors.password && (
            <ValidationMessage role="alert">
              {errors.password.message}
            </ValidationMessage>
          )}
        </LabelWrapper>
      </PasswordInputsWrapper>
      <MainButton text="Sign Up" type="submit" disabled={!isValid} />
      <NoAccountText>
        Already have an account? <AuthLink to="/login">Log In</AuthLink>
      </NoAccountText>
    </FormWrapper>
  );
};
