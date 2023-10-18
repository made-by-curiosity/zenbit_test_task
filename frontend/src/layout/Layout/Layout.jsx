import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Navbar } from 'layout/Navbar/Navbar';
import { Loading } from 'components/Loading/Loading';
import { Header } from 'layout/Header/Header';

export const Layout = () => {
  return (
    <>
      <Header>
        <Navbar />
      </Header>

      <Suspense fallback={<Loading text="Loading..." />}>
        <main>
          <Outlet />
        </main>
      </Suspense>
    </>
  );
};
