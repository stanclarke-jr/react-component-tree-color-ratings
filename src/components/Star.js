/* eslint-disable react/prop-types */
import React from 'react';
import { FaStar } from 'react-icons/fa';

export default function Star({ selected = false, onSelect = (f) => f }) {
  return <FaStar color={selected ? '#ffc600' : 'grey'} onClick={onSelect} />;
}
