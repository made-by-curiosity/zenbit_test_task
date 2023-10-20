import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  clearAuthHeader,
  setAuthHeader,
  logInUser,
  signUpUser,
  logOutUser,
  getUserInfo,
} from 'services/realEstateApi';

import { Notify } from 'notiflix';

export const signUp = createAsyncThunk(
  'auth/signUp',
  async (credentials, thunkAPI) => {
    try {
      const userData = await signUpUser(credentials);
      setAuthHeader(userData.token);

      return userData;
    } catch (error) {
      Notify.failure(
        'Ops... Something went wrong. Maybe your email is already used. Please try again.'
      );
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/logIn',
  async (credentials, thunkAPI) => {
    try {
      const userData = await logInUser(credentials);
      setAuthHeader(userData.token);
      return userData;
    } catch (error) {
      Notify.failure(
        'Ops... Your email or password is incorrect. Please try again.'
      );
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk('auth/logOut', async (_, thunkAPI) => {
  try {
    await logOutUser();
    clearAuthHeader();
  } catch (error) {
    if (error.response && error.response.status === 401) {
      thunkAPI.dispatch(resetStore());
    }
    Notify.failure('Ops...Something went wrong. Please try again.');
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      setAuthHeader(persistedToken);
      const userData = await getUserInfo();

      return userData;
    } catch (error) {
      if (error.response && error.response.status === 401) {
        Notify.failure('Ops...Something went wrong. Please try again.');
        thunkAPI.dispatch(resetStore());
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const resetStore = createAsyncThunk(
  'auth/resetStore',
  async (_, thunkAPI) => {
    try {
      clearAuthHeader();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
