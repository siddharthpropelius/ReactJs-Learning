import logo from './logo.svg';
import './App.css';
import { createContext, useState } from 'react';
import Consumer from './Consumer';

export const userContext = createContext();

function App() {
  return (
    <>
      <userContext.Provider value="name">
        <div className="App">App</div>
      </userContext.Provider>
      </>
  );
}

export default App;
