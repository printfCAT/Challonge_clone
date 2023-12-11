import logo from './challonge-logo.png';
import bracket from './bracket.png';
import './App.css';
import countUp from './countUp';

window.onload = function() {
  countUp('graduateCount', 80000, 85000, 30);
};

function App() {
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
        <div className='intro'>
          <h1>Simplify Tournament Management</h1>
          <p>Thank you ALX Africa for allowing me to learn. ALX has produced more than <br /><b><span id="graduateCount">80000</span></b> graduates since 2021.</p>
          <button className='Tournament'>Create Tournament</button>
          <img src={bracket} alt="bracket" />
        </div>
        <div className='communities'>
          <h1>Challonge Communities</h1>
          <p>Host multiple tournaments, leagues and events for your loyal members.</p>
          <button className='learn-more'>Learn more</button>
        </div>
        <div className='game-settings'>
          <h1>Enjoy your game, we'll handle the <br />rest</h1>
          <p>Challonge has a variety of settings that can fit your friday night game <br />with friends.</p>
          <div className='diagonal-line'></div>
          <div className='game-columns'>
            <div className='types'>
              <h3>Choose a Type</h3>
              <p>Single Elimination</p>
              <p>Double Elimination</p>
              <p>Round Robin</p>
              <p>Swiss</p>
              <p>Free For All</p>
              <p>Two Stage (group stage + Final <br />stage)</p>`
            </div>
            <div className='participants'>
              <h3>Add Participants</h3>
              <p>Enter individually or in <br />bulk</p>
              <p>Invite by Email</p>
              <p>Host a sign-up page</p>
              <p>Require participants to <br />check in</p>
            </div>
            <div className='scores'>
              <h3>Report Scores</h3>
              <p>Advance match winners</p>
              <p>Delegate reporting permissions</p>
              <p>Email notifications as matches become <br />available</p>
            </div>
          </div>
        </div>
        <div className='conventions'>
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
          <a href='#null'><p>Features</p></a>
          <a href='#null'><p>About</p></a>
        </div>
        <div className='column3'>
          <h5>RESOURCES</h5>
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
  );
}

export default App;
