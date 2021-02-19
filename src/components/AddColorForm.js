/* eslint-disable react/prop-types */
import React from 'react';
import { useInput } from '../hooks/useInput';
import { useColors } from '../hooks/colorHooks';

// A *controlled* component with `useState` - React *controls* the state of the form.
// NOTE: Controlled form components are rerendered, a lot. Good to know when considering optimization
export default function AddColorForm() {
  const [titleProps, resetTitle] = useInput('');
  const [colorProps, resetColor] = useInput('#000000');
  const { addColor } = useColors();

  const submit = (e) => {
    e.preventDefault();
    addColor(titleProps.value, colorProps.value);
    resetTitle();
    resetColor();
  };

  return (
    <form onSubmit={submit}>
      <input type="text" {...titleProps} placeholder="Enter color name..." required />
      <input type="color" {...colorProps} required />
      <div>
        <button type="submit">+ADD</button>
      </div>
    </form>
  );
}
