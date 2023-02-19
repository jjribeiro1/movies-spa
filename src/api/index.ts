import axios from 'axios';
import { LocalStorageHelper } from '../helper/local-storage';

export const api = axios.create({
  baseURL:
    import.meta.env.MODE === 'development'
      ? import.meta.env.VITE_DEV_BASE_URL
      : import.meta.env.VITE_PROD_BASE_URL,
});


api.interceptors.request.use(
  function (config) {
    const bearerToken = `Bearer ${LocalStorageHelper.getItem('access_token')}`;
    if (bearerToken) {
      config.headers = {
        Authorization: bearerToken,
      };
    }

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);
