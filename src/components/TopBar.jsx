import { useState, useEffect } from "react";
import './TopBar.scss'
import notif from '../assets/svg/notif.svg';
import chat from '../assets/svg/chat.svg';
import { useLocation } from "react-router-dom";


const TopBar = () => {

  const [isRegister, setIsRegister] = useState(false);
  const location = useLocation()
  useEffect(() => {
    setIsRegister(location.pathname === '/register');
    console.log('top', location)
  }, [location]);

  return ( 
    <>
    {isRegister ? null : (
      <div className="navbar top-bar">
        <div className="top-bar-left-content">
          <p className="welcome">Welcome, James</p>
          <p className="date">1 October  2022 | 11:59 AM GMT</p>
        </div>
        <div className="top-bar-right-content">
          <div className="top-bar-right-content-icons">
            <img src={chat} alt="Chat"/>
            <img src={notif} alt="Notifications"/>
          </div>
          <div className="top-bar-right-content-separator"/>
          <input type="text" placeholder="Search" className="input input-bordered" />
        </div>
      </div>
    ) }
    </>
   );
}
 
export default TopBar;