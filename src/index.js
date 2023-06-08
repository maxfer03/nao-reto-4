import React from "react";
import ReactDOM from "react-dom/client";

import "./index.scss";
import App from "./App";

import { BrowserRouter} from "react-router-dom" 

import { Provider } from 'react-redux';
import store from "./redux/store";





const root = ReactDOM.createRoot(document.getElementById('root'));
// wrapping de nuestra App con el browserRouter y el Provider,
// para permitir la implementación de Redux y routing.
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
      <App/>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

