import logo from './challonge-logo.png';
import './myEvent.css';
import slot from './slot.jpg';

function myEvents() {
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
        <div className="empty-space"></div>
        <div className="main-event">
            <div className="menu">
                <ul>
                    <li className="item1"><a href="#null"><i class="fa-solid fa-trophy"></i></a></li>
                    <li className="item2"><a href="#null"><i class="fa-solid fa-ticket"></i></a></li>
                    <li className="item3"><a href="#null"><i class="fa-solid fa-users"></i></a></li>
                </ul>
                <div className="diagonal-line1"></div>
                <ul>
                    <li className="item4"><a href="null"><i class="fa-solid fa-compass"></i></a></li>
                </ul>
            </div>
            <div className="content">
                <h1>Your Events</h1>
                <button className="create"><a href="#null">Create an Event</a></button>
                <div className="diagonal-line"></div>
                <div className="commence">
                  <div className="text">
                    <h2>Start building your <br />event!</h2>
                    <p>Create multiple tournaments, sell tickets, <br />manage attendees, and more.</p>
                    <button className="create2"><a href="#null">Create an Event</a></button>
                  </div>
                  <div className="image"><img src={slot} alt="slot" /></div>
                </div>
        </div>
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

export default myEvents;
