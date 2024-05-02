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

  const cleanSongName = (name) => {
    let cleanedName = ''; // Initialize an empty string to store the cleaned name
    let word = ''; // Initialize an empty string to build each word
    for (let i = 0; i < name.length; i++) {
      if (name[i] === '/' && name[i + 1] === '/') {
        break;
      } else if (name[i] === '/') {
        word = '';
      } else {
        word += name[i];
      }
    }
    const wordsToRemove = ["%20", ".mp3", "%5", "%80", "%E2", "%99", "%C3", "%F0", "%9F", "%8E", "%A7"];
    for (let i = 0; i < word.length; i++) {
      let match = false;
      for (let j = 0; j < wordsToRemove.length; j++) {
        const len = wordsToRemove[j].length;
        if (word.substring(i, i + len) === wordsToRemove[j]) {
          match = true;
          i += len - 1;
          break;
        }
      }
      if (!match) {
        cleanedName += word[i];
      } else {
        cleanedName += " ";
      }
    }
    return cleanedName;
  };
  
  console.log(music[currentIndex])
  const song = music[currentIndex] ? music[currentIndex] :  "";
  
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
