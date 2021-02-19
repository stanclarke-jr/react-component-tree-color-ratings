import React from 'react';
import ColorList from './ColorList';
import AddColorForm from './AddColorForm';
import '../styles/App.css';

export default function App() {
  return (
    <main className="App">
      <AddColorForm />
      <ColorList />
    </main>
  );
}
