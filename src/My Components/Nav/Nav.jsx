import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Check, Menu, X } from 'lucide-react';
import { useUser } from '../Context/UseContext';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { Login } = useUser();

  const navLinks = [
    { path: '/', nameofLink: 'Home' },
    { path: '/login', nameofLink: 'Log In' },
    { path: '/about', nameofLink: 'About' },
    { path: '/chapters', nameofLink: 'Chapters' },
    { path: '/contact', nameofLink: 'Contact' },
  ];

  const [theme, setTheme] = useState('light');


  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.classList.add(savedTheme);
  }, []);


  useEffect(() => {
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const themeChanger = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <nav
      className="bg-gradient-to-r font-serif from-cyan-500 to-amber-800 shadow-md sticky top-0 z-50  "
      role="navigation"
      aria-label="Main Navigation"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-white font-bold text-2xl">Fantasy World</div>

        <ul className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <li className="flex items-center gap-2" key={link.path}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `text-lg font-semibold px-4 flex py-2 rounded-md text-black dark:text-white transition duration-300 ${
                    isActive
                      ? 'dark:bg-blue-900 bg-white text-red-600 shadow-md scale-105'
                      : ' dark:hover:bg-blue-800 hover:bg-white hover:text-cyan-600'
                  }`
                }
              >
                {link.nameofLink}
                {Login && link.nameofLink === 'Log In' ? (
                  <Check color="green" className="m-auto" size={20} />
                ) : (
                  ''
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        <button
          onClick={themeChanger}
          className="text-grey-300 border px-3 py-1 rounded-md hover:bg-white hover:text-blue transition dark:text-white dark:bg-black"
        >
          {theme === 'dark' ? '🌙':'🌞'  }
        </button>

        <button
          className="md:hidden transition-all duration-300 ease-in-out text-black "
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-cyan-500 px-6 space-y-4 ${
          isOpen ? 'max-h-96 opacity-100 py-4' : 'max-h-0 opacity-0 py-0'
        }`}
      >
        {navLinks.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `text-lg flex font-semibold px-4 py-2 rounded-md ${
                isActive
                  ? 'bg-white text-red-600 shadow-md'
                  : 'text-white hover:bg-white hover:text-cyan-600'
              }`
            }
          >
            {link.nameofLink}
            {Login && link.nameofLink === 'Log In' ? (
              <Check color="green" className="m-auto" size={20} />
            ) : (
              ''
            )}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
