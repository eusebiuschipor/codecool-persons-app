import './App.css';
import MyNavbar from './components/Navbar';
import Search from './components/Search';
import PersonDetails from './components/PersonDetails';
import Person from './components/Person';
import { Router } from '@reach/router';

function App() {
  return (
    <>
      <MyNavbar />
      <Router>
        <Search path="/" />
        <PersonDetails path="/details/:id" />
        <Person path="/person" />
        <Person path="/person/:id" />
      </Router>
    </>
  );
}

export default App;
