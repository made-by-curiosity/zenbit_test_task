import axios from 'axios';

const BASE_URL = 'https://zenbit-real-estate.onrender.com/api';
const DEALS = '/deals';
const ALL_DEALS = `${DEALS}/all`;
const USERS = '/users';
const SIGN_UP = `${USERS}/register`;
const LOG_IN = `${USERS}/login`;
const LOG_OUT = `${USERS}/logout`;
const CURRENT_USER = `${USERS}/current`;

axios.defaults.baseURL = BASE_URL;

export const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = ``;
};

// user auth

export const signUpUser = async credentials => {
  const res = await axios.post(SIGN_UP, credentials);

  return res.data;
};

export const logInUser = async credentials => {
  const res = await axios.post(LOG_IN, credentials);

  return res.data;
};

export const logOutUser = async () => {
  const res = await axios.post(LOG_OUT);

  return res.data;
};

export const getUserInfo = async () => {
  const res = await axios.get(CURRENT_USER);

  return res.data;
};

// deals

export const getAllDeals = async () => {
  const res = await axios.get(ALL_DEALS);
  return res.data.deals;
};
