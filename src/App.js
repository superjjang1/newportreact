import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar/NavBar';
import AboutMe from './components/AboutMe/AboutMe';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Links from './components/Links/Links';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <AboutMe/>
      <Projects/>
      <Skills/>
      <Links/>
    </div>
  );
}

export default App;
