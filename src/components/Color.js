/* eslint-disable react/prop-types */
import React from 'react';
import StarRating from './StarRating';
import { useColors } from '../hooks/colorHooks';

export default function Color({ id, title, color, rating }) {
  const { rateColor, removeColor } = useColors();

  return (
    <>
      <h1>{title}</h1>
      <button type="button" onClick={() => removeColor(id)}>
        &times;
      </button>
      <div style={{ height: 50, backgroundColor: color }} />
      <StarRating selectedStars={rating} onRate={(rating) => rateColor(id, rating)} />
    </>
  );
}
