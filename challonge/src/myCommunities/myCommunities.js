import { Link } from 'react-router-dom';
import './myCommunities.css';
import island from '../assets/island.jpg';

function myCommunities() {
    return (
        <><body>
        <div className="empty-space"></div>
        <div className="main-community">
            <div className="mycommunities-menu">
            <ul className="mycommunities-ul">
                    <li className="item1"><Link to="/mytournaments"><i class="fa-solid fa-trophy"></i></Link></li>
                    <li className="item2"><Link to="/myevents"><i class="fa-solid fa-ticket"></i></Link></li>
                    <li className="item3"><Link to="/mycommunities"><i class="fa-solid fa-users"></i></Link></li>
                </ul>
                <div className="mycommunities-diagonal-line1"></div>
                <ul className="mycommunities-ul">
                    <li className="item4"><Link to="/discover"><i class="fa-solid fa-compass"></i></Link></li>
                </ul>
            </div>
            <div className="mycommunities-content">
                <h1>Your Communities</h1>
                <Link to="/comingsoon" className="mycommunities-create">Start a Community</Link>
                <Link to="/about" className="mycommunities-link">Learn more</Link>
                <div className="mycommunities-diagonal-line"></div>
                <div className="island">
                    <img src={island} alt="island" />
                    <p>You have no existing communities yet. Start by creating your own community or joining an existing one.</p>
                </div>
        </div>
        </div>
      </body></>
    )
}

export default myCommunities;
