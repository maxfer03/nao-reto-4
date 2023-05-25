import { configureStore, createSlice } from '@reduxjs/toolkit';

// Create a slice
const userSlice = createSlice({
  name: 'user',
  initialState: {
    name: '',
    surname: '',
    username: '',
    email: '',
    pw: ''
  },
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setSurname: (state, action) => {
      state.surname = action.payload;
    },
    setUsername: (state, action) => {
      state.username = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPw: (state, action) => {
      state.pw = action.payload;
    },
  },
});

const chartsSlice = createSlice({
  name: 'charts',
  initialState: {
    data: {}
  },
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
  },
});


// Extract the reducer and actions from the slice
const {actions: userActions } = userSlice;
const {actions: chartActions } = chartsSlice;


// Create the Redux store
const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    charts: chartsSlice.reducer
    // Add other reducers here if needed
  },
});


export const {
  setName,
  setSurname,
  setUsername,
  setEmail,
  setPw,
} = userActions;

export const {
  setData
} = chartActions;

export default store;
