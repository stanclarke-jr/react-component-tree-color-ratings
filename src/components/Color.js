/* eslint-disable react/prop-types */
import React from 'react';
import StarRating from './StarRating';

export default function Color({
  id,
  title,
  color,
  rating,
  onRemove = (f) => f,
  onRate = (f) => f,
}) {
  return (
    <>
      <h1>{title}</h1>
      <button type="button" onClick={() => onRemove(id)}>
        &times;
      </button>
      <div style={{ height: 50, backgroundColor: color }} />
      <StarRating selectedStars={rating} onRate={(rating) => onRate(id, rating)} />
    </>
  );
}
