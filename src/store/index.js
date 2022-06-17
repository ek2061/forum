import {
  combineReducers,
  configureStore,
  isRejectedWithValue,
} from "@reduxjs/toolkit";
// import logger from "redux-logger";
import { apiSlice } from "./api";
import { appSlice } from "./app";
import { boardSlice } from "./board";
import { loginSlice } from "./login";

const reducer = combineReducers({
  app: appSlice.reducer,
  login: loginSlice.reducer,
  board: boardSlice.reducer,
  [apiSlice.reducerPath]: apiSlice.reducer,
});

const errorMiddleware = (api) => (next) => (action) => {
  if (isRejectedWithValue(action)) {
    // action.payload = { data: { msg: 'error message' }, status: 400 }
    api.dispatch({ type: "app/pushMessage", payload: action.payload });
  }
  return next(action);
};

const middlewareHandler = (getDefaultMiddleware) => {
  const middlewareList = [
    errorMiddleware,
    apiSlice.middleware,
    ...getDefaultMiddleware(),
  ];

  if (process.env.REACT_APP_DEBUG === "true") {
    // middlewareList.push(logger);
  }
  return middlewareList;
};

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => middlewareHandler(getDefaultMiddleware),
});
