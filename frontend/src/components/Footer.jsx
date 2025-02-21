// import React, { useState } from 'react';
// import { FaGooglePlay, FaApple, FaInstagram, FaTwitter, FaEnvelope, FaLinkedin } from 'react-icons/fa';
// import logo from '../assets/logo.png';
// import swember from '../assets/swember.gif';

// const Footer = ({ darkMode }) => {
//     return (
//         <footer className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-800 text-white'} py-8`}>
//             <div className="container mx-auto px-4">
//                 {/* Top Section */}
//                 <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-700 pb-6">
//                     {/* Left Section */}
//                     <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
//                         {/* Logo Section */}
//                         <div className="flex items-center space-x-2">
//                             <img src={logo} alt="Swember Logo" className="w-12 h-12" />
//                             <img src={swember} className='h-16' alt="" />
//                         </div>

//                         {/* Features Section */}
//                         <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6">
//                             <li><a href="/" className="hover:text-gray-400">Home</a></li>
//                             <li><a href="/features" className="hover:text-gray-400">About</a></li>
//                             <li><a href="/pricing" className="hover:text-gray-400">Discoveries</a></li>
//                             <li><a href="/contact" className="hover:text-gray-400">Events</a></li>
//                         </ul>

//                         <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6">
//                             <li><a href="/" className="hover:text-gray-400">Accounts</a></li>
//                             <li><a href="/features" className="hover:text-gray-400">Features</a></li>
//                             <li><a href="/pricing" className="hover:text-gray-400">Faq</a></li>
//                             <li><a href="/contact" className="hover:text-gray-400">Pricing</a></li>
//                         </ul>
//                     </div>

//                     {/* Right Section */}
//                     <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8 mt-6 md:mt-0">
//                         {/* App Stores */}
//                         <div className="flex space-x-4">
//                             <a href="https://play.google.com" className="relative group">
//                                 <FaGooglePlay className="w-8 h-8 hover:text-gray-400" />
//                                 <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 bg-black text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
//                                     Google Play
//                                 </span>
//                             </a>
//                             <a href="https://apple.com" className="relative group">
//                                 <FaApple className="w-8 h-8 hover:text-gray-400" />
//                                 <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 bg-black text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
//                                     Apple Store
//                                 </span>
//                             </a>
//                         </div>

//                         {/* Social Icons */}
//                         <div className="flex space-x-4">
//                             <a href="https://instagram.com" className="relative group">
//                                 <FaInstagram className="w-6 h-6 hover:text-gray-400" />
//                                 <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 bg-black text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
//                                     Instagram
//                                 </span>
//                             </a>
//                             <a href="https://twitter.com" className="relative group">
//                                 <FaTwitter className="w-6 h-6 hover:text-gray-400" />
//                                 <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 bg-black text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
//                                     Twitter
//                                 </span>
//                             </a>
//                             <a href="https://linkedin.com" className="relative group">
//                                 <FaLinkedin className="w-6 h-6 hover:text-gray-400" />
//                                 <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 bg-black text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
//                                     LinkedIn
//                                 </span>
//                             </a>
//                             <a href="mailto:info@swember.com" className="relative group">
//                                 <FaEnvelope className="w-6 h-6 hover:text-gray-400" />
//                                 <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 bg-black text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
//                                     Email
//                                 </span>
//                             </a>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Bottom Section */}
//                 <div className="text-center mt-6">
//                     <p>&copy; {new Date().getFullYear()} Swember. All rights reserved.</p>
//                 </div>
//             </div>
//         </footer>
//     );
// };

// export default Footer;

// import { useLocation } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import logo from '../assets/logo.png'
// import swember from '../assets/swember.gif'
// // import { FaInstagramSquare } from "react-icons/fa";
// import { FaEnvelope, FaInstagram, FaTwitter } from "react-icons/fa";
// // import { FaFacebook } from "react-icons/fa";
// import { LuFacebook } from "react-icons/lu";
// // import { FaLinkedin } from "react-icons/fa";
// import { FaLinkedinIn } from "react-icons/fa6";


// // Footer Component
// function Footer() {
//     const location = useLocation();

//     // Paths where the footer should be hidden
//     const hideFooterPaths = ['/login', '/signup'];

//     // Conditionally render the footer based on the path
//     if (hideFooterPaths.includes(location.pathname)) {
//         return null; // Do not render footer
//     }

