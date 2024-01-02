import './Signup.css';

function Signup() {
    return (
        <><body>
        <div className="signup">
            <h1>SIgn up for Challonge</h1>
            <p>Get started easily by signing up to manage your tournaments and events!</p>
            <div className='diagonal-line1'></div>
            <div className="input-container">
              <input className="input-username" type="text" placeholder="Username" />
              <input className="input-email" type="text" placeholder="Email" />
              <input className="input-password" type="password" placeholder="Password" />
              <input className="input-password" type="password" placeholder="Password Confirmation" />
            </div>
            <div className='diagonal-line2'></div>
            <div className='time'><p>(+03:00) Nairobi</p></div>
            <div className='location'><p>Kenya</p></div>
            <div className='diagonal-line2'></div>
            <div className="agreement-checkbox">
              <input type="checkbox" id="agree" name="agree" />
              <label for="agree">I agree to the <span>Terms of Service</span> and <span>Privacy Policy</span>.</label>
            </div>
            <div className="promotional-checkbox">
              <input type="checkbox" id="promotion" name="promotion" />
              <label for="promotion">Send me occasional product updates and info about major tournaments.</label>
            </div>
            <div className='diagonal-line'></div>
            <button className="signup-button"><a href="#null">Create an account</a></button>
        </div>
      </body></>
    )
}

export default Signup
