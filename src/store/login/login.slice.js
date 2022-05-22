import { createSlice } from "@reduxjs/toolkit";
import { ERROR } from "constant";

const initialState = {
  form: {
    account: "",
    password: "",
  },
  errors: {
    account: "",
    password: "",
  },
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    resetForm: (state) => {
      state.form = { ...initialState.form };
      state.error = { ...initialState.errors };
    },
    setAccount: (state, action) => {
      const text = action.payload ?? "";
      state.form.account = text;
      const re = /^[a-zA-Z0-9]{4,12}$/g;
      switch (true) {
        case !text:
          state.errors.account = ERROR.isRequired;
          break;
        case !text.match(re):
          state.errors.account = ERROR.isInvalid;
          break;
        default:
          state.errors.account = "";
          break;
      }
    },
    setPassword: (state, action) => {
      const text = action.payload ?? "";
      state.form.password = text;
      const re = /^[a-zA-Z0-9]{4,12}$/g;
      switch (true) {
        case !text:
          state.errors.password = ERROR.isRequired;
          break;
        case !text.match(re):
          state.errors.password = ERROR.isInvalid;
          break;
        default:
          state.errors.password = "";
          break;
      }
    },
  },
});

export const selectForm = (state) => state.login.form;

export const selectErrors = (state) => state.login.errors;

export const { resetForm, setAccount, setPassword } = loginSlice.actions;

export default loginSlice.reducer;
