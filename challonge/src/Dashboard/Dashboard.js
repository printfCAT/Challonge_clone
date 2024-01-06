import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import bracket from '../assets/bracket.png';
import './Dashboard.css';
import top from '../assets/top.png';
import bottom from '../assets/bottom.png';
import holberton from '../assets/holberton-logo.png';
import alx from '../assets/alx-logo.png';
import mcf from '../assets/mcf-logo.png';
import room from '../assets/the-room.png';

function Dashboard() {
  useEffect(() => {
    const countUp = (targetElement, start, end, duration) => {
      let current = start;
      const increment = Math.ceil((end - start) / duration);
      const element = document.getElementById(targetElement);

      const timer = setInterval(() => {
        current += increment;
        element.textContent = current.toLocaleString();

        if (current >= end) {
          clearInterval(timer);
          element.textContent = end.toLocaleString();
        }
      }, 100);

      return () => clearInterval(timer);
    };

    countUp('graduateCount', 80000, 85000, 30);
  }, []);

  return (
    <><body className="dashboard-body">
        <div className='dashboard-intro'>
          <h1>Simplify Tournament Management</h1>
          <p>Thank you ALX Africa for allowing me to learn. ALX has produced more than <br /><b><span id="graduateCount">80000</span></b> graduates since 2021.</p>
          <div className="buttons">
            <Link to="/comingsoon" className='Tournament'>Create Tournament</Link>
            <Link to="/comingsoon" className='bracket'>Try Our Bracket Generator</Link>
          </div>
          <img className="dashboard-img" src={bracket} alt="bracket" />
        </div>
        <div className='communities'>
          <h1>Challonge Communities</h1>
          <p>Host multiple tournaments, leagues and events for your loyal members.</p>
          <Link to="/about" className='learn-more'>Learn more</Link>
        </div>
        <div className='game-settings'>
          <h1>Enjoy your game, we'll handle the <br />rest</h1>
          <p>Challonge has a variety of settings that can fit your friday night game <br />with friends.</p>
          <div className='dashboard-diagonal-line'></div>
          <div className='game-columns'>
            <div className='types'>
              <h3>Choose a Type</h3>
              <p>Single Elimination</p>
              <p>Double Elimination</p>
              <p>Round Robin</p>
              <p>Swiss</p>
              <p>Free For All</p>
              <p>Two Stage (group stage + Final <br />stage)</p>`
            </div>
            <div className='participants'>
              <h3>Add Participants</h3>
              <p>Enter individually or in <br />bulk</p>
              <p>Invite by Email</p>
              <p>Host a sign-up page</p>
              <p>Require participants to <br />check in</p>
            </div>
            <div className='scores'>
              <h3>Report Scores</h3>
              <p>Advance match winners</p>
              <p>Delegate reporting permissions</p>
              <p>Email notifications as matches become <br />available</p>
            </div>
          </div>
        </div>
        <div className='conventions'>
          <div className='convention-content'>
            <div className='convention-images'>
              <img className='top' src={top} alt="top" />
              <img className='bottom' src={bottom} alt="bottom" />
            </div>
            <div className='convention-info'>
              <h1>Create event pages for your <br />conventions</h1>
              <p>Got an event with multiple tournaments? We got you. Use Challonge's <br />Event feature</p>
              <div className='diagonal-line'></div>
              <div className='multiple-tournaments'>
                <h3>Multiple tournaments in one</h3>
                <p>Got a convention with multiple tournaments? Manage them all in just one <br />event page.</p>
              </div>
              <div className='tickets'>
                <h3>Sell tickets</h3>
                <p>From admission to tournament registration tickets.</p>
              </div>
              <div className='event-activity'>
                <h3>Track your event activity</h3>
                <p>Track sales, visits, and orders with your event management dashboard.</p>
              </div>
            </div>
          </div>
          <div className='trustees'>
            <h2>Trusted by</h2>
            <div className='logos'>
              <img src={holberton} alt="holberton logo" />
              <img src={mcf} alt="mastercard logo" />
              <img src={alx} alt="alx logo" />
              <img src={room} alt="the room logo" />
            </div>
          </div>
        </div>
        <div className="overview">
          <div className="embed">
            <iframe title="Challonge Overview" width="988" height="557" src="https://www.youtube.com/embed/iYz7p6Ic-yE" frameborder="0" allowfullscreen></iframe>
          </div>
          <div className="conclusion">
            <h1>Providing the right tools for the <br />gaming community</h1>
            <p>I aim to keep things simple, but there's plenty more to explore <br />on my challonge clone project.</p>
            <Link to="/signup" className="signup">Sign Up Free</Link>
          </div>
        </div>
      </body></>
  );
}

export default Dashboard;
