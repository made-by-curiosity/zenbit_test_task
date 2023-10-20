import PropTypes from 'prop-types';

import { Background } from './AuthBgImg.styled';

export const AuthBgImg = ({ children }) => {
  return <Background>{children}</Background>;
};

AuthBgImg.propTypes = {
  children: PropTypes.node,
};
