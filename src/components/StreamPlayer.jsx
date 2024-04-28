import React, { useState, useEffect } from "react";
import ReactHowler from "react-howler";
import { assets } from "../assets";

const StreamPlayer = () => {
  const [play, setPlay] = useState(true); // Set initial state to true
  const [muted, setMuted] = useState(true); // New state for muting/unmuting
  const [currentIndex, setCurrentIndex] = useState(0);
  const [index, setIndex] = useState(0);
  const image = muted ? assets.pictures.playing : assets.pictures.pausing; // Update image based on muted state
  const music = assets.music;

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

  const toRemove = ["Radio","HQ","Audio","HD","%20", ".mp3", "%5", "%80", "with", "With", "lyrics", "Lyrics", ".(Official Video)", "%E2", "Official", "official", "%99", "%C3", "%F0", "%9F", "%8E", "%A7", "v1", "version", "MusicVideo", "Video", ""];

  const cleanSongName = (name) => {
    let cleanedName = name.split("/")[5]; // Get the song name part
    toRemove.forEach(substring => {
      cleanedName = cleanedName?.replace(new RegExp(substring, "gi"), ''); // Replace each substring with an empty string
    });
    return cleanedName;
  };
  
  const song = cleanSongName(music[currentIndex]);
  
  return (
    <div>
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
