import { Link } from 'react-router-dom';
import logo from '../assets/challonge-logo.png';
import './Footer.css';

function Footer() {
    return (
        <><footer>
        <div className='column1'>
          <Link to='/Challonge_clone'><img src={logo} alt="logo" /></Link>
          <p>&copy; 2023 Challonge, LLC</p>
        </div>
        <div className='column2'>
          <h5>EXPLORE</h5>
          <Link to='/Challonge_clone/tournaments'><p>Search Tournaments</p></Link>
          <Link to='/Challonge_clone/comingsoon'><p>Bracket Generator</p></Link>
          <Link to='/Challonge_clone/comingsoon'><p>Features</p></Link>
          <Link to='/Challonge_clone/comingsoon'><p>About</p></Link>
        </div>
        <div className='column3'>
          <h5>RESOURCES</h5>
          <a href='https://api.challonge.com/v1' target='_blank' rel='noopener noreferrer'><p>API</p></a>
          <a href='https://challonge.com/terms_of_service' target='_blank' rel='noopener noreferrer'><p>Terms</p></a>
          <a href='https://challonge.com/privacy_policy' target='_blank' rel='noopener noreferrer'><p>Privacy</p></a>
        </div>
        <div className='column4'>
          <h5>GET IN TOUCH</h5>
          <div className='socials'>
            <a href='https://www.facebook.com/terrence.wilbur/' target='_blank' rel='noopener noreferrer'><i className="fa-brands fa-facebook"></i></a>
            <a href='https://twitter.com/CliffManyo' target='_blank' rel='noopener noreferrer'><i className="fa-brands fa-twitter"></i></a>
            <a href='https://www.youtube.com/@CliffManyo' target='_blank' rel='noopener noreferrer'><i className="fa-brands fa-youtube"></i></a>
          </div>
          <Link to='/Challonge_clone/comingsoon'><p>Partners</p></Link>
          <Link to='/Challonge_clone/comingsoon'><p>Contact</p></Link>
          <Link to='/Challonge_clone/comingsoon'><p>Blog</p></Link>
        </div>
      </footer></>
    )
}

export default Footer;
