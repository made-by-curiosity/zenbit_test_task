import { ErrorMessage } from './ValidationMessage.styled';

export const ValidationMessage = ({ children, ...props }) => {
  return <ErrorMessage {...props}>{children}</ErrorMessage>;
};
