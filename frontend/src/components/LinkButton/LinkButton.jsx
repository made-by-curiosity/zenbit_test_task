import { LinkBtn } from './LinkButton.styled';

export const LinkButton = ({ text, to, ...props }) => {
  return (
    <LinkBtn to={to} {...props}>
      {text}
    </LinkBtn>
  );
};
