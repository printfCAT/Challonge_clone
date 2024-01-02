import './myTournaments.css';
import trophy from '../assets/trophy.jpg';

function myTournaments() {
    return (
        <><body>
        <div className="empty-space"></div>
        <div className="main-tournament">
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
                <h1>Your Tournaments</h1>
                <button className="create"><a href="#null">Create a Tournament</a></button>
                <div className="diagonal-line"></div>
                <div className="commence">
                  <div className="text">
                    <h2>Commence battle</h2>
                    <p>Create and manage your tournament, <br />brackets, participants, and more.</p>
                    <button className="create2"><a href="#null">Create a Tournament</a></button>
                  </div>
                  <div className="image"><img src={trophy} alt="trophy" /></div>
                </div>
        </div>
        </div>
      </body></>
    )
}

export default myTournaments;
