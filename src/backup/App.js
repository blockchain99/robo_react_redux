import React from 'react';
// import logo from './logo.svg';
import logo from './ss.png';
import './App.css';
import Hello from './Hello';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <h1 className="App-title">Welcome to TeamplayMe</h1> */}
        <Hello creator={'Solid.Dev'}/>
      </header>
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
    </div>
  );
}

export default App;
