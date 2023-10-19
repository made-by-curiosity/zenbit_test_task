import { Button } from './SecondaryLinkBtn.styled';

export const SecondaryLinkBtn = ({ children, onClick, ...props }) => {
  return (
    <Button onClick={onClick} {...props}>
      {children}
    </Button>
  );
};
