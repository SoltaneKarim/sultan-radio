import React from 'react';

const CardDetails = ({ name, message }) => {
  return (
    <div className="card">
      <h3 className="title">{name}</h3>
      <div className="bar">
        <div className="emptybar"></div>
        <h3 className="title">{message}</h3>
      </div>
    </div>
  );
};

export default CardDetails;
