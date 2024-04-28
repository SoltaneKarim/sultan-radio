import React from 'react';

const cleanSongName = (name) => {
  return name
    ?.split("/")[5]
    ?.replace(/%20/g, " ")
    ?.replace(/.mp3/g, "")
    ?.replace(/%5/g, "")
    ?.replace(/%80/g, "")
    ?.replace(/with lyrics/g, "")
    ?.replace(/.(Official Video)/g, "")
    ?.replace(/%E2/g, "")
    ?.replace(/.(Official Video)/g, "")
    ?.replace(/%99/g, "")
    ?.replace(/%C3/g, "")
    ?.replace(/%F0/g, "")
    ?.replace(/%9F/g, "")
    ?.replace(/%8E/g, "")
    ?.replace(/%A7/g, "")
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
