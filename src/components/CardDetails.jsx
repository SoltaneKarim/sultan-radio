import React from 'react';

const toRemove = ["%20", ".mp3", "%5", "%80", "with","With","lyrics","Lyrics",".(Official Video)", "%E2", "Official", "official", "%99", "%C3", "%F0", "%9F", "%8E", "%A7","v1","version","MusicVideo","Video",""];

const cleanSongName = (name) => {
  let cleanedName = name.split("/")[5]; // Get the song name part
  toRemove.forEach(substring => {
    cleanedName = cleanedName.replace(new RegExp(substring, "gi"), ''); // Replace each substring with an empty string
  });
  return cleanedName.trim(); // Trim any leading or trailing spaces
};

const CardDetails = ({ name }) => {
  const song = cleanSongName(name);
  console.log(name);
  return (
    <div className="card">
      <h3 className="title">{song}</h3>
    </div>
  );
};

export default CardDetails;
