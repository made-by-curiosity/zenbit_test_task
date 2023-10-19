import { AuthBgImg } from 'components/AuthBgImg/AuthBgImg';
import { AuthContainer } from 'components/AuthContainer/AuthContainer';
import { LoginForm } from 'components/LoginForm/LoginForm';
import { Section } from 'components/Section/Section';

const LoginPage = () => {
  return (
    <Section>
      <AuthBgImg />
      <AuthContainer>
        <LoginForm />
      </AuthContainer>
    </Section>
  );
};

export default LoginPage;
