import { Link } from 'react-router-dom';
import './myTournaments.css';
import trophy from '../assets/trophy.jpg';

function myTournaments() {
    return (
        <><body className="mytournaments-body">
        <div className="empty-space"></div>
        <div className="main-mytournament">
            <div className="mytournaments-menu">
            <ul className="mytournaments-ul">
                    <li className="item1"><Link to="/mytournaments"><i class="fa-solid fa-trophy"></i></Link></li>
                    <li className="item2"><Link to="/myevents"><i class="fa-solid fa-ticket"></i></Link></li>
                    <li className="item3"><Link to="/mycommunities"><i class="fa-solid fa-users"></i></Link></li>
                </ul>
                <div className="mytournaments-diagonal-line1"></div>
                <ul className="mytournaments-ul">
                    <li className="item4"><Link to="/discover"><i class="fa-solid fa-compass"></i></Link></li>
                </ul>
            </div>
            <div className="mytournaments-content">
                <h1>Your Tournaments</h1>
                <Link to="/comingsoon" className="mytournaments-create">Create a Tournament</Link>
                <div className="mytournaments-diagonal-line"></div>
                <div className="commence">
                  <div className="mytournaments-text">
                    <h2>Commence battle</h2>
                    <p>Create and manage your tournament, <br />brackets, participants, and more.</p>
                    <Link to="/comingsoon" className="mytournaments-create2">Create a Tournament</Link>
                  </div>
                  <div className="image"><img src={trophy} alt="trophy" /></div>
                </div>
        </div>
        </div>
      </body></>
    )
}

export default myTournaments;
