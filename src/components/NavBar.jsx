import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './NavBar.scss'
import analytics from '../assets/svg/analytics.svg'
import logo from '../assets/svg/logo.svg'

const NavBar = () => {

  const [isRegister, setIsRegister] = useState(false);

  useEffect(() => {
    setIsRegister(window.location.pathname === '/register');
  }, []);


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
              <a href="/">
                <img src={analytics} alt="Icon" />
                <span>Dashboard</span>
              </a>
            </li>
            <li>
              <a href="/">
                <img src={analytics} alt="Icon" />
                <span>Analytics</span>
              </a>
            </li>
            <li>
              <a href="/">
                <img src={analytics} alt="Icon" />
                <span>Products</span>
              </a>
            </li>
            <li>
              <a href="/">
                <img src={analytics} alt="Icon" />
                <span>Payment</span>
              </a>
            </li>
            <li>
              <a href="/">
                <img src={analytics} alt="Icon" />
                <span>Orders</span>
              </a>
            </li>
            <li>
              <a href="/">
                <img src={analytics} alt="Icon" />
                <span>Clients</span>
              </a>
            </li>
            <li>
              <a href="/">
                <img src={analytics} alt="Icon" />
                <span>Marketing</span>
              </a>
            </li>
            <li>
              <a href="/">
                <img src={analytics} alt="Icon" />
                <span>Setting</span>
              </a>
            </li>
          </ul>
          <div className="separator"/>
          <ul className="menu-items">
            <li>
              <a href="/">
                <img src={analytics} alt="Icon" />
                <span>User</span>
              </a>
            </li>
            <li>
              <a href="/">
                <img src={analytics} alt="Icon" />
                <span>Logout</span>
              </a>
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