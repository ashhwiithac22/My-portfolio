
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Interests from './components/Interests';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Hackathons from './components/Hackathons';      // Add this
import Publications from './components/Publications';  // Add this
import Certificates from './components/Certificates';
import CodingProfiles from './components/CodingProfiles';
import Contact from './components/Contact';
import Footer from './components/Footer';


const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Interests />
      <Skills />
      <Experience />
      <Projects />
      <Hackathons />     {/* Add this line - shows after Projects */}
      <Publications />
      <Certificates />
      <CodingProfiles />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
