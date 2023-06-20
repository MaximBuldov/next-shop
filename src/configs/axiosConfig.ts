import { getAccessToken, removeTokensStorage } from '../services/auth';
import axios from 'axios';
import qs from 'qs';

const $wpApi = axios.create({
  baseURL: process.env.WP_API || '',
  headers: {
    'Content-Type': 'application/json'
  },
  paramsSerializer: {
    serialize: (params: any) => qs.stringify(params)
  }
});

const $api = axios.create({
  baseURL: process.env.LOCAL_API || '',
  headers: {
    'Content-Type': 'application/json'
  },
  paramsSerializer: {
    serialize: (params: any) => qs.stringify(params)
  }
});

const $auth = axios.create({
  method: 'POST',
  baseURL: process.env.WP_API || ''
});

$auth.interceptors.request.use(async config => {
  const token = getAccessToken();

  if (token && config.headers) {
    config.headers.authorization = `Bearer ${token}`;
  }

  return config;
});

$auth.interceptors.response.use(config => config, error => {
  if (error.response.data.status === 403) {
    removeTokensStorage();
  }
  throw error;
})

export {
  $auth,
  $api,
  $wpApi
};