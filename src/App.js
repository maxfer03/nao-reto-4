import './App.css';
import { Route, Routes } from "react-router-dom";
import NavBar from './components/NavBar';
import Register from './components/Form/Register';
import TopBar from './components/TopBar';
import Home from './Views/Home/Home';
function App() {
  return (
  <>
  <NavBar/>
    <TopBar/>
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route exact path='/register' element={<Register />} />
    </Routes>
  </> 
  );
}

export default App;
