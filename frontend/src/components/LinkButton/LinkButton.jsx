import { LinkBtn } from './LinkButton.styled';

export const LinkButton = ({ text, to, filled, ...props }) => {
  return (
    <LinkBtn to={to} filled={filled} {...props}>
      {text}
    </LinkBtn>
  );
};
