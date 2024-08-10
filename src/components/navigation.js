import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/nav_logo.png';

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white bg-opacity-90 z-50">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={logo} className="h-14" alt="logo" />
        </a>
        <button 
          onClick={handleMenuToggle}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden text-purple-800 hover:text-white hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-default"
          aria-expanded={isMenuOpen ? "true" : "false"}
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
        </button>
        <div className={`${isMenuOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`} id="navbar-default">
          <ul className="font-medium flex flex-col p-3 md:p-0 mt-4 border-2 border-purple-200 rounded-lg bg-transparent md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-white md:dark:bg-white">
            <li>
              {buildNavLink("/", "home")}
            </li>
            <li>
              {buildNavLink("/experience", "experience")}
            </li>
            <li>
              {buildNavLink("/projects", "projects")}
            </li>
            <li>
              {buildNavLink("/contact", "contact")}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

function buildNavLink(toPage, text) {
  return (
    <NavLink 
      to={toPage} 
      className={({ isActive }) =>
        isActive
          ? "font-bold block py-1 px-3 rounded text-white bg-purple-800 md:text-purple-800 md:bg-transparent"
          : "font-bold block py-1 px-3 rounded text-gray-900 hover:bg-purple-200 md:hover:text-purple-600 md:hover:bg-transparent"
      }
    >
      {text}
    </NavLink>
  );
}

export default Navigation;
