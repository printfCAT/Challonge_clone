import { Link } from 'react-router-dom';
import './Communities.css';
import red from '../assets/red.jpg';
import green from '../assets/green.jpg';
import orange from '../assets/orange.jpg';
import blue from '../assets/blue.jpg';
import ape from '../assets/ape.jpg';
import bull from '../assets/bull.jpg';
import dog from '../assets/dog.jpg';
import fox from '../assets/fox.jpg';
import greenanimal from '../assets/green-animal.jpg';
import lion from '../assets/lion.jpg';
import ram from '../assets/ram.jpg';
import redanimal from '../assets/red-animal.jpg';

function Communities() {
    return (
        <><body>
        <div className="empty-space"></div>
        <div className="main-community">
            <div className="menu">
                <ul className="communities-ul">
                    <li className="item1"><Link to="/tournaments"><i class="fa-solid fa-trophy"></i></Link></li>
                    <li className="item2"><Link to="/events"><i class="fa-solid fa-ticket"></i></Link></li>
                    <li className="item3"><Link to="/communities"><i class="fa-solid fa-users"></i></Link></li>
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
                        <ul className="communities-ul">
                          <li>
                            <div className="group-name">
                              <img className="pfp" src={bull} alt="" />
                                <p className="specific">Cohort #18</p>
                            </div>
                          </li>
                          <li><i class="fa-solid fa-users"></i><span>14 followers</span></li>
                          <li><i class="fa-solid fa-location-dot"></i><span>Location not specified</span></li>
                          <button className="view"><Link to="comingsoon">View</Link></button>
                        </ul>
                      </div>
                      <div className="community2">
                      <img className="game-pfp" src={green} alt="challonge" />
                        <ul className="communities-ul">
                          <li>
                            <div className="group-name">
                              <img className="pfp" src={ape} alt="" />
                                <p className="specific">Cohort #23</p>
                            </div>
                          </li>
                          <li><i class="fa-solid fa-users"></i><span>4 followers</span></li>
                          <li><i class="fa-solid fa-location-dot"></i><span>Location not specified</span></li>
                          <button className="view"><Link to="/comingsoon">View</Link></button>
                        </ul>
                      </div>
                      <div className="community3">
                      <img className="game-pfp" src={orange} alt="challonge" />
                        <ul className="communities-ul">
                          <li>
                            <div className="group-name">
                              <img className="pfp" src={fox} alt="" />
                                <p className="specific">cOHORT #19</p>
                            </div>
                          </li>
                          <li><i class="fa-solid fa-users"></i><span>42 followers</span></li>
                          <li><i class="fa-solid fa-location-dot"></i><span>Location not specified</span></li>
                          <button className="view"><Link to="/comingsoon">View</Link></button>
                        </ul>
                      </div>
                      <div className="community4">
                      <img className="game-pfp" src={red} alt="himalayas" />
                        <ul className="communities-ul">
                          <li>
                            <div className="group-name">
                              <img className="pfp" src={dog} alt="" />
                                <p className="specific">C-O-H-O-R-T #20</p>
                            </div>
                          </li>
                          <li><i class="fa-solid fa-users"></i><span>0 followers</span></li>
                          <li><i class="fa-solid fa-location-dot"></i><span>Location not specified</span></li>
                          <button className="view"><Link to="/comingsoon">View</Link></button>
                        </ul>
                      </div>
                  </div>
                  <div className="row2">
                    <div className="community1">
                      <img className="game-pfp" src={red} alt="discord" />
                        <ul className="communities-ul">
                          <li>
                            <div className="group-name">
                              <img className="pfp" src={redanimal} alt="" />
                                <p className="specific">CoHorT #17</p>
                            </div>
                          </li>
                          <li><i class="fa-solid fa-users"></i><span>2 followers</span></li>
                          <li><i class="fa-solid fa-location-dot"></i><span>Location not specified</span></li>
                          <button className="view"><Link to="/comingsoon">View</Link></button>
                        </ul>
                      </div>
                      <div className="community2">
                      <img className="game-pfp" src={green} alt="challonge" />
                        <ul className="communities-ul">
                          <li>
                            <div className="group-name">
                              <img className="pfp" src={greenanimal} alt="" />
                                <p className="specific">#21</p>
                            </div>
                          </li>
                          <li><i class="fa-solid fa-users"></i><span>3 followers</span></li>
                          <li><i class="fa-solid fa-location-dot"></i><span>Location not specified</span></li>
                          <button className="view"><Link to="/comingsoon">View</Link></button>
                        </ul>
                      </div>
                      <div className="community3">
                      <img className="game-pfp" src={orange} alt="apartments" />
                        <ul className="communities-ul">
                          <li>
                            <div className="group-name">
                              <img className="pfp" src={lion} alt="" />
                                <p className="specific">COHORt #24</p>
                            </div>
                          </li>
                          <li><i class="fa-solid fa-users"></i><span>4 followers</span></li>
                          <li><i class="fa-solid fa-location-dot"></i><span>Location not specified</span></li>
                          <button className="view"><Link to="/comingsoon">View</Link></button>
                        </ul>
                      </div>
                      <div className="community4">
                      <img className="game-pfp" src={blue} alt="apartments" />
                        <ul className="communities-ul">
                          <li>
                            <div className="group-name">
                              <img className="pfp" src={ram} alt="" />
                                <p className="specific">C0h0rt #22</p>
                            </div>
                          </li>
                          <li><i class="fa-solid fa-users"></i><span>42 followers</span></li>
                          <li><i class="fa-solid fa-location-dot"></i><span>Location not specified</span></li>
                          <button className="view"><Link to="/comingsoon">View</Link></button>
                        </ul>
                      </div>
                  </div>
                </div>
            </div>
        </div>
      </body></>
    )
}

export default Communities;
