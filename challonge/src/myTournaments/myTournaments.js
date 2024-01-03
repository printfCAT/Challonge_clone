import { Link } from 'react-router-dom';
import './myTournaments.css';
import trophy from '../assets/trophy.jpg';

function myTournaments() {
    return (
        <><body>
        <div className="empty-space"></div>
        <div className="main-tournament">
            <div className="menu">
            <ul className="mytournaments-ul">
                    <li className="item1"><Link to="/tournaments"><i class="fa-solid fa-trophy"></i></Link></li>
                    <li className="item2"><Link to="/events"><i class="fa-solid fa-ticket"></i></Link></li>
                    <li className="item3"><Link to="/communities"><i class="fa-solid fa-users"></i></Link></li>
                </ul>
                <div className="diagonal-line1"></div>
                <ul className="mytournaments-ul">
                    <li className="item4"><Link to="/discover"><i class="fa-solid fa-compass"></i></Link></li>
                </ul>
            </div>
            <div className="content">
                <h1>Your Tournaments</h1>
                <button className="create"><Link to="/comingsoon">Create a Tournament</Link></button>
                <div className="diagonal-line"></div>
                <div className="commence">
                  <div className="text">
                    <h2>Commence battle</h2>
                    <p>Create and manage your tournament, <br />brackets, participants, and more.</p>
                    <button className="create2"><Link to="/comingsoon">Create a Tournament</Link></button>
                  </div>
                  <div className="image"><img src={trophy} alt="trophy" /></div>
                </div>
        </div>
        </div>
      </body></>
    )
}

export default myTournaments;
