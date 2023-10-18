import { Button } from './LogoutButton.styled';

import { FiLogOut } from 'react-icons/fi';

export const LogoutButton = () => {
  return (
    <Button type="button">
      <FiLogOut />
      <span>Log Out</span>
    </Button>
  );
};
