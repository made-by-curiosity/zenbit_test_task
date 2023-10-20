import PropTypes from 'prop-types';

import { HeaderWrapper, PageHeader } from './Header.styled';

import { Container } from 'components/Container/Container';

export const Header = ({ children }) => {
  return (
    <PageHeader>
      <Container>
        <HeaderWrapper>{children}</HeaderWrapper>
      </Container>
    </PageHeader>
  );
};

Header.propTypes = {
  children: PropTypes.node,
};
