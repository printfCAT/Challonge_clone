import logo from './challonge-logo.png';
import './Tournaments.css';
import mlegends from './mobile-legends.png';
import cohort1 from './cohort-1.jpg';

function Tournaments() {
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
        <div className="main-tournament">
            <div className="menu">
                <ul>
                    <li className="item1"><a href="#null"><i class="fa-solid fa-trophy"></i></a></li>
                    <li className="item2"><a href="#null"><i class="fa-solid fa-ticket"></i></a></li>
                    <li className="item3"><a href="#null"><i class="fa-solid fa-users"></i></a></li>
                </ul>
            </div>
            <div className="content">
                <h1>Search</h1>
                <div className="diagonal-line"></div>
                <h2>Tournaments</h2>
                <input className="events" type="text" placeholder="Search for tournaments" />
                <i class="fa-solid fa-magnifying-glass"></i>
                <div className="games">
                    <div className="row1">
                        <div className="game1">
                            <img className="game-pfp" src={mlegends} alt="mobile legends" />
                            <ul>
                                <li>
                                    <div className="group-name">
                                        <img className="pfp" src={cohort1} alt="" />
                                        <p className="specific">Cohort #1</p>
                                    </div>
                                </li>
                                <li><i class="fa-solid fa-gamepad"></i><span>Mobile Legends: Bang Bang</span></li>
                                <li><i class="fa-solid fa-users"></i><span>12 participants</span></li>
                                <li><i class="fa-solid fa-calendar"></i><span>December 29, 2023</span></li>
                                <p>Created at December 29, 2023</p>
                                <button className="view"><a href="#null">View</a></button>
                            </ul>
                        </div>
                        <div className="game2">
                            <img className="game-pfp" src={mlegends} alt="mobile legends" />
                            <ul>
                                <li>
                                    <div className="group-name">
                                        <img className="pfp" src={cohort1} alt="" />
                                        <p className="specific">Cohort #1</p>
                                    </div>
                                </li>
                                <li><i class="fa-solid fa-gamepad"></i><span>Mobile Legends: Bang Bang</span></li>
                                <li><i class="fa-solid fa-users"></i><span>12 participants</span></li>
                                <li><i class="fa-solid fa-calendar"></i><span>December 29, 2023</span></li>
                                <p>Created at December 29, 2023</p>
                                <button className="view"><a href="#null">View</a></button>
                            </ul>
                        </div>
                        <div className="game3">
                            <img className="game-pfp" src={mlegends} alt="mobile legends" />
                            <ul>
                                <li>
                                    <div className="group-name">
                                        <img className="pfp" src={cohort1} alt="" />
                                        <p className="specific">Cohort #1</p>
                                    </div>
                                </li>
                                <li><i class="fa-solid fa-gamepad"></i><span>Mobile Legends: Bang Bang</span></li>
                                <li><i class="fa-solid fa-users"></i><span>12 participants</span></li>
                                <li><i class="fa-solid fa-calendar"></i><span>December 29, 2023</span></li>
                                <p>Created at December 29, 2023</p>
                                <button className="view"><a href="#null">View</a></button>
                            </ul>
                        </div>
                        <div className="game4">
                            <img className="game-pfp" src={mlegends} alt="mobile legends" />
                            <ul>
                                <li>
                                    <div className="group-name">
                                        <img className="pfp" src={cohort1} alt="" />
                                        <p className="specific">Cohort #1</p>
                                    </div>
                                </li>
                                <li><i class="fa-solid fa-gamepad"></i><span>Mobile Legends: Bang Bang</span></li>
                                <li><i class="fa-solid fa-users"></i><span>12 participants</span></li>
                                <li><i class="fa-solid fa-calendar"></i><span>December 29, 2023</span></li>
                                <p>Created at December 29, 2023</p>
                                <button className="view"><a href="#null">View</a></button>
                            </ul>
                        </div>
                    </div>
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

export default Tournaments;
