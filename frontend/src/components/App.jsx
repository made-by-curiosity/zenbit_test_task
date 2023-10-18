import { lazy } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import { Layout } from 'layout/Layout/Layout';
import { Loading } from 'components/Loading/Loading';

const HomePage = lazy(() => import('../pages/HomePage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const SignUpPage = lazy(() => import('../pages/SignUpPage'));

export const App = () => {
  const isRefreshing = false;

  return (
    <>
      {isRefreshing && <Loading />}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </>
  );
};
