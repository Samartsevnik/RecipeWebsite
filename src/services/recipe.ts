import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from './base';
import {
  IRecipeInformation,
  IRecipeResponse,
} from './types/responsePayloadTypes';
import { SearchRecipesParams } from './types/requestPayloadTypes';

export const recipesApi = createApi({
  reducerPath: 'recipesApi',
  baseQuery,
  endpoints: (builder) => ({
    searchRecipes: builder.query<IRecipeResponse, SearchRecipesParams>({
      query: ({ query, cuisine, page }) => ({
        url: '/complexSearch',
        params: {
          cuisine,
          query,
          number: 5,
          offset: (page - 1) * 5,
        },
      }),
    }),
    getRecipeInformation: builder.query<IRecipeInformation, string>({
      query: (id) => ({
        url: `/${id}/information`,
        params: {
          includeNutrition: false,
        },
      }),
    }),
  }),
});

export const { useLazySearchRecipesQuery, useGetRecipeInformationQuery } =
  recipesApi;
