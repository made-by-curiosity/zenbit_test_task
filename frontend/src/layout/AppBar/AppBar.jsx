import { Link } from 'react-router-dom';

import { HeaderWrapper, PageHeader } from './AppBar.styled';

import { Container } from 'components/Container/Container';

export const AppBar = () => {
  return (
    <PageHeader>
      <Container>
        <HeaderWrapper>
          <div>header</div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="login">Log In</Link>
            </li>
            <li>
              <Link to="signup">Sign Up</Link>
            </li>
          </ul>
        </HeaderWrapper>
      </Container>
    </PageHeader>
  );
};
