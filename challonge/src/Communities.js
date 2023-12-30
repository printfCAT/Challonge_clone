import logo from './challonge-logo.png';
import './Communities.css';
import red from './red.jpg';
import green from './green.jpg';
import orange from './orange.jpg';
import blue from './blue.jpg';
import ape from './ape.jpg';
import bull from './bull.jpg';
import dog from './dog.jpg';
import fox from './fox.jpg';
import greenanimal from './green-animal.jpg';
import lion from './lion.jpg';
import ram from './ram.jpg';
import redanimal from './red-animal.jpg';

function Communities() {
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
        <div className="main-community">
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
                <h2>Communities</h2>
                <input className="communities" type="text" placeholder="Search for communities" />
                <i class="fa-solid fa-magnifying-glass"></i>
                <div className="communities">
                  <div className="row1">
                    <div className="community1">
                      <img className="game-pfp" src={red} alt="apartments" />
                        <ul>
                          <li>
                            <div className="group-name">
                              <img className="pfp" src={bull} alt="" />
                                <p className="specific">Cohort #18</p>
                            </div>
                          </li>
                          <li><i class="fa-solid fa-users"></i><span>14 followers</span></li>
                          <li><i class="fa-solid fa-location-dot"></i><span>Location not specified</span></li>
                          <button className="view"><a href="#null">View</a></button>
                        </ul>
                      </div>
                      <div className="community2">
                      <img className="game-pfp" src={green} alt="challonge" />
                        <ul>
                          <li>
                            <div className="group-name">
                              <img className="pfp" src={ape} alt="" />
                                <p className="specific">Cohort #23</p>
                            </div>
                          </li>
                          <li><i class="fa-solid fa-users"></i><span>4 followers</span></li>
                          <li><i class="fa-solid fa-location-dot"></i><span>Location not specified</span></li>
                          <button className="view"><a href="#null">View</a></button>
                        </ul>
                      </div>
                      <div className="community3">
                      <img className="game-pfp" src={orange} alt="challonge" />
                        <ul>
                          <li>
                            <div className="group-name">
                              <img className="pfp" src={fox} alt="" />
                                <p className="specific">cOHORT #19</p>
                            </div>
                          </li>
                          <li><i class="fa-solid fa-users"></i><span>42 followers</span></li>
                          <li><i class="fa-solid fa-location-dot"></i><span>Location not specified</span></li>
                          <button className="view"><a href="#null">View</a></button>
                        </ul>
                      </div>
                      <div className="community4">
                      <img className="game-pfp" src={red} alt="himalayas" />
                        <ul>
                          <li>
                            <div className="group-name">
                              <img className="pfp" src={dog} alt="" />
                                <p className="specific">C-O-H-O-R-T #20</p>
                            </div>
                          </li>
                          <li><i class="fa-solid fa-users"></i><span>0 followers</span></li>
                          <li><i class="fa-solid fa-location-dot"></i><span>Location not specified</span></li>
                          <button className="view"><a href="#null">View</a></button>
                        </ul>
                      </div>
                  </div>
                  <div className="row2">
                    <div className="community1">
                      <img className="game-pfp" src={red} alt="discord" />
                        <ul>
                          <li>
                            <div className="group-name">
                              <img className="pfp" src={redanimal} alt="" />
                                <p className="specific">CoHorT #17</p>
                            </div>
                          </li>
                          <li><i class="fa-solid fa-users"></i><span>2 followers</span></li>
                          <li><i class="fa-solid fa-location-dot"></i><span>Location not specified</span></li>
                          <button className="view"><a href="#null">View</a></button>
                        </ul>
                      </div>
                      <div className="community2">
                      <img className="game-pfp" src={green} alt="challonge" />
                        <ul>
                          <li>
                            <div className="group-name">
                              <img className="pfp" src={greenanimal} alt="" />
                                <p className="specific">#21</p>
                            </div>
                          </li>
                          <li><i class="fa-solid fa-users"></i><span>3 followers</span></li>
                          <li><i class="fa-solid fa-location-dot"></i><span>Location not specified</span></li>
                          <button className="view"><a href="#null">View</a></button>
                        </ul>
                      </div>
                      <div className="community3">
                      <img className="game-pfp" src={orange} alt="apartments" />
                        <ul>
                          <li>
                            <div className="group-name">
                              <img className="pfp" src={lion} alt="" />
                                <p className="specific">COHORt #24</p>
                            </div>
                          </li>
                          <li><i class="fa-solid fa-users"></i><span>4 followers</span></li>
                          <li><i class="fa-solid fa-location-dot"></i><span>Location not specified</span></li>
                          <button className="view"><a href="#null">View</a></button>
                        </ul>
                      </div>
                      <div className="community4">
                      <img className="game-pfp" src={blue} alt="apartments" />
                        <ul>
                          <li>
                            <div className="group-name">
                              <img className="pfp" src={ram} alt="" />
                                <p className="specific">C0h0rt #22</p>
                            </div>
                          </li>
                          <li><i class="fa-solid fa-users"></i><span>42 followers</span></li>
                          <li><i class="fa-solid fa-location-dot"></i><span>Location not specified</span></li>
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

export default Communities;
