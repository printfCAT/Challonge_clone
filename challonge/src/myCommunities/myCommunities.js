import { Link } from 'react-router-dom';
import './myCommunities.css';
import island from '../assets/island.jpg';

function myCommunities() {
    return (
        <><body>
        <div className="empty-space"></div>
        <div className="main-community">
            <div className="menu">
            <ul className="mycommunities-ul">
                    <li className="item1"><Link to="/tournaments"><i class="fa-solid fa-trophy"></i></Link></li>
                    <li className="item2"><Link to="/events"><i class="fa-solid fa-ticket"></i></Link></li>
                    <li className="item3"><Link to="/communities"><i class="fa-solid fa-users"></i></Link></li>
                </ul>
                <div className="diagonal-line1"></div>
                <ul className="mycommunities-ul">
                    <li className="item4"><Link to="/discover"><i class="fa-solid fa-compass"></i></Link></li>
                </ul>
            </div>
            <div className="content">
                <h1>Your Communities</h1>
                <button className="create"><Link to="/comingsoon">Start a Community</Link></button>
                <Link to="/communities" className="link">Learn more</Link>
                <div className="diagonal-line"></div>
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
