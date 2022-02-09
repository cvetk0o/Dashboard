/* eslint-disable no-useless-concat */
import axios from 'axios';

const axiosInstance = axios.create();

axiosInstance.interceptors.response.use(undefined, err => {
  // check if status is 401 user is unauthorized
  if (err?.response?.status === 401) {
    localStorage.removeItem('token');
    // navigate user to login page
    if (window.location.pathname !== '/login') window.location.pathname = '/login';
  }

  // when user attemps to get forbidden resource
  if (err?.response?.status === 403) {
    window.location.pathname = '/forbidden';
  }

  return Promise.reject(err);
});

axiosInstance.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token');
    if (token) {
      // eslint-disable-next-line no-param-reassign
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
