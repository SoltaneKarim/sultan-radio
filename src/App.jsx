import React from 'react';
import './App.css';
import StreamPlayer from './components/StreamPlayer';
import Footer from './components/Footer';
import { pictures } from "./assets/hiphop";


function App() {
  return (
    <div >
        <img className="offLogo" src={pictures.logo} alt="logo" />

      <StreamPlayer />
      <Footer />
    </div>
  );
}

export default App;