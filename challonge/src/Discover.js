import logo from './challonge-logo.png';
import './Discover.css';
import orange from './orange.jpg';
import blue from './blue.jpg';
import green from './green.jpg';
import oce from './oce.png';
import grl from './grl.png';
import wc from './wc.png';
import gamesiga from './gamesiga.png';
import highcouncil from './highcouncil.png';
import outkast from './outkast.png';
import fox from './fox.jpg';
import wordengine from './wordengine.png';
import battle from './battle.png';
import oce3 from './oce3.png';
import golf from './golf.png';
import wct from './wct.png';
import gs from './gs.png';
import hc from './hc.png';
import od from './od.png';

function Discover() {
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
        <div className="main-discovery">
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
              <h2>Featured Pro Communities</h2>
              <div className="featured">
                <a href="#null">
                  <div className="community1">
                    <img src={orange} alt="orange" />
                    <div className="community-info">
                      <img src={fox} alt="fox" />
                      <div className="info">
                        <p>Liz's Tournaments - Arizona <span>PRO</span></p>
                        <ul>
                          <li>1 follower</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </a>
                <a href="#null">
                  <div className="community1">
                    <img src={blue} alt="blue" />
                    <div className="community-info">
                      <img src={wordengine} alt="wordengine" />
                      <div className="info">
                        <p>WordEngine Team Challenge <span>PRO</span></p>
                        <ul>
                          <li>1 follower</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </a>
                <a href="#null">
                  <div className="community1">
                    <img src={green} alt="green" />
                    <div className="community-info">
                      <img src={battle} alt="battle" />
                      <div className="info">
                        <p>Battle At The Beach Darts Floriad <span>PRO</span></p>
                        <ul>
                          <li>44 followers</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <h2>Communities with Tournaments This Week</h2>
              <div className="with-tournaments">
                <a href="#null">
                  <div className="community1">
                    <img src={oce} alt="oce" />
                    <div className="community-info">
                      <img src={oce3} alt="oce3" />
                      <div className="info">
                        <p>OCE III</p>
                        <ul>
                          <li>249 followers</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </a>
                <a href="#null">
                  <div className="community1">
                    <img src={grl} alt="grl" />
                    <div className="community-info">
                      <img src={golf} alt="golf" />
                      <div className="info">
                        <p>Golf Rival Leagues <span>PRO</span></p>
                        <ul>
                          <li>150 followers</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </a>
                <a href="#null">
                  <div className="community1">
                    <img src={wc} alt="wc" />
                    <div className="community-info">
                      <img src={wct} alt="wct" />
                      <div className="info">
                        <p>WC Tournaments</p>
                        <ul>
                          <li>168 followers</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <h2>Trending Communities</h2>
              <div className="trending">
              <a href="#null">
                  <div className="community1">
                    <img src={gamesiga} alt="gamesiga" />
                    <div className="community-info">
                      <img src={gs} alt="gs" />
                      <div className="info">
                        <p>GAMESIGA</p>
                        <ul>
                          <li>346 followers</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </a>
                <a href="#null">
                  <div className="community1">
                    <img src={highcouncil} alt="highcouncil" />
                    <div className="community-info">
                      <img src={hc} alt="hc" />
                      <div className="info">
                        <p>THE HIGH COUNCIL</p>
                        <ul>
                          <li>27 followers</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </a>
                <a href="#null">
                  <div className="community1">
                    <img src={outkast} alt="outkast" />
                    <div className="community-info">
                      <img src={od} alt="od" />
                      <div className="info">
                        <p>Outkast Dartz</p>
                        <ul>
                          <li>213 followers</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </a>
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

export default Discover;
