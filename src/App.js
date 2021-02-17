import React, { useState } from 'react';
import colorData from './color-data.json';
import ColorList from './ColorList';
import './App.css';

export default function App() {
  const [colors, setColors] = useState(colorData);
  return (
    <main className="App">
      <ColorList
        colors={colors}
        onRemoveColor={(id) => {
          const newColorSet = colors.filter((color) => color.id !== id);
          setColors(newColorSet);
          console.log(newColorSet);
        }}
        onRateColor={(id, rating) => {
          const newColorSet = colors.map((color) =>
            color.id === id ? { ...color, rating } : color
          );
          setColors(newColorSet);
          console.log(newColorSet);
        }}
      />
    </main>
  );
}
