import axios from 'axios';

const URL_BASE = import.meta.env.VITE_URL_BASE;

const clientAxios = axios.create({
  baseURL: URL_BASE,
  headers: {
    'Content-Type': 'application/json; charset=UTF-8',
  },
});

clientAxios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default clientAxios;
