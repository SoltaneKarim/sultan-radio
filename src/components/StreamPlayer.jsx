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
        // If two consecutive slashes are encountered, break the loop
        break;
      } else if (name[i] === '/') {
        // If a single slash is encountered, reset the word
        word = '';
      } else {
        // If a character is not a slash, add it to the word
        word += name[i];
      }
    }
    // Define words to be removed
    const wordsToRemove = ["%20", ".mp3", "%5", "%80", "%E2", "%99", "%C3", "%F0", "%9F", "%8E", "%A7"];
    // Iterate through each character in the word and check if it matches any of the words to remove
    for (let i = 0; i < word.length; i++) {
      let match = false;
      for (let j = 0; j < wordsToRemove.length; j++) {
        const len = wordsToRemove[j].length;
        // Check if the current substring in the word matches any of the words to remove
        if (word.substring(i, i + len) === wordsToRemove[j]) {
          // If a match is found, set match to true and skip the characters to remove
          match = true;
          i += len - 1;
          break;
        }
      }
      // If no match is found, add the character to the cleaned name
      if (!match) {
        cleanedName += word[i];
      } else {
        // If a match is found, add a space after removing the word
        cleanedName += " ";
      }
    }
    return cleanedName;
  };
  
  
  const song = cleanSongName(music[currentIndex]);
  
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
