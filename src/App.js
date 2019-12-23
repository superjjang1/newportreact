import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar/NavBar';
import AboutMe from './components/AboutMe/AboutMe';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <AboutMe/>
    </div>
  );
}

export default App;
