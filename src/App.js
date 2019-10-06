import React from 'react';
import logo from './logo.svg';
import './App.css';
 
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1> DevOps Challenge </h1>
	  <h2> CI PipeLine</h2>
          <h3> - GitHub      </h3>
	  <h3> - Travis CI   </h3>
	  <h3> - Docker Hub  </h3>
	  <h3> - Watchtower  </h3>
      </header>
    </div>
  );
}
export default App;
