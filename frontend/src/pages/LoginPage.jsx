import { AuthBgImg } from 'components/AuthBgImg/AuthBgImg';
import { AuthContainer } from 'components/AuthContainer/AuthContainer';
import { Section } from 'components/Section/Section';

const LoginPage = () => {
  return (
    <Section>
      <AuthBgImg />
      <AuthContainer>
        <div>form</div>
      </AuthContainer>
    </Section>
  );
};

export default LoginPage;
