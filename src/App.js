import React from 'react';
import logo from './logo.svg';
import './App.css';
 
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          DevOps Challenge
        </h1>
	  <h3> CI PipeLine</h3>
          <p> - GitHub 
	  <p> - Travis CI
	  <p> - Docker Hub
	  <p> - Watchtower 
      </header>
    </div>
  );
}

export default App;
