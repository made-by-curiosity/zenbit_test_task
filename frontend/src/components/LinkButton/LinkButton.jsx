import PropTypes from 'prop-types';

import { LinkBtn } from './LinkButton.styled';

export const LinkButton = ({ text, to, filled, ...props }) => {
  return (
    <LinkBtn to={to} filled={filled} {...props}>
      {text}
    </LinkBtn>
  );
};

LinkButton.propTypes = {
  text: PropTypes.string,
  to: PropTypes.string,
};
