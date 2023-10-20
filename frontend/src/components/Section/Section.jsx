import PropTypes from 'prop-types';

import { AuthSection } from './Section.styled';

export const Section = ({ children }) => {
  return <AuthSection>{children}</AuthSection>;
};

Section.propTypes = {
  children: PropTypes.node,
};
