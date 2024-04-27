import React from 'react';
import CardDetails from './CardDetails';
import { array } from '../../public/userTestimonial/index'; // Assuming the dummy data is in a file named data.js


const Card = ({ cards }) => {
  return (
    <div className="container">
      {array.map((item, index) => (
        <CardDetails key={index} name={Object.keys(item)[0]} message={Object.values(item)[0]} />
      ))}
    </div>
  );
};

export default Card;
