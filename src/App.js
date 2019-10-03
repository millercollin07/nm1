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
          <p> - GitHub</p>
	  <p> - Travis CI - triggered when push is made to master branch of git hub</p>
	  <p> - Docker Hub - receives automatic upload of image when Travis successfully builds and tests new git hub code in new docker image.</p>
	  <p> - Watchtower - sits on production server, watches for and downloads/launches new docker images</p> 
      </header>
    </div>
  );
}

export default App;
