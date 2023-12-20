import axios, { AxiosError, AxiosInstance } from 'axios';
import { store } from '../store';

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


  return api;
}

export {createAPI};
