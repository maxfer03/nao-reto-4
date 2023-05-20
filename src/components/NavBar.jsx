import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import './NavBar.scss'
import analytics from '../assets/svg/analytics.svg'
import logo from '../assets/svg/logo.svg'

const NavBar = () => {

  const [isRegister, setIsRegister] = useState(false);
  const location = useLocation()
  useEffect(() => {
    setIsRegister(location.pathname === '/register');
  }, [location]);


  return ( 
    <>
    {isRegister ? null : (
      <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <label htmlFor="my-drawer-2" className=" drawer-button btn">X</label>
      
      </div> 
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
        <div className="menu p-4 w-80 bg-base-100 text-base-content">
          <label htmlFor="my-drawer-2" className="drawer-button btn">X</label>
          <img className="groth-logo" src={logo} alt="Groth Logo"/>
          <ul className="menu-items">
            <li>
              <NavLink to="/">
                <img src={analytics} alt="Icon" />
                <span>Dashboard</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/analytics">
                <img src={analytics} alt="Icon" />
                <span>Analytics</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/products">
                <img src={analytics} alt="Icon" />
                <span>Products</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/payment">
                <img src={analytics} alt="Icon" />
                <span>Payment</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/orders">
                <img src={analytics} alt="Icon" />
                <span>Orders</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/clients">
                <img src={analytics} alt="Icon" />
                <span>Clients</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/marketing">
                <img src={analytics} alt="Icon" />
                <span>Marketing</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/settings">
                <img src={analytics} alt="Icon" />
                <span>Settings</span>
              </NavLink>
            </li>
          </ul>
          <div className="separator"/>
          <ul className="menu-items">
            <li>
              <NavLink to="/user">
                <img src={analytics} alt="Icon" />
                <span>User</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/register">
                <img src={analytics} alt="Icon" />
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