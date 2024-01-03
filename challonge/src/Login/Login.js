import { Link } from 'react-router-dom';
import './Login.css';

function Login() {
    return (
        <><body>
        <div className="login">
            <h1>Log in to Challonge</h1>
            <p>Welcome back! Please enter your details to log in</p>
            <div className='login-diagonal-line1'></div>
            <div className="input-container">
              <input className="input-email" type="text" placeholder="Username or email" />
              <input className="input-password" type="password" placeholder="Password" />
            </div>
            <div className="remember-checkbox">
              <input type="checkbox" id="remember" name="remember" />
              <label for="remember">Remember on this device</label>
              <Link to='/comingsoon'>Forgot password</Link>
            </div>
            <div className='login-diagonal-line'></div>
            <button className="login-button"><Link to="/mytournaments">Log in</Link></button>
        </div>
      </body></>
    )
}

export default Login
