import React from 'react';
import logo from './logo.svg';
import './App.css';
 
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1> DevOps Challenge </h1>
	  <h3> CI PipeLine</h3>
       </header>
       <body>

          <p> - GitHub      </p>
	  <p> - Travis CI   </p>
	  <p> - Docker Hub  </p>
	  <p> - Watchtower  </p>
      </body>
    </div>
  );
}

export default App;
