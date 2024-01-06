import { Link } from 'react-router-dom';
import plan from '../assets/plan.png';
import members from '../assets/members.png';
import stats from '../assets/stats.png';
import membersicon from '../assets/members-icon.png';
import adminsicon from '../assets/admins-icon.png';
import bracketsicon from '../assets/brackets-icon.png';
import support from '../assets/support-icon.png';
import gamers from '../assets/gamers.jpeg';
import athletes from '../assets/athletes.jpeg';
import casuals from '../assets/casuals.jpg';
import enthusiasts from '../assets/enthusiasts.jpg';
import patrons from '../assets/patrons.jpg';
import coworkers from '../assets/coworkers.jpg';
import fans from '../assets/fans.jpg';
import intramural from '../assets/intramural.jpg';
import './About.css';

function About() {
    return (
        <><body className="about-body">
            <div className="about-intro">
                <h1>Play Together With Challonge <br />Communities</h1>
                <p>Co-Host, Organize, and Promote your tournaments, leagues, and events all <br />from one place. Challonge Communities allow you to mobilize participants for <br />frequent competitions. Get started for free.</p>
                <Link to="/comingsoon" className="start">Start a new community for free</Link>
                <Link to="/communities" className="find">Find a community</Link>
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
                <div className='about-diagonal-line'></div>
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
                <div className="row1">
                    <div className="gamers">
                        <img src={gamers} alt="gamers" />
                        <div className="background"></div>
                        <div className="background1"></div>
                        <p>Gamers</p>
                    </div>
                    <div className="athletes">
                        <img src={athletes} alt="athletes" />
                        <div className="background"></div>
                        <div className="background1"></div>
                        <p>Athletes</p>
                    </div>
                    <div className="casuals">
                        <img src={casuals} alt="casuals" />
                        <div className="background"></div>
                        <div className="background1"></div>
                        <p>Casual Players</p>
                    </div>
                    <div className="enthusiasts">
                        <img src={enthusiasts} alt="enthusiasts" />
                        <div className="background"></div>
                        <div className="background1"></div>
                        <p>Enthusiasts</p>
                    </div>
                </div>
                <div className="row2">
                    <div className="patrons">
                        <img src={patrons} alt="patrons" />
                        <div className="background"></div>
                        <div className="background1"></div>
                        <p>Patrons</p>
                    </div>
                    <div className="coworkers">
                        <img src={coworkers} alt="coworkers" />
                        <div className="background"></div>
                        <div className="background1"></div>
                        <p>Co-workers</p>
                    </div>
                    <div className="fans">
                        <img src={fans} alt="fans" />
                        <div className="background"></div>
                        <div className="background1"></div>
                        <p>Fans</p>
                    </div>
                    <div className="intramural">
                        <img src={intramural} alt="intramural" />
                        <div className="background"></div>
                        <div className="background1"></div>
                        <p>Intramural Participants</p>
                    </div>
                </div>
                <h1 className="floating-heading">and many more!</h1>
                <div className="skewed-section"></div>
                <div className="start-community">
                    <div>
                        <h1>Start your Community Today!</h1>
                        <p>Got any questions? Feel free to<span className="about-span"> reach us out!</span></p>
                    </div>
                    <div>
                        <Link to="/comingsoon" className="try-button">Try it for free</Link>
                    </div>
                </div>
            </div>
        </body></>
    )
}

export default About
