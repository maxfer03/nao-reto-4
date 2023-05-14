import { useState, useEffect } from "react";
import './TopBar.scss'
import notif from'../assets/svg/notif.svg';
import chat from'../assets/svg/chat.svg';


const TopBar = () => {

  const [isRegister, setIsRegister] = useState(false);

  useEffect(() => {
    setIsRegister(window.location.pathname === '/register');
  }, []);

  return ( 
    <>
    {isRegister ? null : (
      <div className="navbar top-bar">
        <div className="top-bar-left-content">
          <p>Welcome, James</p>
          <p>1 October  2022 | 11:59 AM GMT</p>
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