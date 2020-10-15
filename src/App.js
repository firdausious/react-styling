import React from 'react';
import logo from './logo.svg';
import './App.css';

import {
  JuiceStyledComponent,
  JuiceInlineStyling,
  JuiceEmotion,
  JuiceSheet
} from './components/Juice'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <br />

        <JuiceSheet />
        <JuiceInlineStyling />
        <JuiceStyledComponent />
        <JuiceEmotion />
      </header>
    </div>
  );
}

export default App;
