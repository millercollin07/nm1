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
        <p>Ci pipline uses git hub which triggers travis ci which triggers</p>
	  <p>the upload of a docker image to Docker Hub upon successful</p>
	  <p>image build and testing</p>
	 <p>test2</p> 
      </header>
    </div>
  );
}

export default App;
