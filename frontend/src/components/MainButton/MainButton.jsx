import PropTypes from 'prop-types';

import { Button } from './MainButton.styled';

export const MainButton = ({ text, type, ...props }) => {
  return (
    <Button type={type} {...props}>
      {text}
    </Button>
  );
};

MainButton.propTypes = {
  text: PropTypes.string,
  type: PropTypes.string,
};
