/* eslint-disable react/prop-types */
import React from 'react';
import Star from './Star';

const createArray = (length) => [...Array(length)];

export default function StarRating({ totalStars = 5, selectedStars = 0, onRate = (f) => f }) {
  return (
    <div style={{ padding: '25px 0' }}>
      {createArray(totalStars).map((num, index) => (
        <Star key={index} selected={selectedStars > index} onSelect={() => onRate(index + 1)} />
      ))}
      <p>
        {selectedStars} of {totalStars} stars
      </p>
      <hr />
    </div>
  );
}
