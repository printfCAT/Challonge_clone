import { useState } from 'react';
import './Signup.css';

function Signup() {
  const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const [agreeChecked, setAgreeChecked] = useState(false);

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handlePasswordConfirmationChange = (event) => {
        setPasswordConfirmation(event.target.value);
    };

    const handleAgreeCheckboxChange = (event) => {
        setAgreeChecked(event.target.checked);
    };

    const handleSubmit = () => {
        if (
            username.trim() !== '' &&
            email.trim() !== '' &&
            password.trim() !== '' &&
            passwordConfirmation.trim() !== '' &&
            agreeChecked
        ) {
            // Redirect or perform signup process
            window.location.href = '/Challonge_clone/signup-success'; // Replace this with your desired redirection or signup logic
        } else {
            // Display an error message or handle incomplete fields as needed
        }
    };
  
    return (
        <><body>
        <div className="main-signup">
            <h1>Sign up for Challonge</h1>
            <p>Get started easily by signing up to manage your tournaments and events!</p>
            <div className='signup-diagonal-line1'></div>
            <div className="input-container">
              <input className="input-username" type="text" placeholder="Username" onChange={handleUsernameChange} />
              <input className="input-email" type="text" placeholder="Email" onChange={handleEmailChange} />
              <input className="input-password" type="password" placeholder="Password" onChange={handlePasswordChange} />
              <input className="input-password" type="password" placeholder="Password Confirmation" onChange={handlePasswordConfirmationChange} />
            </div>
            <div className='signup-diagonal-line2'></div>
            <div className='time'><p>(+03:00) Nairobi</p></div>
            <div className='location'><p>Kenya</p></div>
            <div className='signup-diagonal-line2'></div>
            <div className="agreement-checkbox">
              <input type="checkbox" id="agree" name="agree" onChange={handleAgreeCheckboxChange} />
              <label htmlFor="agree">I agree to the <span className="signup-span">Terms of Service</span> and <span className="signup-span">Privacy Policy</span>.</label>
            </div>
            <div className="promotional-checkbox">
              <input type="checkbox" id="promotion" name="promotion" />
              <label for="promotion">Send me occasional product updates and info about major tournaments.</label>
            </div>
            <div className='signup-diagonal-line'></div>
            <input type="submit" className={`signup-button ${!username || !email || !password || !passwordConfirmation || !agreeChecked ? 'inactive' : ''}`} value="Create an account" onClick={handleSubmit} />
        </div>
      </body></>
    )
}

export default Signup
