import React, { useState, useEffect } from "react";
import ReactHowler from "react-howler";
import { pictures,hiphop } from "../assets/hiphop";


const StreamPlayer = () => {
  const [play, setPlay] = useState(true); // Set initial state to true
  const [muted, setMuted] = useState(true); // New state for muting/unmuting
  const [currentIndex, setCurrentIndex] = useState(0);
  const [index, setIndex] = useState(0);
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
    setIndex(randomIndex);
    setCurrentIndex(randomIndex);
  };

  const cleanSongName = (url) => {
    if (url){
      // Extract the path from the URL
    const pathStartIndex = url.lastIndexOf('/') + 1;
    const path = url.substring(pathStartIndex);

    // Remove file extension if present
    const filename = path.split('.')[0];

    // Replace "%20" with spaces
    const cleanedName = filename.replace(/%20/g, ' ').replace(/%C3%9C/g, ' ').replace(/%E2%80%99/g, ' ')

    // Split the filename by '-' and capitalize each word
    const words = cleanedName.split('-');
    const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
    const finalName = capitalizedWords.join('-');

    return finalName; 
    }
    return -1
    
   };
  
  const song = music[currentIndex] ? cleanSongName( music[currentIndex] ):  "";
  
  return (
    <div className="home">
      <div className="player">
        <ReactHowler
          key={index}
          src={music[currentIndex]}
          playing={play}
          loop={true} // Set loop to true to continue playing after it finishes
          mute={muted} // Set mute state
          onEnd={handleEnd} // Call handleEnd when the current song ends
        />
        <img id="pp-img" onClick={toggleAudio} src={image} alt="Mute/Unmute" />
      </div>
      <div>
        <div className="card">
          <h3 className="title">{song}</h3>
        </div>
      </div>
    </div>
  );
};

export default StreamPlayer;
