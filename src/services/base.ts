import { fetchBaseQuery } from '@reduxjs/toolkit/query';

export const baseQuery = fetchBaseQuery({
  baseUrl: process.env.REACT_APP_API_URL,
  paramsSerializer: (params) => {
    const apiKey = process.env.REACT_APP_API_KEY;
    const queryParams = new URLSearchParams(params);
    if (apiKey) {
      queryParams.append('apiKey', apiKey);
    }
    return queryParams.toString();
  },
});
