import React, { useState, useEffect } from "react";
import ReactHowler from "react-howler";
import { pictures,hiphop } from "../assets/hiphop";


const StreamPlayer = () => {
  const [play, setPlay] = useState(true); // Set initial state to true
  const [muted, setMuted] = useState(true); // New state for muting/unmuting
  const [currentIndex, setCurrentIndex] = useState(0);
  const [index, setIndex] = useState(0);
  const [array, setArray] = useState([])
  const image = muted ? pictures[0] : pictures[1]; // Update image based on muted state
  const music = hiphop;

  const toggleAudio = () => {
    setMuted((prevMuted) => !prevMuted); // Toggle muted state
  };

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * music.length);
    setIndex(randomIndex); 
    setCurrentIndex(randomIndex);
  }, []);

  const handleEnd = () => {
    // Play the next song randomly when the current one ends
    const randomIndex = Math.floor(Math.random() * music.length);
    
    if(array.length === 3){
      setIndex(0);
      setCurrentIndex(0);
      setArray([])
    }
    else {
      const updatedList = [...array, randomIndex];
      setIndex(randomIndex);
      setCurrentIndex(randomIndex);
      setArray(updatedList)
    }
  };
  
  const song = music[currentIndex] ? ( music[currentIndex] ).title :  "";
  
  return (
    <div className="home">
      <div className="player-controls">
      <div className="player">
        <ReactHowler
          key={index}
          src={music[currentIndex]?.url}
          playing={play}
          loop={true} // Set loop to true to continue playing after it finishes
          mute={muted} // Set mute state
          onEnd={handleEnd} // Call handleEnd when the current song ends
        />
        <img id="pp-img" onClick={toggleAudio} src={image} alt="Mute/Unmute" />

      </div>  
        <div className="card">
          <h3 className="title">{song}</h3>
        </div>
      </div>
        <img className="giphy" src={pictures[2]} alt="apes" />
      
    </div>
  );
};

export default StreamPlayer;
