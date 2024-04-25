import React, { useState, useEffect } from "react";
import ReactHowler from "react-howler";
import { assets } from "../assets";

const StreamPlayer = () => {
  const [play, setPlay] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [pausedIndex, setPausedIndex] = useState(0);

  const image = play ? assets.pictures.pausing : assets.pictures.playing;
  const music = assets.music;

  const toggleAudio = () => {
    setPlay((prevState) => !prevState);
  };

  const handleEnd = () => {
    // Generate a random index for the next song
    const randomIndex = Math.floor(Math.random() * music.length);
    setCurrentIndex(randomIndex);
    setPausedIndex(randomIndex); // Update paused index as well
    setPlay(true); // Start playing the next song
  };

  const handlePause = () => {
    setPlay(false); // Pause the player
    setPausedIndex(currentIndex); // Save the current index
  };

  const handlePlay = () => {
    setCurrentIndex(pausedIndex); // Set the current index to the paused index
    setPlay(true); // Resume playing
  };

  useEffect(() => {
    // Generate a random index when the component mounts
    const randomIndex = Math.floor(Math.random() * music.length);
    setCurrentIndex(randomIndex);
    setPausedIndex(randomIndex);
  }, []);

  return (
    <div>
      <ReactHowler
        src={music[currentIndex]}
        playing={play}
        loop={false}
        onEnd={handleEnd}
      />
      <img
        id="pp-img"
        onClick={play ? handlePause : handlePlay}
        src={image}
        alt="Play/Pause"
      />
    </div>
  );
};

export default StreamPlayer;
