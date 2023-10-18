import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Navbar } from 'layout/Navbar/Navbar';
import { Loading } from 'components/Loading/Loading';
import { Header } from 'layout/Header/Header';
import { LogoutButton } from 'components/LogoutButton/LogoutButton';

export const Layout = () => {
  const isLoggedIn = false;

  return (
    <>
      <Header>{isLoggedIn ? <LogoutButton /> : <Navbar />}</Header>

      <Suspense fallback={<Loading text="Loading..." />}>
        <main>
          <Outlet />
        </main>
      </Suspense>
    </>
  );
};