//     return (
//         <>
//             <div className='bg-white shadow-lg'>
//                 <footer class="" className='px-5 py-5'>
//                     <div className='grid md:flex md:flex-row md:justify-around'>
//                         <div className='mb-3 flex justify-around md:flex flex-col '>
//                             <Link to={"/"} className='flex items-center gap-0'>
//                                 <img src={logo} alt="" className=' h-20 w-20  mix-blend-multiply' />
//                                 <img src={swember} className='h-16 flex hover:scale-105' />
//                             </Link>
//                             <div className='flex flex-col md:items-start'>
//                                 <div className='md:mb-3 px-4'>
//                                     <ul className='gap-3 md:gap-5 flex md:flex'>
//                                         <li className="mb-2 hover:text-black hover:scale-105"><Link to={"/"}>Home</Link></li>
//                                         <li className="mb-2 hover:text-black hover:scale-105"><Link to={"/about"}>About</Link></li>
//                                         <li className="mb-2 hover:text-black hover:scale-105"><Link to={"/gallery"}>Gallery</Link></li>
//                                         <li className="mb-2 hover:text-black hover:scale-105"><Link to={"/contact"}>Contact</Link></li>
//                                         <li className="mb-2 hover:text-black hover:scale-105"><Link to={"/faq"}>FAQs</Link></li>
//                                     </ul>
//                                 </div>
//                                 <div className='mb-3 px-4 '>
//                                     <ul className='gap-2 flex flex-col'>
//                                         <Link to={"/app"} className='block text-transparent bg-gradient-to-r from-rose-800 to-purple-800  bg-clip-text font-bold z-50 hover:scale-105'>swember@app</Link>
//                                         <Link to={"http://swember.in"} className='block text-transparent bg-gradient-to-r from-rose-800 to-purple-800  bg-clip-text font-bold z-50 hover:scale-105'> <u>Swember</u> </Link>
//                                     </ul>
//                                 </div>
//                             </div>
//                         </div>

//                         <div className='mb-3'>
//                             <form className='flex flex-col gap-3'>
//                                 <h2 className='font-semibold
//               pb-1 border-b-2'>Subscribe to our newsletter</h2>
//                                 <p>Monthly digest of what's new and exciting from us.</p>
//                                 <div class="d-flex flex-column flex-sm-row w-100 gap-2">
//                                     <label class="visually-hidden">Email address</label>
//                                     <input id="newsletter1" type="text" class="form-control" placeholder="Email address" fdprocessedid="1nza4v" />
//                                     <button class="btn btn-primary" type="button" fdprocessedid="78imxi" className='bg-gradient-to-r from-rose-500 to-purple-600 text-white px-6 py-2 rounded-full font-medium outline-rose-700 hover:scale-105'>Subscribe</button>
//                                 </div>
//                             </form>
//                         </div>
//                     </div>

//                     <div class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top" className='flex flex-col items-center gap-3 border-t-2 pt-3 border-t-slate-950  md:flex-row md:justify-around '>
//                         <p>&copy; {new Date().getFullYear()} swember.in. All rights reserved.</p>
//                         <ul class="list-unstyled d-flex" className='list-none flex gap-3 text-3xl md:gap-5'>
//                             <li>
//                                 <Link to={"https://linkedin.com"}>
//                                     <FaInstagram className='bg-gradient-to-r from-rose-500 to-purple-600 p-1 text-white rounded-md' />
//                                 </Link>
//                             </li>
//                             <li>
//                                 <Link to={"https://linkedin.com"}>
//                                     <LuFacebook className='bg-gradient-to-r from-blue-800 to-blue-800 p-1 text-white rounded-md' />
//                                 </Link>
//                             </li>
//                             <li>
//                                 <Link to={"https://linkedin.com"}>
//                                     <FaLinkedinIn className='bg-gradient-to-r from-blue-800 to-blue-600 p-1 text-white rounded-md' />
//                                 </Link>
//                             </li>
// <li>
//     <Link to={"https://linkedin.com"}>
//         <FaTwitter className="bg-gradient-to-r from-blue-800 to-blue-600 p-1 text-white rounded-md" />
//     </Link>
// </li>
// <li>
//     <Link to={"https://linkedin.com"}>
//         <FaEnvelope className="bg-gradient-to-r from-red-800 to-red-600 p-1 text-white rounded-md" />
//     </Link>
// </li>
//                         </ul>
//                     </div>
//                 </footer>
//             </div>
//         </>
//     );
// }

