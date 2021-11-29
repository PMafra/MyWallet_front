import axios from 'axios';

const API_URL = 'https://my-wallet-driven.herokuapp.com';

const createHeaders = (token) => ({
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

const signUp = (body) => axios.post(`${API_URL}/sign-up`, body);
const signIn = (body) => axios.post(`${API_URL}/sign-in`, body);
const signOut = (token) => axios.post(`${API_URL}/sign-out`, {}, createHeaders(token));
const sendNewRecord = (token, body) => axios.post(`${API_URL}/records`, body, createHeaders(token));
const getUserRecords = (token) => axios.get(`${API_URL}/records`, createHeaders(token));

export {
  signUp,
  signIn,
  signOut,
  sendNewRecord,
  getUserRecords,
};
