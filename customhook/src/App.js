import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useHook } from './custom-hook';

function App({ text }) {
  const [isCopy, handleCopy] = useHook();
  console.log(isCopy);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button className="App-link" onClick={() => handleCopy(text)}>
          Learn React
        </button>
      </header>
    </div>
  );
}

export default App;
