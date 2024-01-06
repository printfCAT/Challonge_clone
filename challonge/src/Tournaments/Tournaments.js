import { Link } from 'react-router-dom';
import './Tournaments.css';
import mlegends from '../assets/mobile-legends.png';
import valorant from '../assets/valorant.jpg';
import legends from '../assets/apex-legends.png';
import ccs from '../assets/ccs.png';
import pool from '../assets/pool.jpg';
import fifa from '../assets/fifa24.jpg';
import dota2 from '../assets/dota2.jpg';
import cohort1 from '../assets/cohort1.jpg';
import cohort2 from '../assets/cohort2.jpg';
import cohort3 from '../assets/cohort3.png';
import cohort4 from '../assets/cohort4.png';
import cohort5 from '../assets/cohort5.jpg';
import cohort6 from '../assets/cohort6.png';
import cohort7 from '../assets/cohort7.png';
import cohort8 from '../assets/cohort8.png';

function Tournaments() {
    return (
        <><body className="tournaments-body">
        <div className="empty-space"></div>
        <div className="main-tournament">
            <div className="tournaments-menu">
                <ul className="tournaments-ul">
                    <li className="item1"><Link to="/Challonge_clone/tournaments"><i class="fa-solid fa-trophy"></i></Link></li>
                    <li className="item2"><Link to="/Challonge_clone/events"><i class="fa-solid fa-ticket"></i></Link></li>
                    <li className="item3"><Link to="/Challonge_clone/communities"><i class="fa-solid fa-users"></i></Link></li>
                </ul>
            </div>
            <div className="tournaments-content">
                <h1>Search</h1>
                <div className="tournaments-diagonal-line"></div>
                <h2>Tournaments</h2>
                <input className="game" type="text" placeholder="Search for tournaments" />
                <i class="fa-solid fa-magnifying-glass"></i>
                <div className="games">
                    <div className="tournaments-row1">
                        <div className="game1">
                            <img className="game-pfp" src={mlegends} alt="mobile legends" />
                            <ul className="tournaments-ul">
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
                                <Link to="/Challonge_clone/comingsoon" className="tournaments-view">View</Link>
                            </ul>
                        </div>
                        <div className="game2">
                            <img className="game-pfp" src={valorant} alt="valorant" />
                            <ul className="tournaments-ul">
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
                                <Link to="/Challonge_clone/comingsoon" className="tournaments-view">View</Link>
                            </ul>
                        </div>
                        <div className="game3">
                            <img className="game-pfp" src={legends} alt="apex legends" />
                            <ul className="tournaments-ul">
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
                                <Link to="/Challonge_clone/comingsoon" className="tournaments-view">View</Link>
                            </ul>
                        </div>
                        <div className="game4">
                            <img className="game-pfp" src={ccs} alt="candy crush" />
                            <ul className="tournaments-ul">
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
                                <Link to="/Challonge_clone/comingsoon" className="tournaments-view">View</Link>
                            </ul>
                        </div>
                    </div>
                    <div className="tournaments-row2">
                        <div className="game1">
                            <img className="game-pfp" src={pool} alt="pool" />
                            <ul className="tournaments-ul">
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
                                <Link to="/Challonge_clone/comingsoon" className="tournaments-view">View</Link>
                            </ul>
                        </div>
                        <div className="game2">
                            <img className="game-pfp" src={mlegends} alt="mobile legends" />
                            <ul className="tournaments-ul">
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
                                <Link to="/Challonge_clone/comingsoon" className="tournaments-view">View</Link>
                            </ul>
                        </div>
                        <div className="game3">
                            <img className="game-pfp" src={fifa} alt="ea fc24" />
                            <ul className="tournaments-ul">
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
                                <Link to="/Challonge_clone/comingsoon" className="tournaments-view">View</Link>
                            </ul>
                        </div>
                        <div className="game4">
                            <img className="game-pfp" src={dota2} alt="dota2" />
                            <ul className="tournaments-ul">
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
                                <Link to="/Challonge_clone/comingsoon" className="tournaments-view">View</Link>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </body></>
    )
}

export default Tournaments;
