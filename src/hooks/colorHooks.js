/* eslint-disable react/prop-types */
import React, { createContext, useState, useContext } from 'react';
import { v4 } from 'uuid';
import colorData from '../assets/color-data.json';

const ColorContext = createContext();

export const useColors = () => useContext(ColorContext);

export default function ColorProvider({ children }) {
  const [colors, setColors] = useState(colorData);

  const addColor = (title, color) => {
    setColors([
      ...colors,
      {
        id: v4(),
        title,
        rating: 0,
        color,
      },
    ]);
  };

  const rateColor = (id, rating) => {
    setColors(colors.map((color) => (color.id === id ? { ...color, rating } : color)));
  };

  const removeColor = (id) => setColors(colors.filter((color) => color.id !== id));

  return (
    <ColorContext.Provider value={{ colors, addColor, rateColor, removeColor }}>
      {children}
    </ColorContext.Provider>
  );
}
