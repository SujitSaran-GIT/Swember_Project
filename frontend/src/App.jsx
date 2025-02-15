import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavigationBar from './components/NavigationBar';
import Home from './pages/Home';
import About from './pages/About';
import Discoveries from './pages/Discoveries';
import Events from './pages/Events';
import SignUp from './pages/SignUp';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
    <ToastContainer position='top-right' autoClose={3000}/>
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/discoveries" element={<Discoveries />} />
        <Route path="/events" element={<Events />} />
        <Route path='/signup' element={<SignUp/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;