import logo from './challonge-logo.png';
import plan from './plan.png';
import members from './members.png';
import stats from './stats.png';
import membersicon from './members-icon.png';
import adminsicon from './admins-icon.png';
import bracketsicon from './brackets-icon.png';
import support from './support-icon.png';
import './About.css';

function About() {
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
            <div className="intro">
                <h1>Play Together With Challonge <br />Communities</h1>
                <p>Co-Host, Organize, and Promote your tournaments, leagues, and events all <br />from one place. Challonge Communities allow you to mobilize participants for <br />frequent competitions. Get started for free.</p>
                <button className="start"><a href="#null">Start a new community for free</a></button>
                <button className="find"><a href="#null">Find a community</a></button>
            </div>
            <div className="floating-section">
                <div className="plan">
                    <img src={plan} alt="plan" />
                    <p>Easily plan and promote tournaments to <br />members</p>
                </div>
                <div className="members">
                    <img src={members} alt="members" />
                    <p>Grow members and attract followers to <br />keep informed</p>
                </div>
                <div className="stats">
                    <img src={stats} alt="stats" />
                    <p>Automate stats tracking and provide <br />leaderboards with Elo Ratings</p>
                </div>
            </div>
            <div className="benefits">
                <h1>Challonge Communities are loaded with benefits to <br />help you mobilize players for frequent competitions.</h1>
                <div className='diagonal-line'></div>
                <div className="column">
                    <div className="members">
                        <img src={membersicon} alt="members icon" />
                        <ul>
                            <li>Unlimited members</li>
                            <li>Unlimited tournaments & events</li>
                            <li>Unlimited predictions & voting contests</li>
                        </ul>
                    </div>
                    <div className="admins">
                        <img src={adminsicon} alt="admins icon" />
                        <ul>
                            <li>Co-manage with multiple administrators</li>
                            <li>Grow and manage followers</li>
                            <li>Activate progressive stats tracking for <br />members</li>
                        </ul>
                    </div>
                    <div className="brackets">
                        <img src={bracketsicon} alt="brackets icon" />
                        <ul>
                            <li>Embed brackets & leaderboards with ads</li>
                            <li>Provide ELO Rating System for members</li>
                            <li>Share announcements</li>
                        </ul>
                    </div>
                    <div className="support">
                        <img src={support} alt="support icon" />
                        <ul>
                            <li>Prioritized support</li>
                            <li>Discord integration</li>
                            <li>And more to come</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="features">
                <h1>Challonge Communities are perfect for <br />organizing like-minded:</h1>
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
    )
}

export default About
