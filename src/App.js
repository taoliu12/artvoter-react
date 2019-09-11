import React from 'react';
import logo from './logo.svg';
import './App.css';
import Artworks from './components/Artworks'

function App() {
  return (
    <div className="App">
      <Artworks>
        Child
        <div>2nd Child</div>
      </Artworks>
    </div>
  );
}

export default App;
