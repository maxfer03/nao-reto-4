import './App.css';
import { Route } from "react-router-dom";
import NavBar from './components/NavBar';
import Register from './components/Form/Register';
import Landing from './components/Root';
import Home from './Views/Home/Home';
function App() {
  return (
  <>
    <Route exact path = "/" component = {Home}/>
  </> 
  );
}

export default App;
