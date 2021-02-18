/* eslint-disable react/prop-types */
import React, { useRef } from 'react';

// An *uncontrolled* component using `refs` -- *Controlled* components are recommended
export default function UncontrolledAddColorForm({ onNewColor = (f) => f }) {
  const colorTitle = useRef();
  const hexColor = useRef();
  console.log(hexColor);

  const submit = (e) => {
    e.preventDefault();
    console.log(colorTitle.current);
    const title = colorTitle.current.value;
    const color = hexColor.current.value;
    onNewColor(title, color);
    colorTitle.current.value = '';
    hexColor.current.value = '';
  };

  return (
    <form onSubmit={submit}>
      <input type="text" ref={colorTitle} placeholder="Enter the name of your color..." /> required
      <input type="color" ref={hexColor} required />
      <button type="submit">+ADD</button>
    </form>
  );
}
