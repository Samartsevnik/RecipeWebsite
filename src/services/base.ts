import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_API_URL,
  prepareHeaders: (headers) => {
    return headers;
  },
  paramsSerializer: (params) => {
    const apiKey = import.meta.env.VITE_API_KEY;
    const queryParams = new URLSearchParams(params);
    if (apiKey) {
      queryParams.append('apiKey', apiKey);
    }
    return queryParams.toString();
  },
});
