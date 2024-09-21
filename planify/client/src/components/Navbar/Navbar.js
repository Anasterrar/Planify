// src/components/Navbar/Navbar.js
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Planify
        </Link>
        <ul className="navbar-menu">
          <li><Link to="/" className="navbar-item">Home</Link></li>
          <li><Link to="/signin" className="navbar-item">Sign In</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
