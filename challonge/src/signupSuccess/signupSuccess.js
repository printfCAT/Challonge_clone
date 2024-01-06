import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './signupSuccess.css';

function Signupsuccess() {
    const navigate = useNavigate();

    useEffect(() => {
        const redirectTimeout = setTimeout(() => {
            navigate('/Challonge_clone/login');
        }, 3000);

        return () => clearTimeout(redirectTimeout);
    }, [navigate]);

    return (
        <><body className="paragraph-body">
        <div className="paragraph">
            <p>Account creation successful. You will be redirected shortly...</p>
        </div>
      </body></>
    )
}

export default Signupsuccess;
