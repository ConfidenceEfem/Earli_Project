import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  firstname: '',
  lastname: '',
  email: '',
  password: '',
  childimageLink: [],
  childimage: '',
};

const EarliReducers = createSlice({
  name: 'EarliReducers',
  initialState,
  reducers: {
    addFirstname: (state, { payload }) => {
      state.firstname = payload;
    },
    addLastname: (state, { payload }) => {
      state.lastname = payload;
    },
    addEmail: (state, { payload }) => {
      state.email = payload;
    },
    addPassword: (state, { payload }) => {
      state.password = payload;
    },
    addChildLink: (state, { payload }) => {
      state.childimageLink = payload;
    },
    addchildimage: (state, { payload }) => {
      state.childimage = payload;
    },
  },
});

export const {
  addFirstname,
  addLastname,
  addEmail,
  addPassword,
  addChildLink,
  addchildimage,
} = EarliReducers.actions;

export default EarliReducers.reducer;
