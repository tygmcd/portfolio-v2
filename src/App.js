import './styles/App.css';
import Navbar from './components/Navbar';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from "framer-motion";

import About from './pages/About';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

import MobileNav from './components/MobileNav';
import NotFound from './pages/NotFound';

function App() {
  const location = useLocation();

  return (
    <div className='flex font-Poppins'>
      <MobileNav />
      <Navbar />
      <div className='w-screen bg-gradient-to-r from-primary to-secondary'>
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </AnimatePresence>
      </div>
    </div>
   
  );
}

export default App;
