import axiosOriginal from 'axios';
import qs from 'qs';

/* AXIOS INSTANCE */
const setBackendUrl = () =>
  // some backend
  'https://64d086e5ff953154bb7901eb.mockapi.io/';
const formatParams = (params: Record<string, unknown>): string =>
  qs.stringify(params, { indices: false, arrayFormat: 'repeat' });

export const axios = axiosOriginal.create({
  baseURL: `${setBackendUrl()}`,
  paramsSerializer: formatParams,
});
