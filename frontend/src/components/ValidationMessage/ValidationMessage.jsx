import PropTypes from 'prop-types';

import { ErrorMessage } from './ValidationMessage.styled';

export const ValidationMessage = ({ children, ...props }) => {
  return <ErrorMessage {...props}>{children}</ErrorMessage>;
};

ValidationMessage.propTypes = {
  children: PropTypes.node,
};
