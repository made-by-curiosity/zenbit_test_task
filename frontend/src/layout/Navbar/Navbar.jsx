import { NavList } from './Navbar.styled';
import { LinkButton } from 'components/LinkButton/LinkButton';

export const Navbar = () => {
  return (
    <nav>
      <NavList>
        <li>
          <LinkButton text="Home" to="/" />
        </li>
        <li>
          <LinkButton text="Log In" to="login" />
        </li>
        <li>
          <LinkButton text="Sign Up" to="signup" filled="true" />
        </li>
      </NavList>
    </nav>
  );
};
