import {
  configureStore,
  ThunkAction,
  Action,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import { createLogger } from "redux-logger";
import { setupListeners } from "@reduxjs/toolkit/query";
import { winesApi } from "./../services/wine";
import { GetPostReturnDto, petApi } from "./../petApi";

const loggerMiddleware = createLogger({});

const postsAdapter = createEntityAdapter<GetPostReturnDto>({
  selectId: (post) => post._id,
});

const postsSlice = createSlice({
  initialState: {},
  reducers: {},
  name: "posts",
  extraReducers: (builder) => {
    builder.addMatcher(
      petApi.endpoints.postsControllerFindAll.matchFulfilled,
      (state, action) => {
        //@ts-ignore
        postsAdapter.setAll(state, action.payload);
      }
    );
  },
});

export const store = configureStore({
  reducer: {
    posts: postsSlice.reducer,
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
