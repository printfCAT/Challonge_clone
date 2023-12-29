import logo from './challonge-logo.png';
import './Tournaments.css';
import mlegends from './mobile-legends.png';
import valorant from './valorant.jpg';
import legends from './apex-legends.png';
import ccs from './ccs.png';
import pool from './pool.jpg';
import fifa from './fifa24.jpg';
import dota2 from './dota2.jpg';
import cohort1 from './cohort1.jpg';
import cohort2 from './cohort2.jpg';
import cohort3 from './cohort3.png';
import cohort4 from './cohort4.png';
import cohort5 from './cohort5.jpg';
import cohort6 from './cohort6.png';
import cohort7 from './cohort7.png';
import cohort8 from './cohort8.png';

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
                            <img className="game-pfp" src={valorant} alt="valorant" />
                            <ul>
                                <li>
                                    <div className="group-name">
                                        <img className="pfp" src={cohort3} alt="" />
                                        <p className="specific">CoHort #3</p>
                                    </div>
                                </li>
                                <li><i class="fa-solid fa-gamepad"></i><span>Valorant</span></li>
                                <li><i class="fa-solid fa-users"></i><span>6 participants</span></li>
                                <li><i class="fa-solid fa-calendar"></i><span>January 3, 2024</span></li>
                                <p>Created at December 23, 2023</p>
                                <button className="view"><a href="#null">View</a></button>
                            </ul>
                        </div>
                        <div className="game3">
                            <img className="game-pfp" src={legends} alt="apex legends" />
                            <ul>
                                <li>
                                    <div className="group-name">
                                        <img className="pfp" src={cohort7} alt="" />
                                        <p className="specific">Cohort #7</p>
                                    </div>
                                </li>
                                <li><i class="fa-solid fa-gamepad"></i><span>Apex Legends</span></li>
                                <li><i class="fa-solid fa-users"></i><span>53 participants</span></li>
                                <li><i class="fa-solid fa-calendar"></i><span>December 31, 2023</span></li>
                                <p>Created at December 29, 2023</p>
                                <button className="view"><a href="#null">View</a></button>
                            </ul>
                        </div>
                        <div className="game4">
                            <img className="game-pfp" src={ccs} alt="candy crush" />
                            <ul>
                                <li>
                                    <div className="group-name">
                                        <img className="pfp" src={cohort2} alt="" />
                                        <p className="specific">COHORT #2</p>
                                    </div>
                                </li>
                                <li><i class="fa-solid fa-gamepad"></i><span>Candy Crush Saga</span></li>
                                <li><i class="fa-solid fa-users"></i><span>0 participants</span></li>
                                <li><i class="fa-solid fa-calendar"></i><span>July 20, 2023</span></li>
                                <p>Created at July 20, 2023</p>
                                <button className="view"><a href="#null">View</a></button>
                            </ul>
                        </div>
                    </div>
                    <div className="row2">
                        <div className="game1">
                            <img className="game-pfp" src={pool} alt="pool" />
                            <ul>
                                <li>
                                    <div className="group-name">
                                        <img className="pfp" src={cohort8} alt="" />
                                        <p className="specific">Co Hort #8</p>
                                    </div>
                                </li>
                                <li><i class="fa-solid fa-gamepad"></i><span>Pool</span></li>
                                <li><i class="fa-solid fa-users"></i><span>4 participants</span></li>
                                <li><i class="fa-solid fa-calendar"></i><span>January 1, 2023</span></li>
                                <p>Created at October 13, 2023</p>
                                <button className="view"><a href="#null">View</a></button>
                            </ul>
                        </div>
                        <div className="game2">
                            <img className="game-pfp" src={mlegends} alt="mobile legends" />
                            <ul>
                                <li>
                                    <div className="group-name">
                                        <img className="pfp" src={cohort5} alt="" />
                                        <p className="specific">Co-hort #5</p>
                                    </div>
                                </li>
                                <li><i class="fa-solid fa-gamepad"></i><span>Mobile Legends: Bang Bang</span></li>
                                <li><i class="fa-solid fa-users"></i><span>3 participants</span></li>
                                <li><i class="fa-solid fa-calendar"></i><span>December 12, 2023</span></li>
                                <p>Created at December 10, 2023</p>
                                <button className="view"><a href="#null">View</a></button>
                            </ul>
                        </div>
                        <div className="game3">
                            <img className="game-pfp" src={fifa} alt="ea fc24" />
                            <ul>
                                <li>
                                    <div className="group-name">
                                        <img className="pfp" src={cohort6} alt="" />
                                        <p className="specific">cohort #6</p>
                                    </div>
                                </li>
                                <li><i class="fa-solid fa-gamepad"></i><span>EA FC24</span></li>
                                <li><i class="fa-solid fa-users"></i><span>20 participants</span></li>
                                <li><i class="fa-solid fa-calendar"></i><span>December 30, 2023</span></li>
                                <p>Created at December 20, 2023</p>
                                <button className="view"><a href="#null">View</a></button>
                            </ul>
                        </div>
                        <div className="game4">
                            <img className="game-pfp" src={dota2} alt="dota2" />
                            <ul>
                                <li>
                                    <div className="group-name">
                                        <img className="pfp" src={cohort4} alt="" />
                                        <p className="specific">Cohort #4</p>
                                    </div>
                                </li>
                                <li><i class="fa-solid fa-gamepad"></i><span>Dota 2</span></li>
                                <li><i class="fa-solid fa-users"></i><span>10 participants</span></li>
                                <li><i class="fa-solid fa-calendar"></i><span>January 9, 2024</span></li>
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
