import { Link } from 'react-router-dom';
import logo from '../assets/challonge-logo.png';
import './Header.css';

function Header() {
    return (
        <><header className="App-header">
        <Link to='/Challonge_clone'><img src={logo} alt="logo" /></Link>
        <div className='button-container'>
          <div className='login-container'>
            <Link to='/tournaments'><i class="fa-solid fa-magnifying-glass"></i></Link>
            <Link to="/login" className="button1">Log in</Link>
          </div>
          <Link to="/signup" className="button2">Sign up</Link>
        </div>
        </header></>
    )
}

export default Header;
