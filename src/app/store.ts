import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import { createLogger } from "redux-logger";
import { setupListeners } from "@reduxjs/toolkit/query";
import { winesApi } from "./../services/wine";
import { petApi } from "./../petApi";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const loggerMiddleware = createLogger({});

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [winesApi.reducerPath]: winesApi.reducer,
    [petApi.reducerPath]: petApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    if (process.env.NODE_ENV !== "production") {
      return getDefaultMiddleware({
        serializableCheck: false,
        immutableCheck: false,
      })
        .concat(loggerMiddleware)
        .concat(winesApi.middleware)
        .concat(petApi.middleware);
    }
    return getDefaultMiddleware().concat(winesApi.middleware);
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);
