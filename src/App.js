import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import NavBar from './components/NavBar/NavBar';
import Register from './Views/Register/Register';
import TopBar from './components/TopBar/TopBar';
import Home from './Views/Home/Home';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
function App() {
  const userData = useSelector((state) => state.user)
  const navigate = useNavigate()
  const location = useLocation()
  console.log(location)
  useEffect(() => {
    if(location.pathname !== '/register' && (!userData.username || !userData.email || !userData.pw)) {
    navigate('/register')
    }
  })
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
