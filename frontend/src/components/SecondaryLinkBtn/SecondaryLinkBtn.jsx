import { Button } from './SecondaryLinkBtn.styled';

export const SecondaryLinkBtn = ({ children, onClick }) => {
  return <Button onClick={onClick}>{children}</Button>;
};
