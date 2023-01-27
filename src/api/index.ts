import axios from 'axios';
import { LocalStorageHelper } from '../helper/local-storage';

export const api = axios.create({
  baseURL: 'http://localhost:3000',
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
