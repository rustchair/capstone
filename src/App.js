import './App.css';
import { Link } from 'react-router-dom';
import logo from './assets/logo.png';

function App() {
  return (
    <>
    <Header></Header>
    <Nav>
      <img src={logo} alt="Logo"/>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/reservations">Reservations</Link></li>
        <li><Link to="/orderonline">Order Online</Link></li>
        <li><Link to="/Login">Login</Link></li>
      </ul>
    </Nav>
    <Main></Main>
    <Footer>
      <img src={logo} alt="Logo"/>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/reservations">Reservations</Link></li>
        <li><Link to="/orderonline">Order Online</Link></li>
        <li><Link to="/Login">Login</Link></li>
      </ul>

      <ul>
        <li><Link to="/address">Address</Link></li>
        <li><Link to="/phonenumber">Phone Number</Link></li>
        <li><Link to="/email">Email</Link></li>
      </ul>

      <ul>
        <li><Link to="/address">Address</Link></li>
        <li><Link to="/phonenumber">Phone Number</Link></li>
        <li><Link to="/email">Email</Link></li>
      </ul>
    </Footer>
    </>
  );
}

export default App;