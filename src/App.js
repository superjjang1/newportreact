import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar/NavBar';
import AboutMe from './components/AboutMe/AboutMe';
import Projects from './components/Projects/Projects';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <AboutMe/>
      <Projects/>
    </div>
  );
}

export default App;
