import logo from '../assets/challonge-logo.png';
import './Header.css';

function Header() {
    return (
        <><header className="App-header">
        <a href='#null'><img src={logo} alt="logo" /></a>
        <div className='button-container'>
          <div className='login-container'>
            <a href='#null'><i class="fa-solid fa-magnifying-glass"></i></a>
            <button className="button1">Log in</button>
          </div>
          <button className="button2">Sign up</button>
        </div>
        </header></>
    )
}

export default Header;
