import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
import Tournaments from '../Tournaments/Tournaments';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route path="/comingsoon" element={<Comingsoon />} />
        <Route path="/communities" element={<Communities />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/events" element={<Events />} />
        <Route path="/mycommunities" element={<Mycommunities />} />
        <Route path="/myevents" element={<Myevents />} />
        <Route path="/mytournaments" element={<Mytournaments />} />
        <Route path="/tournaments" element={<Tournaments />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
