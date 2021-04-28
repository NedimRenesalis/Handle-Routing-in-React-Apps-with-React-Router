import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

import Manatee from '../Manatee/Manatee';

function App() {
  return (
    <div className="wrapper">
      <h1>Marine Mammals</h1>
      <Manatee />
    </div>
  );
}

export default App;
