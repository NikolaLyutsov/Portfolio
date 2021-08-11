import React from "react";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Education from "./components/Education/Education";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import './App.css';

function App() {
  return (
    <main>
      <Navbar />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Contact />
    </main>
  );
}

export default App;
