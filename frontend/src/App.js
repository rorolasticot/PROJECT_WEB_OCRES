import React from 'react';
import logo from './logo.svg';
import './App.css';
import './API/script.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          DONE
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={'start()'}></button>
      </header>
    </div>
  );
}

export default App;
