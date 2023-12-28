import logo from './challonge-logo.png';
import bracket from './bracket.png';
import './App.css';
import countUp from './countUp';
import top from './top.png';
import bottom from './bottom.png';
import holberton from './holberton-logo.png';
import alx from './alx-logo.png';
import mcf from './mcf-logo.png';
import room from './the-room.png';

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
          <div className="buttons">
            <button className='Tournament'><a href="#null">Create Tournament</a></button>
            <button className='bracket'><a href="#null">Try Our Bracket Generator</a></button>
          </div>
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
          <div className='convention-content'>
            <div className='convention-images'>
              <img className='top' src={top} alt="top" />
              <img className='bottom' src={bottom} alt="bottom" />
            </div>
            <div className='convention-info'>
              <h1>Create event pages for your <br />conventions</h1>
              <p>Got an event with multiple tournaments? We got you. Use Challonge's <br />Event feature</p>
              <div className='diagonal-line'></div>
              <div className='multiple-tournaments'>
                <h3>Multiple tournaments in one</h3>
                <p>Got a convention with multiple tournaments? Manage them all in just one <br />event page.</p>
              </div>
              <div className='tickets'>
                <h3>Sell tickets</h3>
                <p>From admission to tournament registration tickets.</p>
              </div>
              <div className='event-activity'>
                <h3>Track your event activity</h3>
                <p>Track sales, visits, and orders with your event management dashboard.</p>
              </div>
            </div>
          </div>
          <div className='trustees'>
            <h2>Trusted by</h2>
            <div className='logos'>
              <img src={holberton} alt="holberton logo" />
              <img src={mcf} alt="mastercard logo" />
              <img src={alx} alt="alx logo" />
              <img src={room} alt="the room logo" />
            </div>
          </div>
        </div>
        <div className="overview">
          <div className="embed">
            <iframe title="Challonge Overview" width="988" height="557" src="https://www.youtube.com/embed/iYz7p6Ic-yE" frameborder="0" allowfullscreen></iframe>
          </div>
          <div className="conclusion">
            <h1>Providing the right tools for the <br />gaming community</h1>
            <p>I aim to keep things simple, but there's plenty more to explore <br />on my challonge clone project.</p>
            <button className="signup">Sign Up Free</button>
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
