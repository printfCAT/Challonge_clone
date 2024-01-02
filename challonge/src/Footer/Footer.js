import logo from '../assets/challonge-logo.png';
import './Footer.css';

function Footer() {
    return (
        <><footer>
        <div className='column1'>
          <a href='#null'><img src={logo} alt="logo" /></a>
          <p>&copy; 2023 Challonge, LLC</p>
        </div>
        <div className='column2'>
          <h5>EXPLORE</h5>
          <a href='#null'><p>Search Tournaments</p></a>
          <a href='#null'><p>Bracket Generator</p></a>
          <a href='#null'><p>Features</p></a>
          <a href='#null'><p>About</p></a>
        </div>
        <div className='column3'>
          <h5>RESOURCES</h5>
          <a href='#null'><p>API</p></a>
          <a href='#null'><p>Terms</p></a>
          <a href='#null'><p>Privacy</p></a>
        </div>
        <div className='column4'>
          <h5>GET IN TOUCH</h5>
          <div className='socials'>
            <a href='#null'><i className="fa-brands fa-facebook"></i></a>
            <a href='#null'><i className="fa-brands fa-twitter"></i></a>
            <a href='#null'><i className="fa-brands fa-youtube"></i></a>
          </div>
          <a href='#null'><p>Partners</p></a>
          <a href='#null'><p>Contact</p></a>
          <a href='#null'><p>Blog</p></a>
        </div>
      </footer></>
    )
}

export default Footer;
