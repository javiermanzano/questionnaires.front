import axios from 'axios';

let api = null;

const getHeaders = async () => {
  let headers = {
    'Content-Type': 'application/json',
    accept: 'application/json',
  };
  return headers;
};

const getInitializedApi = () => {
  if (api) {
    return api;
  }
  api = axios.create({
    baseURL: 'http://localhost:8000',
    responseType: 'json',
  });
  return api;
};

export const get = async (url, data) => {
  const headers = await getHeaders();
  return getInitializedApi().get(url, { headers, params: data });
};

export const post = async (url, data, options) => {
  const headers = await getHeaders();
  return getInitializedApi().post(url, data, { headers, ...options });
};

export const download = async (url, contentType) => {
  let headers = await getHeaders(url);
  if (contentType) {
    headers = {
      ...headers,
      'Content-Type': contentType,
      accept: contentType,
    };
  }
  return getInitializedApi().get(
    url,
    {
      headers,
      responseType: 'blob',
      data: {},
    });
};
