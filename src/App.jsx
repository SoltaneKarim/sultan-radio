import React from 'react';
import './App.css';
import StreamPlayer from './components/StreamPlayer';
import Card from "./components/Card"

function App() {
  return (
    <div className='container'>
      <StreamPlayer />
      <Card />

    </div>
  );
}

export default App;