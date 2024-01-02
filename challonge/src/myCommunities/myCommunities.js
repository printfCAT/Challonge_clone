import './myCommunities.css';
import island from '../assets/island.jpg';

function myCommunities() {
    return (
        <><body>
        <div className="empty-space"></div>
        <div className="main-community">
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
                <h1>Your Communities</h1>
                <button className="create"><a href="#null">Start a Community</a></button>
                <a href="#null" className="link">Learn more</a>
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
