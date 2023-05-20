import React from "react";
import ReactDOM from "react-dom/client";

import "./index.scss";
import App from "./App";
import Root from "./components/Root";
import Register from "./components/Register";
import NavBar from "./components/NavBar";

import { BrowserRouter, Routes, Route, Link} from "react-router-dom" 
import TopBar from "./components/TopBar";
import Home from "./Views/Home/Home";




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
            <NavBar/>
            <TopBar/>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route exact path='/register' element={<Register />} />
            </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

