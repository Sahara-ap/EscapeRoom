import axios, { AxiosInstance, InternalAxiosRequestConfig } from 'axios';
import { store } from '../store';
import { getToken } from './token';

type DetailMessageError = {
  type: string;
  message: string;
}
const BASE_URL = 'https://grading.design.htmlacademy.pro';
const REQUEST_TIMEOUT = 5000;

function createAPI():AxiosInstance {
  const api = axios.create({
    baseURL: BASE_URL,
    timeout: REQUEST_TIMEOUT
  });

  api.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      const token = getToken();

      if (token && config.headers) {
        config.headers['x-token'] = token;
      }
      return config;
    });

  return api;
}

export {createAPI};
