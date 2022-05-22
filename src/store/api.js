import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.REACT_APP_API_SERVER,
  prepareHeaders: (headers) => {
    const access_token = window.sessionStorage.getItem("access_token");
    if (access_token) {
      headers.set("Authorization", `Bearer ${access_token}`);
    }
    return headers;
  },
});

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: baseQuery,
  tagTypes: [],
  endpoints: () => ({}),
});
