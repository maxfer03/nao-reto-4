import { configureStore, createSlice } from '@reduxjs/toolkit';
// Implementación de store de Redux

// - STORE: un contenedor centralizado del
//   estado de nuestra aplicación.
// - SLICE: sector de la store
//   que almacena data específica.
//   Cada slice tiene un initialState
//   y un o mas reducers y acciones.
//   Mi implementación tiene 2 slices:
//   - userSlice: data del usuario
//   - ChartsSlice: data extraída de nuestra DB
// - REDUCER: función de Redux
//   que nos permite acceder y modificar
//   la data de nuestro store
// - ACTIONS: la función de redux
//   que se ocupa de llamar al reducer
//   indicado

// inicializamos los slices
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


// extraemos las acciones de los slices
const {actions: userActions } = userSlice;
const {actions: chartActions } = chartsSlice;


// Creamos la store de redux
const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    charts: chartsSlice.reducer
    // se agregan mas reducers si hace falta
  },
});

// exportamos las acciones para que
// nuestra app puede editar y
// modificar la data.
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

// exportamos el store para 
// dárselo a nuestro providerr
export default store;
