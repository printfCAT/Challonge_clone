import logo from './challonge-logo.png';
import './Events.css';
import cohort9 from './cohort9.jpg';
import cohort10 from './cohort10.jpg';
import cohort11 from './cohort11.jpg';
import cohort12 from './cohort12.jpg';
import cohort13 from './cohort13.jpg';
import cohort14 from './cohort14.jpg';
import cohort15 from './cohort15.jpg';
import cohort16 from './cohort16.jpg';
import apartments from './apartments.jpg';
import zoom from './zoom.png';
import challongenull from './challonge-null.jpg';
import himalayas from './himalayas.jpeg';
import discord from './discord.jpg';
import waiblingen from './waiblingen.jpg';

function Events() {
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
            </div>
            <div className="content">
                <h1>Search</h1>
                <div className="diagonal-line"></div>
                <h2>Events</h2>
                <input className="events" type="text" placeholder="Search for events" />
                <i class="fa-solid fa-magnifying-glass"></i>
                <div className="events">
                  <div className="row1">
                    <div className="event1">
                      <img className="game-pfp" src={apartments} alt="apartments" />
                        <ul>
                          <li>
                            <div className="group-name">
                              <img className="pfp" src={cohort15} alt="" />
                                <p className="specific">Cohort #15</p>
                            </div>
                          </li>
                          <li><i class="fa-solid fa-calendar"></i><span>December 29, 2023 - January 1, 2024</span></li>
                          <li><i class="fa-solid fa-location-dot"></i><span>My house</span></li>
                          <li><i class="fa-solid fa-users"></i><span>7 attendees</span></li>
                          <button className="view"><a href="#null">View</a></button>
                        </ul>
                      </div>
                      <div className="event2">
                      <img className="game-pfp" src={challongenull} alt="challonge" />
                        <ul>
                          <li>
                            <div className="group-name">
                              <img className="pfp" src={cohort9} alt="" />
                                <p className="specific">C #9</p>
                            </div>
                          </li>
                          <li><i class="fa-solid fa-calendar"></i><span>December 29, 2023 - March 9, 2024</span></li>
                          <li><i class="fa-solid fa-location-dot"></i><span>Location not specified</span></li>
                          <li><i class="fa-solid fa-users"></i><span>3 attendees</span></li>
                          <button className="view"><a href="#null">View</a></button>
                        </ul>
                      </div>
                      <div className="event3">
                      <img className="game-pfp" src={challongenull} alt="challonge" />
                        <ul>
                          <li>
                            <div className="group-name">
                              <img className="pfp" src={cohort14} alt="" />
                                <p className="specific">cOHORT #14</p>
                            </div>
                          </li>
                          <li><i class="fa-solid fa-calendar"></i><span>December 29, 2023 - December 29, 2023</span></li>
                          <li><i class="fa-solid fa-location-dot"></i><span>Location not specified</span></li>
                          <li><i class="fa-solid fa-users"></i><span>0 attendees</span></li>
                          <button className="view"><a href="#null">View</a></button>
                        </ul>
                      </div>
                      <div className="event4">
                      <img className="game-pfp" src={himalayas} alt="himalayas" />
                        <ul>
                          <li>
                            <div className="group-name">
                              <img className="pfp" src={cohort13} alt="" />
                                <p className="specific">C-O-H-O-R-T #13</p>
                            </div>
                          </li>
                          <li><i class="fa-solid fa-calendar"></i><span>December 30, 2023 - January 17, 2024</span></li>
                          <li><i class="fa-solid fa-location-dot"></i><span>Himalayas</span></li>
                          <li><i class="fa-solid fa-users"></i><span>4 attendees</span></li>
                          <button className="view"><a href="#null">View</a></button>
                        </ul>
                      </div>
                  </div>
                  <div className="row2">
                    <div className="event1">
                      <img className="game-pfp" src={discord} alt="discord" />
                        <ul>
                          <li>
                            <div className="group-name">
                              <img className="pfp" src={cohort16} alt="" />
                                <p className="specific">CoHorT #16</p>
                            </div>
                          </li>
                          <li><i class="fa-solid fa-calendar"></i><span>December 28, 2023 - December 28, 2023</span></li>
                          <li><i class="fa-solid fa-location-dot"></i><span>This is an online event</span></li>
                          <li><i class="fa-solid fa-users"></i><span>2 attendees</span></li>
                          <button className="view"><a href="#null">View</a></button>
                        </ul>
                      </div>
                      <div className="event2">
                      <img className="game-pfp" src={challongenull} alt="challonge" />
                        <ul>
                          <li>
                            <div className="group-name">
                              <img className="pfp" src={cohort10} alt="" />
                                <p className="specific">#10</p>
                            </div>
                          </li>
                          <li><i class="fa-solid fa-calendar"></i><span>December 28, 2023 - December 29, 2023</span></li>
                          <li><i class="fa-solid fa-location-dot"></i><span>Location not specified</span></li>
                          <li><i class="fa-solid fa-users"></i><span>5 attendees</span></li>
                          <button className="view"><a href="#null">View</a></button>
                        </ul>
                      </div>
                      <div className="event3">
                      <img className="game-pfp" src={waiblingen} alt="apartments" />
                        <ul>
                          <li>
                            <div className="group-name">
                              <img className="pfp" src={cohort12} alt="" />
                                <p className="specific">COHORt #12</p>
                            </div>
                          </li>
                          <li><i class="fa-solid fa-calendar"></i><span>December 29, 2023 - December 29, 2026</span></li>
                          <li><i class="fa-solid fa-location-dot"></i><span>Waiblingen, DE</span></li>
                          <li><i class="fa-solid fa-users"></i><span>1 attendees</span></li>
                          <button className="view"><a href="#null">View</a></button>
                        </ul>
                      </div>
                      <div className="event4">
                      <img className="game-pfp" src={zoom} alt="apartments" />
                        <ul>
                          <li>
                            <div className="group-name">
                              <img className="pfp" src={cohort11} alt="" />
                                <p className="specific">C0h0rt #11</p>
                            </div>
                          </li>
                          <li><i class="fa-solid fa-calendar"></i><span>January 26, 2024 - January 26, 2024</span></li>
                          <li><i class="fa-solid fa-location-dot"></i><span>This is an online event</span></li>
                          <li><i class="fa-solid fa-users"></i><span>348 attendees</span></li>
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

export default Events;
