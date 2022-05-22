import { createSlice } from "@reduxjs/toolkit";
import _ from "lodash";

const initialState = {
  theme: "dark",
  messages: [],
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    pushMessage: (state, action) => {
      // eg. status:= 400, data:= {code: 40010, msg: "Bad request."}
      const { data, status } = action.payload;
      state.messages.push({ status, data });
    },
    popMessage: (state, action) => {
      const { message } = action.payload;
      state.messages = _.reject(state.messages, message);
    },
  },
});

export const { pushMessage, popMessage } = appSlice.actions;
