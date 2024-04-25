import React from 'react';
import './App.css';
import Header from './components/Header';
import StreamPlayer from './components/StreamPlayer';

function App() {
  return (
    <div className='container'>
      {/* <Header /> */}
      <StreamPlayer />
    </div>
  );
}

export default App;