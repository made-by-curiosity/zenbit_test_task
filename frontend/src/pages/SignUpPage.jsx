import { AuthBgImg } from 'components/AuthBgImg/AuthBgImg';
import { AuthContainer } from 'components/AuthContainer/AuthContainer';
import { Section } from 'components/Section/Section';
import { SignUpForm } from 'components/SignUpForm/SignUpForm';

const SignUpPage = () => {
  return (
    <Section>
      <AuthBgImg />
      <AuthContainer>
        <SignUpForm />
      </AuthContainer>
    </Section>
  );
};

export default SignUpPage;
