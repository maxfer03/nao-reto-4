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


// Extract the reducer and actions from the slice
const { reducer, actions } = userSlice;

// Create the Redux store
const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    // Add other reducers here if needed
  },
});


export const {
  setName,
  setSurname,
  setUsername,
  setEmail,
  setPw,
} = actions;

export default store;
