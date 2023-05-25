import { useState, useEffect } from "react";
import './TopBar.scss'
import notif from '../../assets/svg/notif.svg';
import chat from '../../assets/svg/chat.svg';
import { useLocation } from "react-router-dom";
import { useSelector } from 'react-redux';


const TopBar = () => {

  const name = useSelector((state) => state.user.name)
  const surname = useSelector((state) => state.user.surname)


  const [isRegister, setIsRegister] = useState(false);
  const location = useLocation()
  useEffect(() => {
    setIsRegister(location.pathname === '/register');
  }, [location]);

  return ( 
    <>
    {isRegister ? null : (
      <div className="navbar top-bar">
        <div className="top-bar-left-content">
          <p className="welcome">Welcome, {name} {surname}</p>
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