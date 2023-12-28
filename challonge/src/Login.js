import logo from './challonge-logo.png';
import './Login.css';

function Login() {
    return (
        <><head>
        </head>
        <header className="App-header">
        <a href='#null'><img src={logo} alt="logo" /></a>
        <div className='button-container'>
          <div className='login-container'>
            <a href='#null'><i class="fa-solid fa-magnifying-glass"></i></a>
            <button className="button1">Log in</button>
          </div>
          <button className="button2">Sign up</button>
        </div>
      </header>
      <body>
        <div className="login">
            <h1>Log in to Challonge</h1>
            <p>Welcome back! Please enter your details to log in</p>
            <div className='diagonal-line1'></div>
            <div className="input-container">
              <input className="input-email" type="text" placeholder="Username or email" />
              <input className="input-password" type="password" placeholder="Password" />
            </div>
            <div className="remember-checkbox">
              <input type="checkbox" id="remember" name="remember" />
              <label for="remember">Remember on this device</label>
              <a href='#null'>Forgot password</a>
            </div>
            <div className='diagonal-line'></div>
            <button className="login-button"><a href="#null">Log in</a></button>
        </div>
      </body>
      <footer>
        <div className='column1'>
          <a href='#null'><img src={logo} alt="logo" /></a>
          <p>&copy; 2023 Challonge, LLC</p>
        </div>
        <div className='column2'>
          <h5>EXPLORE</h5>
          <a href='#null'><p>Search Tournaments</p></a>
          <a href='#null'><p>Bracket Generator</p></a>
          <a href='#null'><p>Features</p></a>
          <a href='#null'><p>About</p></a>
        </div>
        <div className='column3'>
          <h5>RESOURCES</h5>
          <a href='#null'><p>API</p></a>
          <a href='#null'><p>Terms</p></a>
          <a href='#null'><p>Privacy</p></a>
        </div>
        <div className='column4'>
          <h5>GET IN TOUCH</h5>
          <div className='socials'>
            <a href='#null'><i class="fa-brands fa-facebook"></i></a>
            <a href='#null'><i class="fa-brands fa-twitter"></i></a>
            <a href='#null'><i class="fa-brands fa-youtube"></i></a>
          </div>
          <a href='#null'><p>Partners</p></a>
          <a href='#null'><p>Contact</p></a>
          <a href='#null'><p>Blog</p></a>
        </div>
      </footer></>
    )
}

export default Login
