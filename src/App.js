import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import NavBar from './components/NavBar/NavBar';
import Register from './Views/Register/Register';
import TopBar from './components/TopBar/TopBar';
import Home from './Views/Home/Home';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setData } from "./redux/store.js";
import Invoices from "./Views/Invoices/Invoices";
import Products from "./Views/Products/Products";
import Clients from "./Views/Clients/Clients";
import WorldView from "./Views/WorldView/WorldView";

function App() {
  const userData = useSelector((state) => state.user)
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const location = useLocation()
  const [noData, setNoData] = useState(false)
  useEffect(() => {

    const getCharts = () => {
      fetch(`${process.env.REACT_APP_API_URL}/data`)
        .then(response => response.json())
        .then(data => {
          dispatch(setData(data))
        })
        .catch(error => {
          console.error('Error retrieving data:', error);
          setNoData(true)
        });

    }
    if(location.pathname !== '/register' && (!userData.username || !userData.email || !userData.pw)) {
    navigate('/register')
    }

    getCharts()
  })
  if (noData) {
    return (
      <>
        <div>
          The API is not live! Please start the JSON server.
        </div>
      </>
    )
  }
  return (
  <>
  <NavBar/>
    <TopBar/>
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/invoices' element={<Invoices/>} />
        <Route path='/products' element={<Products/>} />
        <Route path='/global' element={<WorldView/>} />
        <Route path='/clients' element={<Clients/>} />
        <Route exact path='/register' element={<Register />} />
        
    </Routes>
  </> 
  );
}

export default App;
