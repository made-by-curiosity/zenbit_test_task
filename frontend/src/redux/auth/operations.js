import { createAsyncThunk } from '@reduxjs/toolkit';
// import {
//   clearAuthHeader,
//   setAuthHeader,
//   logInUser,
//   signUpUser,
//   logOutUser,
//   getUserInfo,
// } from 'services/contactsAPI';

export const signUp = createAsyncThunk(
  'auth/signUp',
  async (credentials, thunkAPI) => {
    try {
      // const userData = await signUpUser(credentials);
      // setAuthHeader(userData.token);
      // return userData;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/logIn',
  async (credentials, thunkAPI) => {
    try {
      // const userData = await logInUser(credentials);
      // setAuthHeader(userData.token);
      // return userData;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk('auth/logOut', async (_, thunkAPI) => {
  try {
    // await logOutUser();
    // clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    // const state = thunkAPI.getState();
    // const persistedToken = state.auth.token;

    // if (persistedToken === null) {
    //   return thunkAPI.rejectWithValue('Unable to fetch user');
    // }

    try {
      // setAuthHeader(persistedToken);
      // const userData = await getUserInfo();
      // return userData;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const resetStore = createAsyncThunk(
  'auth/resetStore',
  async (_, thunkAPI) => {
    try {
      // clearAuthHeader();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
