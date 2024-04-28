import React, { useState, useEffect } from "react";
import ReactHowler from "react-howler";
import { assets } from "../assets";
import { array } from "../../public/userTestimonial/index"; // Assuming the dummy data is in a file named data.js
import CardDetails from "./CardDetails";

const StreamPlayer = () => {
  const [play, setPlay] = useState(true); // Set initial state to true
  const [muted, setMuted] = useState(true); // New state for muting/unmuting
  const [currentIndex, setCurrentIndex] = useState(0);
  const [index, setIndex] = useState(0);
  const [song, setSong] = useState("");
  const image = muted ? assets.pictures.playing : assets.pictures.pausing; // Update image based on muted state
  const music = assets.music;
  const [playlist, setPlaylist] = useState([]);

  const toggleAudio = () => {
    setMuted((prevMuted) => !prevMuted); // Toggle muted state
    console.log("currentIndex", currentIndex);
  };

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * music.length);
    setIndex(randomIndex);
    setCurrentIndex(randomIndex);
    setPlaylist(music[currentIndex]);
  }, []);

  const handleEnd = () => {
    // Play the next song randomly when the current one ends
    const randomIndex = Math.floor(Math.random() * music.length);
    setIndex(randomIndex);
    setCurrentIndex(randomIndex);
    setPlaylist(music[currentIndex]);
  };

  return (
    <div>
      <div className="player">
        <ReactHowler
          key={index}
          src={song ? song : music[currentIndex]}
          playing={play}
          loop={true} // Set loop to true to continue playing after it finishes
          mute={muted} // Set mute state
          onEnd={handleEnd} // Call handleEnd when the current song ends
        />
        <img id="pp-img" onClick={toggleAudio} src={image} alt="Mute/Unmute" />
      </div>
      <div >
        {music
          .filter((item, index) => index === currentIndex)
          .map((item, index) => (
            <CardDetails key={index} name={item} />
          ))}
      </div>
    </div>
  );
};

export default StreamPlayer;
