import { Link } from 'react-router-dom';
import React, { useState, useEffect, useContext } from 'react';
import { LoggedinContext } from '../App/App';
import logo from '../assets/challonge-logo.png';
import challongelogo from '../assets/challonge-logo2.png';
import './loggedinHeader.css';

function LoggedinHeader() {
  const [menuVisible1, setMenuVisible1] = useState(false);
  const [menuVisible2, setMenuVisible2] = useState(false);
  const { setLoggedin } = useContext(LoggedinContext);

  const toggleNotifications = () => {
    setMenuVisible1(!menuVisible1);
    setMenuVisible2(false);
  }
  const toggleMenu = () => {
    setMenuVisible2(!menuVisible2);
    setMenuVisible1(false);
  };

  const [notifications, setNotifications] = useState([
    { id: 1, message: 'Notification 1', read: false },
    { id: 2, message: 'Notification 2', read: false },
  ]);

  const markAsRead = (id) => {
    const updatedNotifications = notifications.map((notification) =>
      notification.id === id ? { ...notification, read: true } : notification
    );
    setNotifications(updatedNotifications);
  };

  const removeNotification = (id) => {
    const updatedNotifications = notifications.filter((notification) => notification.id !== id);
    setNotifications(updatedNotifications);
  };

  const markAsReadAndRemoveNotification = (event, id) => {
    event.stopPropagation();
    markAsRead(id);
    removeNotification(id);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        !event.target.closest('.bell') &&
        !event.target.closest('.notifications-bar')
      ) {
        setMenuVisible1(false);
      }

      if (!event.target.closest('.logged-logo')) {
        setMenuVisible2(false);
      }
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  const handleLogout = () => {
    setLoggedin(false);
    localStorage.removeItem('loggedin');
  }

    return (
        <header className="loggedin-App-header">
        <Link to='/Challonge_clone/mytournaments'><img src={logo} alt="logo" /></Link>
        <div className='loggedin-button-container'>
          <div className='loggedin-login-container'>
            <Link to='/Challonge_clone/tournaments'><i class="fa-solid fa-magnifying-glass"></i></Link>
            <div className={`bell ${menuVisible1 ? 'active' : ''}`} onClick={toggleNotifications}>
              <i class="fa-solid fa-bell"></i>
              {menuVisible1 && (
                <div className="notifications-bar">
                  <div className="loggedin-heading">
                    <h3>NOTIFICATIONS</h3>
                  </div>
                  {notifications.length === 0 ? (
                    <p><i>No notifications</i></p>
                  ) : (
                    <ul>
                      {notifications.map((notification) => (
                        <li
                          key={notification.id}
                          className={notification.read ? 'read' : ''}
                          onClick={(event) => markAsReadAndRemoveNotification(event, notification.id)}>
                          {notification.message}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
            </div>
            <div className={`logged-logo ${menuVisible2 ? 'active' : ''}`} onClick={toggleMenu}>
              <img src={challongelogo} alt="challongelogo" />
              {menuVisible2 && (
                <div className="dropdown-menu">
                  <Link to='/Challonge_clone/mytournaments' className="dropdown-item1"><p>Dashboard</p></Link>
                  <Link to='/Challonge_clone' className="dropdown-item1" onClick={handleLogout}><p>Log out</p></Link>
                </div>
              )}
            </div>
          </div>
          <div className="space"></div>
        </div>
        </header>
    )
}

export default LoggedinHeader;
