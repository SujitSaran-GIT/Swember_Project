// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { FaMoon, FaSun, FaGlobe, FaUser } from 'react-icons/fa';
// import logo from '../assets/logo.png'
// import swember from '../assets/swember.gif'

// const NavigationBar = () => {
//   const [darkMode, setDarkMode] = useState(false);

//   const toggleDarkMode = () => {
//     setDarkMode(!darkMode);
//     document.body.classList.toggle('dark', !darkMode);
//   };

//   return (
//     <nav className={`p-4 flex justify-between items-center shadow-md ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>
//       {/* Left Section: Logo and Company Name */}
//       <div className="flex items-center">
//         <img src={logo} alt="Logo" className="h-12 mr-2" />
//         <img src={swember} className='h-16' alt="swember" />
//       </div>

//       {/* Middle Section: Routing Pages */}
//       <div className="flex space-x-6">
//         <Link to="/" className="hover:text-blue-500">Home</Link>
//         <Link to="/about" className="hover:text-blue-500">About</Link>
//         <Link to="/discoveries" className="hover:text-blue-500">Discoveries</Link>
//         <Link to="/events" className="hover:text-blue-500">Events</Link>
//       </div>

//       {/* Right Section: My Account, Dark/Light Mode, Language */}
//       <div className="flex items-center space-x-4">
//         <button onClick={toggleDarkMode} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
//           {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
//         </button>
//         <div className="relative">
//           <select className="p-2 bg-transparent border rounded">
//             <option value="en">English</option>
//             <option value="es">Español</option>
//             <option value="fr">Français</option>
//           </select>
//         </div>
//         <Link to="/account" className="flex items-center hover:text-blue-500">
//           <FaUser size={20} className="mr-2" />
//           My Account
//         </Link>
//       </div>
//     </nav>
//   );
// };

// export default NavigationBar;

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { FaMoon, FaSun, FaGlobe, FaUser, FaBars, FaTimes } from 'react-icons/fa';
// import logo from '../assets/logo.png';
// import swember from '../assets/swember.gif';

// const NavigationBar = () => {
//     const [darkMode, setDarkMode] = useState(false);
//     const [isMenuOpen, setIsMenuOpen] = useState(false);

//     const toggleDarkMode = () => {
//         setDarkMode(!darkMode);
//         document.body.classList.toggle('dark', !darkMode);
//     };

//     const toggleMenu = () => {
//         setIsMenuOpen(!isMenuOpen);
//     };

//     return (
//         <nav className={`p-4 flex flex-col md:flex-row justify-between items-center shadow-md ${darkMode ? 'bg-slate-900 text-white' : 'bg-white text-black'}`}>
//             {/* Left Section: Logo and Company Name */}
//             <div className="flex items-center justify-between w-full md:w-auto">
//                 <Link to="/">
//                     <div className="flex items-center">
//                         <img src={logo} alt="Logo" className="h-12 mr-2" />
//                         <img src={swember} className="h-16" alt="swember" />
//                     </div>
//                 </Link>

//                 {/* Hamburger Menu Button (Mobile Only) */}
//                 <button onClick={toggleMenu} className="md:hidden p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
//                     {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
//                 </button>
//             </div>

//             {/* Middle Section: Routing Pages */}
//             <div className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 mt-4 md:mt-0`}>
//                 <Link to="/" className="hover:text-orange-500" onClick={() => setIsMenuOpen(false)}>Home</Link>
//                 <Link to="/about" className="hover:text-orange-500" onClick={() => setIsMenuOpen(false)}>About</Link>
//                 <Link to="/discoveries" className="hover:text-orange-500" onClick={() => setIsMenuOpen(false)}>Discoveries</Link>
//                 <Link to="/events" className="hover:text-orange-500" onClick={() => setIsMenuOpen(false)}>Events</Link>
//             </div>

//             {/* Right Section: My Account, Dark/Light Mode, Language */}
//             <div className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 mt-4 md:mt-0`}>
//                 <Link to="/signup" className="flex items-center hover:text-orange-500" onClick={() => setIsMenuOpen(false)}>
//                     <FaUser size={20} className="mr-2" />
//                     My Account
//                 </Link>

//                 <div className="relative">
//                     <select className="p-2 bg-transparent border rounded">
//                         <option value="en">English</option>
//                         <option value="es">Español</option>
//                         <option value="fr">Français</option>
//                     </select>
//                 </div>

