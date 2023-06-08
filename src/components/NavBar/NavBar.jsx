import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import './NavBar.scss'
import logo from '../../assets/svg/logo.svg'
import home from '../../assets/svg/home.svg'
import analytics from '../../assets/svg/analytics.svg'
import product from '../../assets/svg/product.svg'
import payment from '../../assets/svg/payment.svg'
import clients from '../../assets/svg/clients.svg'
import logout from '../../assets/svg/logout.svg'

// Componente de barra de navegación
// Este componente funciona como un drawer
// en mobile, y un fixed side bar en desktop

const NavBar = () => {

  const [isRegister, setIsRegister] = useState(false);
  const location = useLocation()
  
  // checkeamos si actualmente estamos en la vista de registrado
  useEffect(() => {
    setIsRegister(location.pathname === '/register');
  }, [location]);

  // si NO estamos en la vista de registrado,
  // el componente se renderiza normalmente
  return ( 
    <>
    {isRegister ? null : (
      <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <label htmlFor="my-drawer-2" className=" drawer-button btn">
          <div className="btn-inner">
            <div className="bars"/>
            <div className="bars"/>
            <div className="bars"/>
          </div>
        </label>
      
      </div> 
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
        <div className="menu p-4 w-80 bg-base-100 text-base-content">
          <label htmlFor="my-drawer-2" className="drawer-button btn">
            <div className="btn-inner">
              <div className="bars"/>
              <div className="bars"/>
              <div className="bars"/>
            </div>
          </label>
          <img className="groth-logo" src={logo} alt="Groth Logo"/>
          <ul className="menu-items">
            <li>
              <NavLink to="/">
                <img src={home} alt="Icon" />
                <span>Dashboard</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/global">
                <img src={analytics} alt="Icon" />
                <span>Global Sales</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/products">
                <img src={product} alt="Icon" />
                <span>Products</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/invoices">
                <img src={payment} alt="Icon" />
                <span>Invoices</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/clients">
                <img src={clients} alt="Icon" />
                <span>Clients</span>
              </NavLink>
            </li>
          </ul>
          <div className="separator"/>
          <ul className="menu-items">
            <li>
              <NavLink to="/register">
                <img src={logout} alt="Icon" />
                <span>Logout</span>
              </NavLink>
            </li>
          </ul>
        </div>
      
      </div>
    </div>
    )}
    </> 
  );
}
 
export default NavBar;