import PropTypes from 'prop-types';

import { Container } from './AuthContainer.styled';

export const AuthContainer = ({ children }) => {
  return <Container>{children}</Container>;
};

AuthContainer.propTypes = {
  children: PropTypes.node,
};
