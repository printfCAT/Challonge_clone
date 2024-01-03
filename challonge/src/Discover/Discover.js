import { Link } from 'react-router-dom';
import './Discover.css';
import orange from '../assets/orange.jpg';
import blue from '../assets/blue.jpg';
import green from '../assets/green.jpg';
import oce from '../assets/oce.png';
import grl from '../assets/grl.png';
import wc from '../assets/wc.png';
import gamesiga from '../assets/gamesiga.png';
import highcouncil from '../assets/highcouncil.png';
import outkast from '../assets/outkast.png';
import fox from '../assets/fox.jpg';
import wordengine from '../assets/wordengine.png';
import battle from '../assets/battle.png';
import oce3 from '../assets/oce3.png';
import golf from '../assets/golf.png';
import wct from '../assets/wct.png';
import gs from '../assets/gs.png';
import hc from '../assets/hc.png';
import od from '../assets/od.png';

function Discover() {
    return (
        <><body>
        <div className="empty-space"></div>
        <div className="main-discovery">
            <div className="menu">
            <ul>
                    <li className="item1"><Link to="/tournaments"><i class="fa-solid fa-trophy"></i></Link></li>
                    <li className="item2"><Link to="/events"><i class="fa-solid fa-ticket"></i></Link></li>
                    <li className="item3"><Link to="/communities"><i class="fa-solid fa-users"></i></Link></li>
                </ul>
                <div className="diagonal-line1"></div>
                <ul>
                    <li className="item4"><Link to="/discover"><i class="fa-solid fa-compass"></i></Link></li>
                </ul>
            </div>
            <div className="content">
              <h2>Featured Pro Communities</h2>
              <div className="featured">
                <Link to="/comingsoon">
                  <div className="community1">
                    <img src={orange} alt="orange" />
                    <div className="community-info">
                      <img src={fox} alt="fox" />
                      <div className="info">
                        <p>Liz's Tournaments - Arizona <span className="discover-span">PRO</span></p>
                        <ul>
                          <li>1 follower</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </Link>
                <Link to="/comingsoon">
                  <div className="community1">
                    <img src={blue} alt="blue" />
                    <div className="community-info">
                      <img src={wordengine} alt="wordengine" />
                      <div className="info">
                        <p>WordEngine Team Challenge <span className="discover-span">PRO</span></p>
                        <ul>
                          <li>1 follower</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </Link>
                <Link to="/comingsoon">
                  <div className="community1">
                    <img src={green} alt="green" />
                    <div className="community-info">
                      <img src={battle} alt="battle" />
                      <div className="info">
                        <p>Battle At The Beach Darts Floriad <span className="discover-span">PRO</span></p>
                        <ul>
                          <li>44 followers</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              <h2>Communities with Tournaments This Week</h2>
              <div className="with-tournaments">
                <Link to="/comingsoon">
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
                </Link>
                <Link to="/comingsoon">
                  <div className="community1">
                    <img src={grl} alt="grl" />
                    <div className="community-info">
                      <img src={golf} alt="golf" />
                      <div className="info">
                        <p>Golf Rival Leagues <span className="discover-span">PRO</span></p>
                        <ul>
                          <li>150 followers</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </Link>
                <Link to="/comingsoon">
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
                </Link>
              </div>
              <h2>Trending Communities</h2>
              <div className="trending">
              <Link to="/comingsoon">
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
                </Link>
                <Link to="/comingsoon">
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
                </Link>
                <Link to="/comingsoon">
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
                </Link>
              </div>
            </div>
        </div>
      </body></>
    )
}

export default Discover;
