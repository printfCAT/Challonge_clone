import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { LoggedinContext } from '../App/App';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { setLoggedin } = useContext(LoggedinContext);
    const navigate = useNavigate();

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = () => {
        // Perform validation if needed before redirecting
        if (username.trim() !== '' && password.trim() !== '') {
            // Redirect to "/tournaments"
            setLoggedin(true);
            navigate('/mytournaments');
        } else {
            // Display an error message or handle incomplete fields as needed
        }
    };

    return (
        <><body>
        <div className="login">
            <h1>Log in to Challonge</h1>
            <p>Welcome back! Please enter your details to log in</p>
            <div className='login-diagonal-line1'></div>
            <div className="input-container">
              <input className="input-email" type="text" placeholder="Username or email" onChange={handleUsernameChange} />
              <input className="input-password" type="password" placeholder="Password" onChange={handlePasswordChange} />
            </div>
            <div className="remember-checkbox">
              <input type="checkbox" id="remember" name="remember" />
              <label htmlFor="remember">Remember on this device</label>
              <Link to='/comingsoon'>Forgot password</Link>
            </div>
            <div className='login-diagonal-line'></div>
            <input type="submit" className={`login-button ${username.trim() === '' || password.trim() === '' ? 'inactive' : ''}`} value="Log in" onClick={handleSubmit} />
        </div>
      </body></>
    )
}

export default Login;
