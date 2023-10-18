import { Suspense } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import { Navbar } from 'layout/Navbar/Navbar';
import { Loading } from 'components/Loading/Loading';
import { Header } from 'layout/Header/Header';
import { LogoutButton } from 'components/LogoutButton/LogoutButton';

export const Layout = () => {
  const location = useLocation();

  const isLoginPage = location.pathname === '/login';
  const isSignUpPage = location.pathname === '/signup';

  const isVisible = !isLoginPage && !isSignUpPage;

  const isLoggedIn = false;

  return (
    <>
      <Header>
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