//                 <button
//                     onClick={toggleDarkMode}
//                     className={`p-2 rounded-full hover:bg-orange-400 dark:hover:bg-gray-800 ${darkMode ? 'bg-gray-800' : 'bg-orange-400'}`}
//                 >
//                     {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
//                 </button>

//             </div>
//         </nav>
//     );
// };

// export default NavigationBar;

// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { FaMoon, FaSun, FaGlobe, FaUser, FaBars, FaTimes } from 'react-icons/fa';
// import logo from '../assets/logo.png';
// import swember from '../assets/swember.gif';

// const NavigationBar = () => {
//     const [darkMode, setDarkMode] = useState(() => {
//         return localStorage.getItem('darkMode') === 'true'; // Retrieve saved preference
//     });
//     const [isMenuOpen, setIsMenuOpen] = useState(false);

//     useEffect(() => {
//         if (darkMode) {
//             document.documentElement.classList.add('dark');
//             localStorage.setItem('darkMode', 'true');
//         } else {
//             document.documentElement.classList.remove('dark');
//             localStorage.setItem('darkMode', 'false');
//         }
//     }, [darkMode]);

//     const toggleDarkMode = () => {
//         setDarkMode(!darkMode);
//     };

//     const toggleMenu = () => {
//         setIsMenuOpen(!isMenuOpen);
//     };

//     return (
//         <nav className={`p-4 flex flex-col md:flex-row justify-between items-center shadow-md ${darkMode ? 'bg-slate-900 text-white' : 'bg-white text-black'}`}>
//             {/* Left Section: Logo and Company Name */}
//             <div className="flex items-center justify-between w-full md:w-auto">
//                 <Link to="/">
//                     <div className="flex items-center">
//                         <img src={logo} alt="Logo" className="h-12 mr-2" />
//                         <img src={swember} className="h-16" alt="swember" />
//                     </div>
//                 </Link>

//                 {/* Hamburger Menu Button (Mobile Only) */}
//                 <button onClick={toggleMenu} className="md:hidden p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
//                     {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
//                 </button>
//             </div>

//             {/* Middle Section: Routing Pages */}
//             <div className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 mt-4 md:mt-0`}>
//                 <Link to="/" className="hover:text-orange-500" onClick={() => setIsMenuOpen(false)}>Home</Link>
//                 <Link to="/about" className="hover:text-orange-500" onClick={() => setIsMenuOpen(false)}>About</Link>
//                 <Link to="/discoveries" className="hover:text-orange-500" onClick={() => setIsMenuOpen(false)}>Discoveries</Link>
//                 <Link to="/events" className="hover:text-orange-500" onClick={() => setIsMenuOpen(false)}>Events</Link>
//             </div>

//             {/* Right Section: My Account, Dark/Light Mode, Language */}
//             <div className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 mt-4 md:mt-0`}>
//                 <Link to="/signup" className="flex items-center hover:text-orange-500" onClick={() => setIsMenuOpen(false)}>
//                     <FaUser size={20} className="mr-2" />
//                     My Account
//                 </Link>

//                 <div className="relative">
//                     <select className="p-2 bg-transparent border rounded">
//                         <option value="en">English</option>
//                         <option value="es">Español</option>
//                         <option value="fr">Français</option>
//                     </select>
//                 </div>

//                 <button
//                     onClick={toggleDarkMode}
//                     className={`p-2 rounded-full hover:bg-orange-400 dark:hover:bg-gray-800 ${darkMode ? 'bg-gray-800' : 'bg-orange-400'}`}
//                 >
//                     {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
//                 </button>
//             </div>
//         </nav>
//     );
// };

// export default NavigationBar;


// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { FaMoon, FaSun, FaGlobe, FaUser, FaBars, FaTimes } from 'react-icons/fa';
// import logo from '../assets/logo.png';
// import swember from '../assets/swember.gif';
// import { useDarkMode } from '../contexts/DarkModeContext'; // Import the hook

// const NavigationBar = () => {
//   const { darkMode, toggleDarkMode } = useDarkMode(); // Use the hook
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <nav className={`p-4 flex flex-col md:flex-row justify-between items-center shadow-md ${darkMode ? 'bg-gradient-to-r from-gray-800 to-orange-200 text-white' : 'bg-gradient-to-r from-orange-200 to-rose-300 text-black'}`}>
//      {/* <nav className={`p-4 flex flex-col md:flex-row justify-between items-center shadow-md bg-none`}> */}
//       {/* Left Section: Logo and Company Name */}
//       <div className="flex items-center justify-between w-full md:w-auto">
//         <Link to="/">
//           <div className="flex items-center">
//             <img src={logo} alt="Logo" className="h-12 mr-2" />
//             <img src={swember} className="h-16" alt="swember" />
//           </div>
//         </Link>

