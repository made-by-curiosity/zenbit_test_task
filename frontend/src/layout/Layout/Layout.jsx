import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { AppBar } from 'layout/AppBar/AppBar';
import { Loading } from 'components/Loading/Loading';

export const Layout = () => {
  return (
    <>
      <AppBar />

      <Suspense fallback={<Loading text="Loading..." />}>
        <Outlet />
      </Suspense>
    </>
  );
};
