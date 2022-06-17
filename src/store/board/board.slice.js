import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  target: null,
  dialog: { create: false },
  form: {},
  errors: {},
};

export const boardSlice = createSlice({
  name: "Board",
  initialState,
  reducers: {
    openDialog: (state, action) => {
      const { name } = action.payload;
      if (name in state.dialog) {
        state.dialog = { ...initialState.dialog, [name]: true };
      }
    },
    closeAndReset: (state, action) => {
      state.target = null;
      state.dialog = { ...initialState.dialog };
      state.form = { ...initialState.form };
      state.errors = { ...initialState.errors };
    },
  },
  extraReducers: {},
});

export const { openDialog, closeAndReset } = boardSlice.actions;

export default boardSlice.reducer;
