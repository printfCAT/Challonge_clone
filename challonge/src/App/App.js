import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState, createContext, useEffect } from 'react';
import About from '../About/About';
import Comingsoon from '../Comingsoon/Comingsoon';
import Communities from '../Communities/Communities';
import Header from '../Header/Header';
import Loggedinheader from '../loggedinHeader/loggedinHeader';
import Dashboard from '../Dashboard/Dashboard';
import Discover from '../Discover/Discover';
import Events from '../Events/Events';
import Footer from '../Footer/Footer';
import Mycommunities from '../myCommunities/myCommunities';
import Myevents from '../myEvents/myEvents';
import Mytournaments from '../myTournaments/myTournaments';
import Login from '../Login/Login';
import Signup from '../Signup/Signup';
import Signupsuccess from '../signupSuccess/signupSuccess';
import Tournaments from '../Tournaments/Tournaments';

export const LoggedinContext = createContext();

function App() {
  const [loggedin, setLoggedin] = useState(JSON.parse(localStorage.getItem('loggedin')) || false);
  useEffect(() => {
    localStorage.setItem('loggedin', JSON.stringify(loggedin));
  }, [loggedin]);

  return (
    <LoggedinContext.Provider value={{ loggedin, setLoggedin }}>
      <Router>
        {loggedin ? <Loggedinheader /> : <Header />}
        <Routes>
          <Route exact path="/Challonge_clone" element={<Dashboard />} />
          <Route path="/Challonge_clone/login" element={<Login />} />
          <Route path="/Challonge_clone/signup" element={<Signup />} />
          <Route path="/Challonge_clone/signup-success" element={<Signupsuccess />} />
          <Route path="/Challonge_clone/about" element={<About />} />
          <Route path="/Challonge_clone/comingsoon" element={<Comingsoon />} />
          <Route path="/Challonge_clone/communities" element={<Communities />} />
          <Route path="/Challonge_clone/discover" element={<Discover />} />
          <Route path="/Challonge_clone/events" element={<Events />} />
          <Route path="/Challonge_clone/mycommunities" element={<Mycommunities />} />
          <Route path="/Challonge_clone/myevents" element={<Myevents />} />
          <Route path="/Challonge_clone/mytournaments" element={<Mytournaments />} />
          <Route path="/Challonge_clone/tournaments" element={<Tournaments />} />
        </Routes>
        <Footer />
      </Router>
    </LoggedinContext.Provider>
  );
}

export default App;
