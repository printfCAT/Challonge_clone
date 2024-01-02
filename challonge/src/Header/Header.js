import { Link } from 'react-router-dom';
import logo from '../assets/challonge-logo.png';
import './Header.css';

function Header() {
    return (
        <><header className="App-header">
        <Link to='/'><img src={logo} alt="logo" /></Link>
        <div className='button-container'>
          <div className='login-container'>
            <Link to='/tournaments'><i class="fa-solid fa-magnifying-glass"></i></Link>
            <button className="button1"><Link to="/login">Log in</Link></button>
          </div>
          <button className="button2"><Link to="/signup">Sign up</Link></button>
        </div>
        </header></>
    )
}

export default Header;
