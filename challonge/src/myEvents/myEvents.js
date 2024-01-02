import './myEvents.css';
import slot from '../assets/slot.jpg';

function myEvents() {
    return (
        <><body>
        <div className="empty-space"></div>
        <div className="main-event">
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
                <h1>Your Events</h1>
                <button className="create"><a href="#null">Create an Event</a></button>
                <div className="diagonal-line"></div>
                <div className="commence">
                  <div className="text">
                    <h2>Start building your <br />event!</h2>
                    <p>Create multiple tournaments, sell tickets, <br />manage attendees, and more.</p>
                    <button className="create2"><a href="#null">Create an Event</a></button>
                  </div>
                  <div className="image"><img src={slot} alt="slot" /></div>
                </div>
        </div>
        </div>
      </body></>
    )
}

export default myEvents;