//         {/* Hamburger Menu Button (Mobile Only) */}
//         <button onClick={toggleMenu} className="md:hidden p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
//           {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
//         </button>
//       </div>

//       {/* Middle Section: Routing Pages */}
//       <div className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 mt-4 md:mt-0`}>
//         <Link to="/" className="hover:text-orange-500" onClick={() => setIsMenuOpen(false)}>Home</Link>
//         <Link to="/about" className="hover:text-orange-500" onClick={() => setIsMenuOpen(false)}>About</Link>
//         <Link to="/discoveries" className="hover:text-orange-500" onClick={() => setIsMenuOpen(false)}>Discoveries</Link>
//         <Link to="/events" className="hover:text-orange-500" onClick={() => setIsMenuOpen(false)}>Events</Link>
//       </div>

//       {/* Right Section: My Account, Dark/Light Mode, Language */}
//       <div className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 mt-4 md:mt-0`}>
//         <Link to="/signup" className="flex items-center hover:text-orange-500" onClick={() => setIsMenuOpen(false)}>
//           <FaUser size={20} className="mr-2" />
//           My Account
//         </Link>

//         <div className="relative">
//           <select className="p-2 bg-transparent border rounded">
//             <option value="en">English</option>
//             <option value="es">Español</option>
//             <option value="fr">Français</option>
//           </select>
//         </div>

//         <button
//           onClick={toggleDarkMode}
//           className={`p-2 rounded-full   ${darkMode ? 'bg-gray-800 hover:bg-gradient-to-r from-orange-200 to-rose-300' : 'hover:bg-gradient-to-r from-orange-300 to-rose-500 bg-slate-300 '}`}
//         >
//           {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
//         </button>
//       </div>
//     </nav>
//   );
// };

// export default NavigationBar;

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaMoon, FaSun, FaGlobe, FaUser, FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/logo.png';
import swember from '../assets/swember.gif';
import { useDarkMode } from '../contexts/DarkModeContext'; // Import the hook

const NavigationBar = () => {
  const { darkMode, toggleDarkMode } = useDarkMode(); // Use the hook
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Add a class to the navigation bar after the component mounts
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 p-4 flex flex-col md:flex-row justify-between items-center shadow-md transition-transform duration-1000 ease-out ${
        darkMode ? 'bg-gradient-to-r from-gray-800 to-orange-200 text-white' : 'bg-gradient-to-r from-orange-200 to-rose-300 text-black'
      } ${isLoaded ? 'translate-y-0' : '-translate-y-full'}`}
    >
      {/* Left Section: Logo and Company Name */}
      <div className="flex items-center justify-between w-full md:w-auto">
        <Link to="/">
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="h-12 mr-2" />
            <img src={swember} className="h-16" alt="swember" />
          </div>
        </Link>

        {/* Hamburger Menu Button (Mobile Only) */}
        <button onClick={toggleMenu} className="md:hidden p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
          {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </div>

      {/* Middle Section: Routing Pages */}
      <div className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 mt-4 md:mt-0`}>
        <Link to="/" className="hover:text-orange-500" onClick={() => setIsMenuOpen(false)}>Home</Link>
        <Link to="/about" className="hover:text-orange-500" onClick={() => setIsMenuOpen(false)}>About</Link>
        <Link to="/discoveries" className="hover:text-orange-500" onClick={() => setIsMenuOpen(false)}>Discoveries</Link>
        <Link to="/events" className="hover:text-orange-500" onClick={() => setIsMenuOpen(false)}>Events</Link>
      </div>

      {/* Right Section: My Account, Dark/Light Mode, Language */}
      <div className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 mt-4 md:mt-0`}>
        <Link to="/signup" className="flex items-center hover:text-orange-500" onClick={() => setIsMenuOpen(false)}>
          <FaUser size={20} className="mr-2" />
          My Account
        </Link>

        <div className="relative">
          <select className="p-2 bg-transparent border rounded">
            <option value="en">English</option>
            <option value="es">Español</option>
            <option value="fr">Français</option>
          </select>
        </div>

        <button
          onClick={toggleDarkMode}
          className={`p-2 rounded-full ${
            darkMode ? 'bg-gray-800 hover:bg-gradient-to-r from-orange-200 to-rose-300' : 'hover:bg-gradient-to-r from-orange-300 to-rose-500 bg-slate-300'
          }`}
        >
          {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
        </button>
      </div>
    </nav>
  );
};

export default NavigationBar;