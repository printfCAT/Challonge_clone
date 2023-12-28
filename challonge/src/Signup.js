import logo from './challonge-logo.png';
import './Signup.css';

function Signup() {
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
        <div className="signup">
            <h1>SIgn up for Challonge</h1>
            <p>Get started easily by signing up to manage your tournaments and events!</p>
            <div className='diagonal-line1'></div>
            <div className="input-container">
              <input className="input-username" type="text" placeholder="Username" />
              <input className="input-email" type="text" placeholder="Email" />
              <input className="input-password" type="password" placeholder="Password" />
              <input className="input-password" type="password" placeholder="Password Confirmation" />
            </div>
            <div className='diagonal-line2'></div>
            <div className='time'><p>(+03:00) Nairobi</p></div>
            <div className='location'><p>Kenya</p></div>
            <div className='diagonal-line2'></div>
            <div className="agreement-checkbox">
              <input type="checkbox" id="agree" name="agree" />
              <label for="agree">I agree to the <span>Terms of Service</span> and <span>Privacy Policy</span>.</label>
            </div>
            <div className="promotional-checkbox">
              <input type="checkbox" id="promotion" name="promotion" />
              <label for="promotion">Send me occasional product updates and info about major tournaments.</label>
            </div>
            <div className='diagonal-line'></div>
            <button className="signup-button"><a href="#null">Create an account</a></button>
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

export default Signup
