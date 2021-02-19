/* eslint-disable import/no-cycle */
/* eslint-disable react/prop-types */
import React from 'react';
import Color from './Color';
import { useColors } from '../hooks/colorHooks';

export default function ColorList() {
  const { colors } = useColors();
  if (!colors.length) return <div>No colors listed. (Add a color).</div>;
  // else
  return (
    <div className="colors">
      {colors.map((color) => (
        <section key={color.id}>
          <Color {...color} />
        </section>
      ))}
    </div>
  );
}
