import { useDispatch } from 'react-redux';

import { Button } from './LogoutButton.styled';

import { FiLogOut } from 'react-icons/fi';

import { logOut } from 'redux/auth/operations';

export const LogoutButton = () => {
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <Button type="button" onClick={handleLogOut}>
      <FiLogOut />
      <span>Log Out</span>
    </Button>
  );
};
