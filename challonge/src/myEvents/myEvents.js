import { Link } from 'react-router-dom';
import './myEvents.css';
import slot from '../assets/slot.jpg';

function myEvents() {
    return (
        <><body>
        <div className="empty-space"></div>
        <div className="main-event">
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
                <h1>Your Events</h1>
                <button className="create"><Link to="/comingsoon">Create an Event</Link></button>
                <div className="diagonal-line"></div>
                <div className="commence">
                  <div className="text">
                    <h2>Start building your <br />event!</h2>
                    <p>Create multiple tournaments, sell tickets, <br />manage attendees, and more.</p>
                    <button className="create2"><Link to="/comingsoon">Create an Event</Link></button>
                  </div>
                  <div className="image"><img src={slot} alt="slot" /></div>
                </div>
        </div>
        </div>
      </body></>
    )
}

export default myEvents;
