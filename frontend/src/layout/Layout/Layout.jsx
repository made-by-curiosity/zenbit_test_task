import { Suspense } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Logo } from './Layout.styled';

import { Header } from 'layout/Header/Header';
import { Navbar } from 'layout/Navbar/Navbar';

import { Loading } from 'components/Loading/Loading';
import { LogoutButton } from 'components/LogoutButton/LogoutButton';

import { selectIsLoggedIn } from 'redux/auth/selectors';

export const Layout = () => {
  const location = useLocation();

  const isLoginPage = location.pathname === '/login';
  const isSignUpPage = location.pathname === '/signup';

  const isVisible = !isLoginPage && !isSignUpPage;

  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      <Header>
        <Logo to="/">LOGO</Logo>
        {isVisible && (isLoggedIn ? <LogoutButton /> : <Navbar />)}
      </Header>

      <Suspense fallback={<Loading text="Loading..." />}>
        <main>
          <Outlet />
        </main>
      </Suspense>
    </>
  );
};
