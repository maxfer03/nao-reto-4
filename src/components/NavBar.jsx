import { useState, useEffect } from "react";
import './NavBar.scss'


const NavBar = () => {

  const [isRegister, setIsRegister] = useState(false);

  useEffect(() => {
    setIsRegister(window.location.pathname === '/register');
  }, []);


  return ( 
    <>
    {isRegister ? null : (
      <div className="drawer drawer-mobile absolute pointer-events-none">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <label htmlFor="my-drawer-2" className=" drawer-button btn">X</label>
      
      </div> 
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
        <ul className="menu p-4 w-80 bg-base-100 text-base-content">
        <label htmlFor="my-drawer-2" className="drawer-button btn">X</label>
          <li><a>Sidebar Item 1</a></li>
          <li><a>Sidebar Item 2</a></li>
        </ul>
      
      </div>
    </div>
    )}
    </> 
  );
}
 
export default NavBar;