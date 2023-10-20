import PropTypes from 'prop-types';

import { Background } from './BgImg.styled';

export const BgImg = ({ children }) => {
  return <Background>{children}</Background>;
};

BgImg.propTypes = {
  children: PropTypes.node,
};
