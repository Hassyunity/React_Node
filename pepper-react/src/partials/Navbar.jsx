import React from 'react';
import { NavLink } from 'react-router-dom';
import '../assets/navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/images/logo.png" alt="Logo peprs" />
      </div>

      <ul className="navbar-menu">
        <li>
          <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')}>
            Accueil
          </NavLink>
        </li>
        <li>
          <NavLink to="/mon-compte" className={({ isActive }) => (isActive ? 'active' : '')}>
            Mon Compte
          </NavLink>
        </li>
        <li>
          <NavLink to="/support-reseau" className={({ isActive }) => (isActive ? 'active' : '')}>
            Support Réseau
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
