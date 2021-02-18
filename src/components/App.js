import React, { useState } from 'react';
import { v4 } from 'uuid';
import colorData from '../assets/color-data.json';
import ColorList from './ColorList';
import AddColorForm from './AddColorForm';
import '../styles/App.css';

export default function App() {
  const [colors, setColors] = useState(colorData);
  return (
    <main className="App">
      <AddColorForm
        onNewColor={(title, color) => {
          const newColorSet = [
            ...colors,
            {
              id: v4(),
              title,
              rating: 0,
              color,
            },
          ];
          setColors(newColorSet);
          console.log(newColorSet);
        }}
      />
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
