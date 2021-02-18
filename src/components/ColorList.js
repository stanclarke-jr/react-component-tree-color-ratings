/* eslint-disable react/prop-types */
import React from 'react';
import Color from './Color';

export default function ColorList({
  colors = [],
  onRemoveColor = (f) => f,
  onRateColor = (f) => f,
}) {
  if (!colors.length) return <div>No colors listed. (Add a color).</div>;
  // else
  return (
    <div className="colors">
      {colors.map((color) => (
        <section key={color.id}>
          <Color {...color} onRemove={onRemoveColor} onRate={onRateColor} />
        </section>
      ))}
    </div>
  );
}
