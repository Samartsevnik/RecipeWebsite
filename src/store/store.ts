import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { recipesApi } from '../services/recipe.ts';

export const store = configureStore({
  reducer: combineReducers({
    [recipesApi.reducerPath]: recipesApi.reducer,
  }),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(recipesApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
