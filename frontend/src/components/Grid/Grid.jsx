import PropTypes from 'prop-types';

import { CardsList } from './Grid.styled';

export const Grid = ({ children }) => {
  return <CardsList>{children}</CardsList>;
};

Grid.propTypes = {
  children: PropTypes.node,
};
