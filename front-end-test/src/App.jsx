import React from 'react';
import './App.css';
import Context from './context/Context';
import Router from './routes/Router';

function App() {
  return (
    <Context>
      <Router />
    </Context>
  );
}

export default App;
