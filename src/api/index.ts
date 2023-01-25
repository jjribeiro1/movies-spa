import axios from 'axios';
import { LocalStorageHelper } from '../helper/local-storage';
const bearerToken = `Bearer ${LocalStorageHelper.getItem('access_token')}`;

export const api = axios.create({
  baseURL: 'http://localhost:3000',
});

api.interceptors.request.use(
  function (config) {
    config.headers = {
      Authorization: bearerToken,
    };

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);
