import { Link } from 'react-router-dom';
import './myEvents.css';
import slot from '../assets/slot.jpg';

function myEvents() {
    return (
        <><body className="myevent-body">
        <div className="empty-space"></div>
        <div className="main-myevent">
            <div className="myevents-menu">
            <ul className="myevents-ul">
                    <li className="item1"><Link to="/Challonge_clone/mytournaments"><i class="fa-solid fa-trophy"></i></Link></li>
                    <li className="item2"><Link to="/Challonge_clone/myevents"><i class="fa-solid fa-ticket"></i></Link></li>
                    <li className="item3"><Link to="/Challonge_clone/mycommunities"><i class="fa-solid fa-users"></i></Link></li>
                </ul>
                <div className="myevents-diagonal-line1"></div>
                <ul className="myevents-ul">
                    <li className="item4"><Link to="/Challonge_clone/discover"><i class="fa-solid fa-compass"></i></Link></li>
                </ul>
            </div>
            <div className="myevents-content">
                <h1>Your Events</h1>
                <Link to="/Challonge_clone/comingsoon" className="myevents-create">Create an Event</Link>
                <div className="myevents-diagonal-line"></div>
                <div className="commence">
                  <div className="myevents-text">
                    <h2>Start building your <br />event!</h2>
                    <p>Create multiple tournaments, sell tickets, <br />manage attendees, and more.</p>
                    <Link to="/Challonge_clone/comingsoon" className="myevents-create2">Create an Event</Link>
                  </div>
                  <div className="image"><img src={slot} alt="slot" /></div>
                </div>
        </div>
        </div>
      </body></>
    )
}

export default myEvents;
