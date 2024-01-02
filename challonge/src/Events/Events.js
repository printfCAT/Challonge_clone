import './Events.css';
import cohort9 from '../assets/cohort9.jpg';
import cohort10 from '../assets/cohort10.jpg';
import cohort11 from '../assets/cohort11.jpg';
import cohort12 from '../assets/cohort12.jpg';
import cohort13 from '../assets/cohort13.jpg';
import cohort14 from '../assets/cohort14.jpg';
import cohort15 from '../assets/cohort15.jpg';
import cohort16 from '../assets/cohort16.jpg';
import apartments from '../assets/apartments.jpg';
import zoom from '../assets/zoom.png';
import challongenull from '../assets/challonge-null.jpg';
import himalayas from '../assets/himalayas.jpeg';
import discord from '../assets/discord.jpg';
import waiblingen from '../assets/waiblingen.jpg';

function Events() {
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
            </div>
            <div className="content">
                <h1>Search</h1>
                <div className="diagonal-line"></div>
                <h2>Events</h2>
                <input className="events" type="text" placeholder="Search for events" />
                <i class="fa-solid fa-magnifying-glass"></i>
                <div className="events">
                  <div className="row1">
                    <div className="event1">
                      <img className="game-pfp" src={apartments} alt="apartments" />
                        <ul>
                          <li>
                            <div className="group-name">
                              <img className="pfp" src={cohort15} alt="" />
                                <p className="specific">Cohort #15</p>
                            </div>
                          </li>
                          <li><i class="fa-solid fa-calendar"></i><span>December 29, 2023 - January 1, 2024</span></li>
                          <li><i class="fa-solid fa-location-dot"></i><span>My house</span></li>
                          <li><i class="fa-solid fa-users"></i><span>7 attendees</span></li>
                          <button className="view"><a href="#null">View</a></button>
                        </ul>
                      </div>
                      <div className="event2">
                      <img className="game-pfp" src={challongenull} alt="challonge" />
                        <ul>
                          <li>
                            <div className="group-name">
                              <img className="pfp" src={cohort9} alt="" />
                                <p className="specific">C #9</p>
                            </div>
                          </li>
                          <li><i class="fa-solid fa-calendar"></i><span>December 29, 2023 - March 9, 2024</span></li>
                          <li><i class="fa-solid fa-location-dot"></i><span>Location not specified</span></li>
                          <li><i class="fa-solid fa-users"></i><span>3 attendees</span></li>
                          <button className="view"><a href="#null">View</a></button>
                        </ul>
                      </div>
                      <div className="event3">
                      <img className="game-pfp" src={challongenull} alt="challonge" />
                        <ul>
                          <li>
                            <div className="group-name">
                              <img className="pfp" src={cohort14} alt="" />
                                <p className="specific">cOHORT #14</p>
                            </div>
                          </li>
                          <li><i class="fa-solid fa-calendar"></i><span>December 29, 2023 - December 29, 2023</span></li>
                          <li><i class="fa-solid fa-location-dot"></i><span>Location not specified</span></li>
                          <li><i class="fa-solid fa-users"></i><span>0 attendees</span></li>
                          <button className="view"><a href="#null">View</a></button>
                        </ul>
                      </div>
                      <div className="event4">
                      <img className="game-pfp" src={himalayas} alt="himalayas" />
                        <ul>
                          <li>
                            <div className="group-name">
                              <img className="pfp" src={cohort13} alt="" />
                                <p className="specific">C-O-H-O-R-T #13</p>
                            </div>
                          </li>
                          <li><i class="fa-solid fa-calendar"></i><span>December 30, 2023 - January 17, 2024</span></li>
                          <li><i class="fa-solid fa-location-dot"></i><span>Himalayas</span></li>
                          <li><i class="fa-solid fa-users"></i><span>4 attendees</span></li>
                          <button className="view"><a href="#null">View</a></button>
                        </ul>
                      </div>
                  </div>
                  <div className="row2">
                    <div className="event1">
                      <img className="game-pfp" src={discord} alt="discord" />
                        <ul>
                          <li>
                            <div className="group-name">
                              <img className="pfp" src={cohort16} alt="" />
                                <p className="specific">CoHorT #16</p>
                            </div>
                          </li>
                          <li><i class="fa-solid fa-calendar"></i><span>December 28, 2023 - December 28, 2023</span></li>
                          <li><i class="fa-solid fa-location-dot"></i><span>This is an online event</span></li>
                          <li><i class="fa-solid fa-users"></i><span>2 attendees</span></li>
                          <button className="view"><a href="#null">View</a></button>
                        </ul>
                      </div>
                      <div className="event2">
                      <img className="game-pfp" src={challongenull} alt="challonge" />
                        <ul>
                          <li>
                            <div className="group-name">
                              <img className="pfp" src={cohort10} alt="" />
                                <p className="specific">#10</p>
                            </div>
                          </li>
                          <li><i class="fa-solid fa-calendar"></i><span>December 28, 2023 - December 29, 2023</span></li>
                          <li><i class="fa-solid fa-location-dot"></i><span>Location not specified</span></li>
                          <li><i class="fa-solid fa-users"></i><span>5 attendees</span></li>
                          <button className="view"><a href="#null">View</a></button>
                        </ul>
                      </div>
                      <div className="event3">
                      <img className="game-pfp" src={waiblingen} alt="apartments" />
                        <ul>
                          <li>
                            <div className="group-name">
                              <img className="pfp" src={cohort12} alt="" />
                                <p className="specific">COHORt #12</p>
                            </div>
                          </li>
                          <li><i class="fa-solid fa-calendar"></i><span>December 29, 2023 - December 29, 2026</span></li>
                          <li><i class="fa-solid fa-location-dot"></i><span>Waiblingen, DE</span></li>
                          <li><i class="fa-solid fa-users"></i><span>1 attendees</span></li>
                          <button className="view"><a href="#null">View</a></button>
                        </ul>
                      </div>
                      <div className="event4">
                      <img className="game-pfp" src={zoom} alt="apartments" />
                        <ul>
                          <li>
                            <div className="group-name">
                              <img className="pfp" src={cohort11} alt="" />
                                <p className="specific">C0h0rt #11</p>
                            </div>
                          </li>
                          <li><i class="fa-solid fa-calendar"></i><span>January 26, 2024 - January 26, 2024</span></li>
                          <li><i class="fa-solid fa-location-dot"></i><span>This is an online event</span></li>
                          <li><i class="fa-solid fa-users"></i><span>348 attendees</span></li>
                          <button className="view"><a href="#null">View</a></button>
                        </ul>
                      </div>
                  </div>
                </div>
            </div>
        </div>
      </body></>
    )
}

export default Events;
