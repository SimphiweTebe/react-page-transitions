import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import './styles.scss';

function Navbar() {
  return (
    <nav className="nav">
        <div className="wrapper">
            <div className="nav__logo">
                <Link to="/">
                  <img src={logo} alt="Main logo" />
                </Link>
            </div>
            <ul className="nav__links">
                <li><Link to="/">Cats</Link></li>
                <li><Link to="/birds">Birds</Link></li>
                <li><Link to="/ocean">Ocean</Link></li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar