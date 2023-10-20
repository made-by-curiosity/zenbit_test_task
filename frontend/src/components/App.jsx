import { lazy, useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import { Layout } from 'layout/Layout/Layout';
import { Loading } from 'components/Loading/Loading';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsRefreshing } from 'redux/auth/selectors';
import { refreshUser } from 'redux/auth/operations';
import { RestrictedRoute } from './RestrictedRoute/RestrictedRoute';

const HomePage = lazy(() => import('../pages/HomePage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const SignUpPage = lazy(() => import('../pages/SignUpPage'));

export const App = () => {
  const isRefreshing = useSelector(selectIsRefreshing);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      {isRefreshing && <Loading text="Loading..." />}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/login"
            element={
              <RestrictedRoute component={<LoginPage />} restrictedTo="/" />
            }
          />
          <Route
            path="/signup"
            element={
              <RestrictedRoute component={<SignUpPage />} restrictedTo="/" />
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </>
  );
};
