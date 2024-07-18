import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/nav_logo.png'

function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-transparent border-gray-200 dark:bg-transparent">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
            <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                <img src={logo} className="h-14" alt="logo" />
            </a>
            <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-transparent md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-transparent md:dark:bg-transparent dark:border-gray-700">
                    <li>
                        {buildNavLink("/", "home")}
                    </li>
                    <li>
                        {buildNavLink("/experience", "experience")}
                    </li>
                    <li>
                        {buildNavLink("contact", "contact")}
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
            ?   "block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-purple-800 font-semibold"
            :   "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-purple-800 md:p-0 dark:text-gray-900 md:dark:hover:text-purple-600 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent font-semibold"
        }>
            {text}
        </NavLink>
        
    )
}

export default Navigation;