// export default Footer;

import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

import logo from '../assets/logo.png';
import swember from '../assets/swember.gif';
import { FaEnvelope, FaInstagram, FaTwitter } from "react-icons/fa";
import { LuFacebook } from "react-icons/lu";
import { FaLinkedinIn } from "react-icons/fa6";
import { useDarkMode } from '../contexts/DarkModeContext';  // Import the hook

function Footer() {
  const location = useLocation();
  const { darkMode } = useDarkMode(); // Use the hook

  // Paths where the footer should be hidden
  const hideFooterPaths = ['/login', '/signup'];

  // Conditionally render the footer based on the path
  if (hideFooterPaths.includes(location.pathname)) {
    return null; // Do not render footer
  }

  return (
    <div className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'} shadow-lg`}>
      <footer className="px-5 py-5">
        <div className="grid md:flex md:flex-row md:justify-around">
          {/* Left Section */}
          <div className="mb-3 flex justify-around md:flex flex-col">
            <Link to="/" className="flex items-center gap-0">
              <img src={logo} alt="" className="h-20 w-20 mix-blend-multiply" />
              <img src={swember} className="h-16 flex hover:scale-105" />
            </Link>
            <div className="flex flex-col md:items-start">
              <div className="md:mb-3 px-4">
                <ul className="gap-3 md:gap-5 flex md:flex">
                  <li className="mb-2 hover:text-black hover:scale-105"><Link to="/">Home</Link></li>
                  <li className="mb-2 hover:text-black hover:scale-105"><Link to="/about">About</Link></li>
                  <li className="mb-2 hover:text-black hover:scale-105"><Link to="/gallery">Gallery</Link></li>
                  <li className="mb-2 hover:text-black hover:scale-105"><Link to="/contact">Contact</Link></li>
                  <li className="mb-2 hover:text-black hover:scale-105"><Link to="/faq">FAQs</Link></li>
                </ul>
              </div>
              <div className="mb-3 px-4">
                <ul className="gap-2 flex flex-col">
                  <Link to="/app" className="block text-transparent bg-gradient-to-r from-rose-800 to-purple-800 bg-clip-text font-bold z-50 hover:scale-105">swember@app</Link>
                  <Link to="http://swember.in" className="block text-transparent bg-gradient-to-r from-rose-800 to-purple-800 bg-clip-text font-bold z-50 hover:scale-105"> <u>Swember</u> </Link>
                </ul>
              </div>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="mb-3">
            <form className="flex flex-col gap-3">
              <h2 className="font-semibold pb-1 border-b-2">Subscribe to our newsletter</h2>
              <p>Monthly digest of what's new and exciting from us.</p>
              <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                <label className="visually-hidden">Email address</label>
                <input id="newsletter1" type="text" className="form-control" placeholder="Email address" />
                <button type="button" className="btn btn-primary bg-gradient-to-r from-rose-500 to-purple-600 text-white px-6 py-2 rounded-full font-medium outline-rose-700 hover:scale-105">Subscribe</button>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col items-center gap-3 border-t-2 pt-3 border-t-slate-950 md:flex-row md:justify-around">
          <p>© 2024 swember.in. All rights reserved.</p>
          <ul className="list-none flex gap-3 text-3xl md:gap-5">
            <li>
              <Link>
                <FaInstagram className="bg-gradient-to-r from-rose-500 to-purple-600 p-1 text-white rounded-md" />
              </Link>
            </li>
            <li>
              <Link>
                <LuFacebook className="bg-gradient-to-r from-blue-800 to-blue-800 p-1 text-white rounded-md" />
              </Link>
            </li>
            <li>
              <Link>
                <FaLinkedinIn className="bg-gradient-to-r from-blue-800 to-blue-600 p-1 text-white rounded-md" />
              </Link>
            </li>
            <li>
              <Link to={"https://linkedin.com"}>
                <FaTwitter className="bg-gradient-to-r from-blue-800 to-blue-600 p-1 text-white rounded-md" />
              </Link>
            </li>
            <li>
              <Link to={"https://linkedin.com"}>
                <FaEnvelope className="bg-gradient-to-r from-red-800 to-red-600 p-1 text-white rounded-md" />
              </Link>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default Footer;